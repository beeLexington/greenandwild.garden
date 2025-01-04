import { globIterateSync } from "glob";
import path from "node:path";
import { argv } from "node:process";
import sharp from "sharp";

// This is the same palette as used by our CSS (as defined by the `--colour-*`
// variables). We sort them to the closest to white is first, because our
// algorithm prefers the earlier colour when two colours are equally distant
// from the comparison colour.
const BASE_PALETTE = [
	[235, 198, 195],
	[170, 150, 179],
	[193, 207, 193],
	[34, 34, 34],
	[238, 231, 221],
	// [119, 161, 249],
	// [225, 65, 75],
	// [159, 69, 180],
	// [194, 154, 118],
].sort(
	(a, b) =>
		colourDistance([255, 255, 255], a) - colourDistance([255, 255, 255], b),
);

function colourDistance(a, b) {
	let sqDistance = 0;
	for (let i = 0; i < Math.min(a.length, b.length); i++) {
		sqDistance += (a[i] - b[i]) ** 2;
	}
	return Math.sqrt(sqDistance);
}

function approximateColour(colour, palette) {
	const findColour = (remaining, found) => {
		const newFound =
			colourDistance(colour, found) <= colourDistance(colour, remaining[1])
				? found
				: remaining[1];

		if (remaining.length === 2) {
			return newFound;
		}

		return findColour(remaining.slice(1), newFound);
	};

	return findColour(palette, palette[0]);
}

function findPalette(data, info) {
	const size = 16;
	const quantizationFactor = 8;
	const minProximity = 75;

	const colourFrequency = {};
	for (let y = 0; y < info.height; y++) {
		for (let x = 0; x < info.width; x++) {
			const i = info.channels * (x + info.width * y);

			const colour = [];
			for (let j = 0; j < info.channels; j++) {
				colour[j] =
					Math.round(data[i + j] / quantizationFactor) * quantizationFactor;
			}

			colourFrequency[colour] = (colourFrequency[colour] ?? 0) + 1;
		}
	}

	return Object.entries(colourFrequency)
		.sort((a, b) => b[1] - a[1])
		.map((v) => v[0].split(",").map((c) => Number.parseInt(c)))
		.reduce((palette, colour) => {
			if (palette.length >= size) {
				return palette;
			}

			// biome-ignore lint/performance/noAccumulatingSpread:
			const distancesFromPalette = [...palette, ...BASE_PALETTE]
				.map((p) => [p, colourDistance(p, colour)])
				.sort((a, b) => a[1] - b[1]);
			const [closestPaletteColour, shortestDistanceFromPalette] =
				distancesFromPalette[0];

			if (shortestDistanceFromPalette < minProximity) {
				if (palette.includes(closestPaletteColour)) {
					return palette;
				}

				palette.push(closestPaletteColour);
			} else {
				palette.push(colour);
			}

			return palette;
		}, []);
}

// https://en.wikipedia.org/wiki/Atkinson_dithering
function atkinsonDither(image) {
	function index(x, y) {
		return image.info.channels * (x + image.info.width * y);
	}

	const data = new Uint8ClampedArray(image.data);

	const palette = findPalette(data, image.info);

	for (let y = 0; y < image.info.height; y++) {
		for (let x = 0; x < image.info.width; x++) {
			const i = index(x, y);

			const colour = [];
			for (let j = 0; j < image.info.channels; j++) {
				colour[j] = data[i + j];
			}

			const newColour = approximateColour(colour, palette);

			const quantizationError = [];
			for (let j = 0; j < image.info.channels; j++) {
				quantizationError[j] = (data[i + j] - newColour[j]) / 8;
			}

			for (let j = 0; j < image.info.channels; j++) {
				data[i + j] = newColour[j];

				data[index(x + 1, y) + j] += quantizationError[j];
				data[index(x + 2, y) + j] += quantizationError[j];
				data[index(x - 1, y + 1) + j] += quantizationError[j];
				data[index(x, y + 1) + j] += quantizationError[j];
				data[index(x + 1, y + 1) + j] += quantizationError[j];
				data[index(x, y + 2) + j] += quantizationError[j];
			}
		}
	}

	return data;
}

async function process(inputPath, outputPath) {
	console.info(inputPath, "->", outputPath);

	const image = await sharp(inputPath)
		.removeAlpha()
		.resize({
			width: 1000,
			height: 1000,
			fit: "outside",
		})
		.modulate({
			brightness: 1.1,
			saturation: 0.8,
		})
		.raw()
		.toBuffer({
			resolveWithObject: true,
		});

	const d = atkinsonDither(image, BASE_PALETTE);

	return sharp(d, {
		raw: {
			width: image.info.width,
			height: image.info.height,
			channels: image.info.channels,
		},
	}).toFile(outputPath);
}

for (const inputPath of globIterateSync(argv[2])) {
	await process(
		inputPath,
		path.join("src", "lib", "assets", "dithered", path.basename(inputPath)),
	);
}
