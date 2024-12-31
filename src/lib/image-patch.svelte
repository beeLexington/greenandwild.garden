<script>
export let position = "left";
</script>

<div class="image-patch {position}">
	<div>
		<slot name="outer" />
	</div>

	<div>
		<slot name="inner" />
	</div>
</div>

<style>
	.image-patch {
		grid-column: 1 / 25;

		display: grid;
		grid-template-rows: 1fr auto 1fr;
		grid-template-columns: 1rem repeat(22, 1fr) 1rem;
		column-gap: 0.5em;

		margin-block-end: 6rem;
	}

	.image-patch.left > :nth-child(1) {
		grid-row: 1 / 4;
		grid-column: 1 / 11;
	}

	.image-patch.left > :nth-child(2) {
		grid-row: 2 / 3;
		grid-column: 13 / 16;
	}

	.image-patch.right > :nth-child(1) {
		grid-row: 1 / 4;
		grid-column: 15 / 25;
	}

	.image-patch.right > :nth-child(2) {
		grid-row: 2 / 3;
		grid-column: 10 / 13;
	}

	.image-patch :global(img) {
		display: block;
	}
</style>
