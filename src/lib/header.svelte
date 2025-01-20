<script>
import treeCanopy from "$lib/assets/dithered/tree-canopy.jpg";
import Logo from "$lib/logo.svelte";

/**
 * @typedef {Object} Props
 * @property {boolean} [animate]
 * @property {string} [logoTag]
 */

/** @type {Props} */
let { animate = false, logoTag = "div" } = $props();
</script>

<header
	class={animate ? "animated" : undefined}
	style="--background-image-src: url({treeCanopy});"
>
	<div>
		<a href="/">
			<Logo {animate} tag={logoTag} />
		</a>
		<div><span>Low impact gardening services</span></div>
	</div>
</header>

<style>
	header {
		position: relative;
		height: 95vh;
		height: 95svh;
		padding: 1rem 1.5rem;
		background-color: rgb(var(--colour-accent));
		white-space: nowrap;
	}

	header::before {
		content: "";

		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;

		background-image: var(--background-image-src);
		background-size: cover;
		background-position: 80% 70%;
	}

	header > div {
		position: relative;
		display: block;

		font-family: var(--heading-font-family);
		font-optical-sizing: var(--heading-font-optical-sizing);
		font-weight: var(--heading-font-weight);
		font-style: var(--heading-font-style);
		line-height: var(--heading-line-height);
	}

	header > div > a {
		text-decoration: none;
	}

	header > div > :global(:first-child),
	header > div > :last-child {
		position: absolute;
		color: rgb(var(--colour-white));
		text-shadow: 0 0 0.3rem rgb(var(--colour-black));
	}

	header > div > :global(:first-child) {
		top: 47.5vh;
		top: 47.5svh;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	header > div > :last-child {
		top: calc(47.5vh + 7rem / 2 - 1rem + 1rem);
		top: calc(47.5svh + 7rem / 2 - 1rem + 1rem);
		right: 50%;
		transform: translate(50%, -50%);
	}

	@media not (prefers-reduced-motion) {
		header.animated > div > :last-child > span {
			animation-name: fade-in;
			animation-fill-mode: both;
			animation-delay: 1s;
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
	}

	@media (min-width: 600px) {
		header:not(.animated) {
			position: sticky;
			top: 0;
			z-index: 1;
			height: 7rem;
		}

		header:not(.animated)::before {
			opacity: 0;
		}

		header:not(.animated) > div > :global(:first-child),
		header:not(.animated) > div > :last-child {
			position: fixed;
		}

		header:not(.animated) > div > :global(:first-child) {
			top: 1rem;
			left: 1.5rem;
			transform: translate(0, 0);
			color: rgb(var(--colour-black));
			text-shadow: 0 0 0 rgb(var(--colour-black));
		}

		header:not(.animated) > div > :last-child {
			top: calc(7rem / 2);
			right: 1.5rem;
			transform: translate(0, -50%);
			color: rgb(var(--colour-black));
			text-shadow: 0 0 0 rgb(var(--colour-black));
		}

		@media not (prefers-reduced-motion) {
			@supports (animation-timeline: scroll()) and (animation-range: cover) {
				header.animated {
					position: sticky;
					top: calc(-95vh + 7rem);
					top: calc(-95svh + 7rem);
					z-index: 1;
					height: 95vh;
					height: 95svh;
				}

				header.animated::before {
					animation-name: fade-out;
				}

				header.animated::before,
				header.animated > div > :global(:first-child),
				header.animated > div > :last-child {
					animation-timeline: scroll();
					animation-range: 0 calc(95vh - 7rem);
					animation-range: 0 calc(95svh - 7rem);
					animation-fill-mode: both;
					animation-timing-function: linear;
				}

				header.animated > div > :global(:first-child),
				header.animated > div > :last-child {
					position: fixed;
				}

				header.animated > div > :global(:first-child) {
					animation-name: move-logo-to-position;
				}

				header.animated > div > :last-child {
					animation-name: move-tagline-to-position;
				}

				@keyframes fade-out {
					from {
						opacity: 1;
					}

					to {
						opacity: 0;
					}
				}

				@keyframes move-logo-to-position {
					from {
						top: 47.5vh;
						top: 47.5svh;
						left: 50%;
						transform: translate(-50%, -50%);
						color: rgb(var(--colour-white));
						text-shadow: 0 0 0.3rem rgb(var(--colour-black));
					}

					50% {
						color: rgb(var(--colour-accent));
						text-shadow: 0 0 0 rgb(var(--colour-black));
					}

					to {
						top: 1rem;
						left: 1.5rem;
						transform: translate(0, 0);
						color: rgb(var(--colour-black));
						text-shadow: 0 0 0 rgb(var(--colour-black));
					}
				}

				@keyframes move-tagline-to-position {
					from {
						top: calc(47.5vh + 7rem / 2 - 1rem + 1rem);
						top: calc(47.5svh + 7rem / 2 - 1rem + 1rem);
						right: 50%;
						transform: translate(50%, -50%);
						color: rgb(var(--colour-white));
						text-shadow: 0 0 0.3rem rgb(var(--colour-black));
					}

					50% {
						color: rgb(var(--colour-accent));
						text-shadow: 0 0 0 rgb(var(--colour-black));
					}

					to {
						top: calc(7rem / 2);
						right: 1.5rem;
						transform: translate(0, -50%);
						color: rgb(var(--colour-black));
						text-shadow: 0 0 0 rgb(var(--colour-black));
					}
				}
			}
		}
	}
</style>
