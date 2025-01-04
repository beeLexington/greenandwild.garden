<script>
import "normalize.css";

import "$lib/app.css";

/**
 * @typedef {Object} Props
 * @property {import('svelte').Snippet} [children]
 */

/** @type {Props} */
let { children } = $props();
</script>

{@render children?.()}
