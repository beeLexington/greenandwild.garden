<script>
import chair from "$lib/assets/dithered/chair.jpg";
import clouds from "$lib/assets/dithered/flower-bee.jpg";
import gardenSunset from "$lib/assets/dithered/garden-sunset.jpg";
import meadowGrass from "$lib/assets/dithered/meadow-grass.jpg";
import portrait from "$lib/assets/dithered/portrait.jpg";
import sky from "$lib/assets/dithered/sky.jpg";
import BreakSection from "$lib/break-section.svelte";
import Footer from "$lib/footer.svelte";
import Header from "$lib/header.svelte";
import ImagePatch from "$lib/image-patch.svelte";
import TextPatch from "$lib/text-patch.svelte";
</script>

<Header />

<section id="who">
	<h2>More than just your basic <span>gardener</span></h2>

	<ImagePatch position="left">
		{#snippet outer()}
			<!-- add in alt description - describe the different plants in the image -->
			<img src={chair} alt="" />
		{/snippet}
		{#snippet inner()}
			<img
				src={portrait}
				alt="I am sitting in a stone arch window. I have my hands pressed gently on the stone on either side with my mid length hair covering my face. Through the window you can see lush green foliage."
			/>
		{/snippet}
	</ImagePatch>

	<TextPatch>
		<p>
			I have a particular focus on <a href="#how">low impact gardening</a>
			which is a natural approach for me. My interest in gardening came through my
			concern about the climate crisis and I have always centred environmental issues
			in what I do.
		</p>

		<p>
			As my practice has developed, I have seen the benefits that low impact
			gardening has on more than just the environment. As someone who is
			neurodivergent and sensitive to noise, I've found how I garden far better
			for my overall wellbeing. It's also highlighted to me just how noisy the
			active gardening seasons can be. This has given me a real push to want to
			provide a service that is quiet and considerate of the local environment.
		</p>

		<p>
			As well as reducing its impact on the environment, I want to make
			gardening more accessible, more affordable, and more inclusive. I want a
			world where anybody can have an outdoor space where they feel comfortable,
			and I take great care when thinking about the way I work to try to help
			achieve that. As a queer trans non-binary person, I understand first hand
			how important this is.
		</p>

		<p>
			I work in and around Hertfordshire and Bedfordshire and have an RHS Level
			2 Certificate in Practical Horticulture. If I sound like a good fit for
			you, <a href="#contact">get in touch</a>.
		</p>
	</TextPatch>
</section>

<BreakSection src={clouds} />

<section id="what">
	<h2>Gardening services tailored to <span>you</span></h2>

	<TextPatch position="left">
		<p>
			I offer regular garden maintenance as well as one off visits. It's
			important that you feel happy and comfortable with me working in your
			space, so I take the time to get to know you and understand what your
			needs and comfort levels are before carrying out any work.
		</p>

		<p>Some of the key services I offer are:</p>

		<ul>
			<li>Maintaining existing plants and beds</li>
			<li>Specialised shrub pruning</li>
			<li>Looking after compost bins</li>
			<li>Vegetable tending</li>
			<li>Scything of grass and meadow areas</li>
		</ul>

		<p>
			I'm happy to work from a list of jobs you want me to do, but if you'd
			rather leave it to me, I can assess what needs doing when and prioritise
			accordingly to make sure you have the garden you want all year round.
		</p>

		<p>
			If you have a job to do in your garden and you're not sure if I'm the
			right person for you, or if you have any needs or concerns about how I
			might work in your space, please <a href="#contact">contact me</a>. I'm
			always happy to answer any questions and work with you to accommodate any
			specific requirements you might have.
		</p>
	</TextPatch>
</section>

<section id="how">
	<h2>Low impact gardening in <span>practice</span></h2>

	<ImagePatch position="right">
		{#snippet outer()}
			<!-- add in alt description -->
			<img src={gardenSunset} alt="" />
		{/snippet}
		{#snippet inner()}
			<!-- add in alt description -->
			<img src={sky} alt="" />
		{/snippet}
	</ImagePatch>

	<TextPatch position="center-wide">
		<p>
			Creating and maintaining an outdoor space has an impact on wildlife and
			the local environment, but not all of that impact is negative. Low impact
			gardening is about reducing the negatives and increasing the positives.
			For me, it's about creating a shared understanding of your needs, budget,
			garden, and local environment, so that we can balance those factors to
			help you have the garden you want while managing the impact it has.
		</p>

		<p>Some of the things I normally do in a garden include:</p>

		<ul>
			<li>Using organic practices for safer humans, pets, and wildlife</li>
			<li>
				Using hand tools over power tools to reduce noise pollution, air
				pollution, and carbon emissions
			</li>
			<li>
				Using circular practices to reuse waste instead of removing it from the
				garden (e.g. by using pruned branches as plant supports)
			</li>
			<li>
				Making use of naturally provided resources such as harvested rain water
				and home made compost
			</li>
			<li>
				Incorporating <a
					href="https://www.charlesdowding.co.uk/resources/beginners-guide"
					>no dig practices</a
				> to reduce soil disturbance
			</li>
			<li>
				Sourcing local and sustainable plants and planting materials (e.g. peat
				free compost) to reduce environmental impact and support other local
				businesses
			</li>
			<li>
				Understanding the needs of local wildlife to minimise impact on them
			</li>
		</ul>

		<p>
			If you'd like to understand more about low impact gardening and how I put
			it into practice, please <a href="#contact">send me a message</a> and I'd be
			happy to talk about it with you.
		</p>
	</TextPatch>
</section>

<BreakSection src={meadowGrass} />

<section id="contact">
	<h2>How to <span>get in touch</span></h2>

	<TextPatch position="left-wide">
		<p>
			You can email me at <a href="mailto:greenandwild@proton.me"
				>greenandwild@proton.me</a
			> or fill in the contact form below.
		</p>

		<iframe
			title="Contact me"
			class="airtable-embed"
			src="https://airtable.com/embed/appXJNuU4f3XjYZZT/pagSWkN81JdVAC0r4/form"
			frameborder="0"
			onmousewheel={() => {}}
		></iframe>
	</TextPatch>
</section>

<Footer />

<style>
	section {
		padding-block: 6rem;
		display: grid;
		grid-template-columns: 1rem repeat(22, 1fr) 1rem;
	}

	section > :global(*) {
		margin-block-end: 0;
		grid-column: 2 / 24;
	}

	section > :global(:first-child) {
		margin-block-start: 0;
	}

	h2 {
		font-size: 3rem;
		margin-block-end: 0;
		grid-column: 2 / 24;
		text-wrap-style: balance;
	}

	@media (min-width: 900px) {
		h2 {
			font-size: 5rem;
		}
	}

	h2 > span {
		font-family: var(--heading-emph-font-family);
		font-optical-sizing: var(--heading-emph-font-optical-sizing);
		font-weight: var(--heading-emph-font-weight);
		font-style: var(--heading-emph-font-style);
		line-height: var(--heading-emph-line-height);
	}

	ul {
		margin-block: 1em;
		padding: 0;
		list-style-type: none;
		text-align: center;
	}

	ul > li {
		margin-block: 1em;
	}

	ul > li:first-child {
		margin-block-start: 0;
	}

	ul > li:last-child {
		margin-block-end: 0;
	}

	iframe {
		width: 100%;
		height: calc(598px + 147px);
		background: rgb(255, 255, 255);
	}

	@media (min-width: 900px) {
		iframe {
			height: calc(584px + 147px);
		}
	}
</style>
