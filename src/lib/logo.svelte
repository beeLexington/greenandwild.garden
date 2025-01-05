<h1>
	<span>Green</span>
	<span>&</span>
	<span>Wild</span>
</h1>

<style>
	h1 {
		margin-block: 0;
		font-family: var(--logo-text-font-family);
		font-optical-sizing: var(--logo-text-font-optical-sizing);
		font-weight: var(--logo-text-font-weight);
		font-style: var(--logo-text-font-style);
		line-height: 1;
		font-size: 2.5rem;
		display: flex;
	}

	h1 > :nth-child(1) {
		margin-block-start: 0.1em;
	}

	h1 > :nth-child(2) {
		font-family: var(--logo-amp-font-family);
		font-optical-sizing: var(--logo-amp-font-optical-sizing);
		font-weight: var(--logo-amp-font-weight);
		font-style: var(--logo-amp-font-style);
		font-size: 2em;
	}

	h1 > :nth-child(3) {
		align-self: flex-end;
		margin-inline-start: 0.1em;
		margin-block-end: 0.1em;
	}

	@media not (prefers-reduced-motion) {
		h1 > :nth-child(1) {
			animation-name: fade-in;
		}

		h1 > :nth-child(2) {
			animation-name: shrink;
		}

		h1 > :nth-child(3) {
			animation-name: fade-in;
		}

		h1 > :nth-child(1),
		h1 > :nth-child(2),
		h1 > :nth-child(3) {
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
