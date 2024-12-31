<div>
	<slot />
</div>

<style>
	div {
		grid-column: 1 / 25;

		display: grid;
		grid-template-rows: 1fr auto 1fr;
		grid-template-columns: 1rem repeat(22, 1fr) 1rem;
		column-gap: 0.5em;

		margin-block-end: 6rem;
	}

	div > :global(img) {
		grid-row: var(--grid-row, 1 / 4);
		grid-column: var(--grid-column, 2 / 24);

		display: block;
	}
</style>
