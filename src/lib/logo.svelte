<script>
/**
 * @typedef {Object} Props
 * @property {boolean} [animate]
 * @property {string} tag
 */

/** @type {Props} */
let { animate = false, tag } = $props();
</script>

<svelte:element this={tag} class="logo{animate ? ' animated' : ''}">
	<span>Green</span>
	<span>&</span>
	<span>Wild</span>
</svelte:element>

<style>
	.logo {
		margin-block: 0;
		font-family: var(--logo-text-font-family);
		font-optical-sizing: var(--logo-text-font-optical-sizing);
		font-weight: var(--logo-text-font-weight);
		font-style: var(--logo-text-font-style);
		line-height: 1;
		font-size: 2.5rem;
		display: flex;
	}

	.logo > :nth-child(1) {
		margin-block-start: 0.1em;
	}

	.logo > :nth-child(2) {
		font-family: var(--logo-amp-font-family);
		font-optical-sizing: var(--logo-amp-font-optical-sizing);
		font-weight: var(--logo-amp-font-weight);
		font-style: var(--logo-amp-font-style);
		font-size: 2em;
	}

	.logo > :nth-child(3) {
		align-self: flex-end;
		margin-inline-start: 0.1em;
		margin-block-end: 0.1em;
	}

	@media not (prefers-reduced-motion) {
		.logo.animated > :nth-child(1) {
			animation-name: fade-in;
		}

		.logo.animated > :nth-child(2) {
			animation-name: shrink;
		}

		.logo.animated > :nth-child(3) {
			animation-name: fade-in;
		}

		.logo.animated > :nth-child(1),
		.logo.animated > :nth-child(2),
		.logo.animated > :nth-child(3) {
			animation-fill-mode: both;
			animation-delay: 0.5s;
			animation-duration: 1s;
			animation-timing-function: ease-in-out;
		}

		@keyframes fade-in {
			from {
				opacity: 0;
			}

			to {
				opacity: 1;
			}
		}

		@keyframes shrink {
			from {
				transform: scale(1.5);
			}

			to {
				transform: scale(1);
			}
		}
	}
</style>
