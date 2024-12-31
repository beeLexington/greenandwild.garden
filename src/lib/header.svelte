<script>
import meadowGrass from "$lib/assets/meadow-grass.jpg";
import Logo from "$lib/logo.svelte";
</script>

<header style="--background-image-src: url({meadowGrass});">
	<div>
		<Logo />
		<div><span>Affordable low impact gardening</span></div>
	</div>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 1;
		padding: 1rem 1.5rem;
		background-color: rgb(var(--colour-accent));

		animation-name: shrink;
	}

	@media (prefers-reduced-motion) {
		header {
			animation-name: unset;
			height: 7rem;
		}
	}

	header,
	header::before,
	header > div > :global(:first-child),
	header > div > :last-child {
		animation-fill-mode: both;
		animation-delay: 5s;
		animation-duration: 2s;
		animation-timing-function: ease-in-out;
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
		background-position: bottom;
		filter: var(--image-filter);

		animation-name: fade-out;
	}

	@media (prefers-reduced-motion) {
		header::before {
			animation-name: unset;
			opacity: 0;
		}
	}

	header > div {
		position: relative;
		display: block;
	}

	header > div > :global(:first-child),
	header > div > :last-child {
		position: fixed;
	}

	header > div > :global(:first-child) {
		animation-name: move-logo-to-position;
	}

	@media (prefers-reduced-motion) {
		header > div > :global(:first-child) {
			animation-name: unset;
			top: 1rem;
			left: 1.5rem;
			transform: translate(0, 0);
		}
	}

	header > div > :last-child {
		animation-name: move-tagline-to-position;
	}

	@media (prefers-reduced-motion) {
		header > div > :last-child {
			animation-name: unset;
			top: calc(7rem / 2);
			right: 1.5rem;
			transform: translate(0, -50%);
		}
	}

	header > div > :last-child > span {
		animation-name: fade-in;
		animation-fill-mode: both;
		animation-delay: 3s;
		animation-duration: 2.5s;
		animation-timing-function: ease-in-out;
	}

	@media (prefers-reduced-motion) {
		header > div > :last-child > span {
			animation-name: unset;
			opacity: 1;
		}
	}

	@supports (animation-timeline: scroll()) and (animation-range: cover) {
		header {
			top: calc(-95vh + 7rem);
			animation-play-state: paused;
		}

		@media (prefers-reduced-motion) {
			header {
				top: 0;
			}
		}

		header::before,
		header > div > :global(:first-child),
		header > div > :last-child {
			animation-delay: unset;
			animation-duration: unset;
			animation-timeline: scroll();
			animation-range: 0 calc(95vh - 7rem);
			animation-timing-function: linear;
		}
	}

	@keyframes shrink {
		from {
			height: 95vh;
		}

		to {
			height: 7rem;
		}
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
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
			left: 50%;
			transform: translate(-50%, -50%);
		}

		to {
			top: 1rem;
			left: 1.5rem;
			transform: translate(0, 0);
		}
	}

	@keyframes move-tagline-to-position {
		from {
			top: calc(47.5vh + 7rem / 2 - 1rem + 1rem);
			right: 50%;
			transform: translate(50%, -50%);
		}

		to {
			top: calc(7rem / 2);
			right: 1.5rem;
			transform: translate(0, -50%);
		}
	}
</style>
