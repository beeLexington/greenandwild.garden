<script>
import "normalize.css";

import "$lib/app.css";
import Header from "$lib/header.svelte";

/**
 * @typedef {Object} Props
 * @property {import('svelte').Snippet} [children]
 */

/** @type {Props} */
let { children } = $props();
</script>

<!-- keep header static in the green banner form - remove the animation -->
<Header />

{@render children()}
