<script>
/**
 * @typedef {Object} Props
 * @property {string} [position]
 * @property {import('svelte').Snippet} outer
 * @property {import('svelte').Snippet} inner
 */

/** @type {Props} */
let { position = "left", outer, inner } = $props();
</script>

<div class="image-patch {position}">
	<div>
		{@render outer()}
	</div>

	<div>
		{@render inner()}
	</div>
</div>

<style>
	.image-patch {
		grid-column: 1 / 25;

		display: grid;
		grid-template-columns: 1rem repeat(22, 1fr) 1rem;
		row-gap: 1em;
		column-gap: 0.5em;

		margin-block-end: 3rem;
	}

	@media (min-width: 600px) {
		.image-patch {
			grid-template-rows: 1fr auto 1fr;
			row-gap: unset;

			margin-block-end: 6rem;
		}
	}

	.image-patch > :nth-child(1) {
		grid-column: 6 / 25;
	}

	.image-patch > :nth-child(2) {
		grid-column: 1 / 9;
	}

	@media (min-width: 600px) {
		.image-patch.left > :nth-child(1) {
			grid-row: 1 / 4;
			grid-column: 1 / 13;
		}

		.image-patch.left > :nth-child(2) {
			grid-row: 2 / 3;
			grid-column: 15 / 19;
		}

		.image-patch.right > :nth-child(1) {
			grid-row: 1 / 4;
			grid-column: 13 / 25;
		}

		.image-patch.right > :nth-child(2) {
			grid-row: 2 / 3;
			grid-column: 7 / 11;
		}
	}

	@media (min-width: 900px) {
		.image-patch.left > :nth-child(1) {
			grid-column: 1 / 11;
		}

		.image-patch.left > :nth-child(2) {
			grid-column: 13 / 16;
		}

		.image-patch.right > :nth-child(1) {
			grid-column: 15 / 25;
		}

		.image-patch.right > :nth-child(2) {
			grid-column: 10 / 13;
		}
	}

	.image-patch :global(img) {
		display: block;
	}
</style>
