import { globIterateSync } from "glob";
import path from "node:path";
import { argv } from "node:process";
import sharp from "sharp";

// This is the same palette as used by our CSS (as defined by the `--colour-*`
// variables). We sort them to the closest to white is first, because our
// algorithm prefers the earlier colour when two colours are equally distant
// from the comparison colour.
const PALETTE = [
	[235, 198, 195],
	[170, 150, 179],
	[193, 207, 193],
	[34, 34, 34],
	[238, 231, 221],
].sort(
	(a, b) =>
		colourDistance([255, 255, 255], a) - colourDistance([255, 255, 255], b),
);

function colourDistance(a, b) {
	let sqDistance = 0;
	for (let i = 0; i < Math.min(a.length, b.length); i++) {
		sqDistance += (a[i] - b[i]) ** 2;
	}
	return sqDistance;
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

// https://en.wikipedia.org/wiki/Atkinson_dithering
function atkinsonDither(image, palette) {
	function index(x, y) {
		return image.info.channels * (x + image.info.width * y);
	}

	const data = new Uint8ClampedArray(image.data);

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
		.raw()
		.toBuffer({
			resolveWithObject: true,
		});

	const d = atkinsonDither(image, PALETTE);

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
