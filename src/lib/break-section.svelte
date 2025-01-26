<script>
/**
 * @typedef {Object} Props
 * @property {string} alt
 * @property {string} src
 */

/** @type {Props} */
let { alt, src } = $props();
</script>

<section>
	<img {src} {alt} />
</section>

<style>
	section > img {
		width: 100%;
		max-height: 50vh;
		object-fit: cover;
		display: block;
	}
</style>
