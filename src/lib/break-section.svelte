<script>
/**
 * @typedef {Object} Props
 * @property {string} src
 */

/** @type {Props} */
let { src } = $props();
</script>

<section>
	<img {src} display="presentation" alt="" />
</section>

<style>
	section > img {
		width: 100%;
		max-height: 50vh;
		object-fit: cover;
		display: block;
	}
</style>
