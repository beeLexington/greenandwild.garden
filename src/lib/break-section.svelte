<script>
/**
 * @typedef {Object} Props
 * @property {string} src
 */

/** @type {Props} */
let { src } = $props();
</script>

<section>
	<enhanced:img class="image" {src} display="presentation" alt="" />
</section>

<style>
	section .image {
		width: 100%;
		max-height: 50vh;
		object-fit: cover;
		display: block;
	}
</style>
