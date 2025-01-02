<script>
/**
 * @typedef {Object} Props
 * @property {string} [id]
 * @property {string} [position]
 * @property {import('svelte').Snippet} [children]
 */

/** @type {Props} */
let { id = undefined, position = "center", children } = $props();
</script>

<div {id} class={position}>
	{@render children?.()}
</div>

<style>
	div {
		margin-block: 1em;
		grid-column: 2 / 24;
	}

	@media (min-width: 600px) {
		div.left {
			grid-column: 2 / 14;
		}
	}

	@media (min-width: 900px) {
		div.left {
			grid-column: 2 / 10;
		}
	}

	@media (min-width: 600px) {
		div.left-wide {
			grid-column: 2 / 16;
		}
	}

	@media (min-width: 900px) {
		div.left-wide {
			grid-column: 2 / 12;
		}
	}

	@media (min-width: 600px) {
		div.center {
			grid-column: 7 / 19;
		}
	}

	@media (min-width: 900px) {
		div.center {
			grid-column: 9 / 17;
		}
	}

	@media (min-width: 600px) {
		div.center-wide {
			grid-column: 6 / 20;
		}
	}

	@media (min-width: 900px) {
		div.center-wide {
			grid-column: 8 / 18;
		}
	}

	@media (min-width: 600px) {
		div.right {
			grid-column: 12 / 24;
		}
	}

	@media (min-width: 900px) {
		div.right {
			grid-column: 16 / 24;
		}
	}

	@media (min-width: 600px) {
		div.right-wide {
			grid-column: 14 / 24;
		}
	}

	@media (min-width: 900px) {
		div.right-wide {
			grid-column: 10 / 24;
		}
	}

	div > :global(:first-child) {
		margin-block-start: 0;
	}

	div > :global(:last-child) {
		margin-block-end: 0;
	}
</style>
