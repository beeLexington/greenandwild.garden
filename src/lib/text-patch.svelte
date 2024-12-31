<script>
export let id = undefined;
export let position = "center";
</script>

<div {id} class={position}>
	<slot />
</div>

<style>
	div.left {
		grid-column: 2 / 10;
	}

	div.left-wide {
		grid-column: 2 / 12;
	}

	div.center {
		grid-column: 9 / 17;
	}

	div.center-wide {
		grid-column: 8 / 18;
	}

	div.right {
		grid-column: 16 / 24;
	}

	div.right-wide {
		grid-column: 14 / 24;
	}
</style>
