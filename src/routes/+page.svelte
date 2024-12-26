<script>
    import flowerBee from "$lib/assets/flower-bee.jpg";
    import gardenCloseup from "$lib/assets/garden-closeup.jpg";
    import meadowGrass from "$lib/assets/meadow-grass.jpg";
    import portrait from "$lib/assets/portrait.jpg";
    import sky from "$lib/assets/sky.jpg";
    import BreakSection from "$lib/break-section.svelte";
    import Header from "$lib/header.svelte";
    import TextPatch from "$lib/text-patch.svelte";
</script>

<Header />

<section id="who">
    <h2>I'm a queer trans non binary <span>gardener</span>...</h2>

    <div class="img-patch">
        <!-- add in alt description - describe the different plants in the image -->
        <img src={gardenCloseup} />
        <img
            alt="I am sitting in a stone arch window. I have my hands pressed gently on the stone on either side with my mid length hair covering my face. Through the window you can see lush green foliage."
            src={portrait}
        />
    </div>

    <TextPatch>
        <p>
            ...working in the Hertfordshire area with an RHS Level 2 Certificate
            in Practical Horticulture.
        </p>

        <p>
            I have a particular focus on <a href="how">low impact gardening</a>
            which is a natural approach for me. I came into gardening through my
            concern over the climate crisis so I have always centred
            environmental issues in my gardening practices.
        </p>

        <p>
            I've done lots of jobs in my life, including working as a software
            developer, and I am interested in how technology can make gardening
            more accessible, more affordable and more inclusive. I want a world
            where anybody can have a garden where they feel comfortable.
        </p>
    </TextPatch>
</section>

<BreakSection src={meadowGrass} />

<section id="what">
    <h2>I provide garden maintenance <span>services</span></h2>

    <TextPatch position="left-wide">
        <p>Some examples of things I do include:</p>

        <ul class="text-cloud">
            <li>Maintaining existing plants and beds</li>
            <li>Specialised shrub pruning</li>
            <li>Looking after compost bins</li>
            <li>Vegetable tending</li>
            <li>Scything small meadow areas</li>
        </ul>

        <p>
            If you have a job to do in your garden and you're not sure if I'm
            the right person for you, <a href="#contact">contact me</a> and I'm
            always happy to answer any questions.
        </p>
    </TextPatch>
</section>

<section id="how">
    <h2>Low impact gardening in <span>practice</span></h2>

    <div class="img-patch">
        <img src={sky} />
        <img src={flowerBee} />
    </div>

    <TextPatch id="how-issues" position="center-wide">
        <p>
            Gardening can have a wide impact on the local environment. Low
            impact gardening is about reducing that impact.
        </p>
        
        <p>When working in a garden, I consider:</p>

        <ul class="text-cloud">
            <li>Noise pollution</li>
            <li>Local air pollution</li>
            <li>Soil disturbance</li>
            <li>Local wildlife</li>
            <li>Waste</li>
            <li>Carbon emissions</li>
        </ul>
    </TextPatch>

    <TextPatch id="how-practices" position="center-wide">
        <p>I do this by:</p>

        <ul class="text-cloud">
            <li>Using organic and vegan practices</li>
            <li>
                Using hand tools over power tools to reduce noise pollution, air
                pollution, and carbon emissions
            </li>
            <li>
                Using circular practices to reuse waste instead of removing it
                from the garden
            </li>
            <li>
                Making use of naturally provided resources such as harvested
                rain water and home made compost
            </li>
            <li>
                Incorporating no dig practices to reduce soil disturbance
            </li>
            <li>
                Sourcing local and sustainable plants and planting materials to
                reduce environmental impact and support other local businesses
            </li>
            <li>
                Understanding the needs of local wildlife to make sure I have
                minimal impact on them
            </li>
        </ul>
    </TextPatch>
</section>

<BreakSection src={meadowGrass} />

<style>
    section {
        padding-block: 6rem;
        display: grid;
        grid-template-columns: 1rem repeat(22, 1fr) 1rem;
    }

    section > :global(*) {
        grid-column: 2 / 24;
    }

    section > :global(:first-child) {
        margin-block-start: 0;
    }

    section > :global(:last-child) {
        margin-block-end: 0;
    }

    h2 {
        font-size: 5rem;
        margin-block-end: 0;
        grid-column: 2 / 24;
    }

    h2 > span {
        font-style: italic;
    }

    .img-patch {
        grid-column: 1 / 25;

        display: grid;
        grid-template-rows: 1fr auto 1fr;
        grid-template-columns: 1rem repeat(22, 1fr) 1rem;
        column-gap: 0.5em;

        margin-block-end: 6rem;
    }

    .img-patch > img {
        display: block;
    }

    ul.text-cloud {
        margin-block: 1.5em;
        padding-inline-start: 0;

        list-style-type: none;

        display: grid;
        grid-template-columns: 3rem repeat(22, 1fr) 3rem;
        row-gap: 1em;
    }

    #who .img-patch > img:nth-child(1) {
        grid-row: 1 / 4;
        grid-column: 1 / 11;
    }

    #who .img-patch > img:nth-child(2) {
        grid-row: 2 / 3;
        grid-column: 13 / 16;
    }

    #what ul.text-cloud > li:nth-child(1) {
        grid-column: 2 / 24;
    }

    #what ul.text-cloud > li:nth-child(2) {
        grid-column: 11 / 24;
    }

    #what ul.text-cloud > li:nth-child(3) {
        grid-column: 4 / 24;
    }

    #what ul.text-cloud > li:nth-child(4) {
        grid-column: 8 / 24;
    }

    #what ul.text-cloud > li:nth-child(5) {
        grid-column: 2 / 24;
    }

    #how .img-patch > img:nth-child(1) {
        grid-row: 1 / 4;
        grid-column: 15 / 25;
    }

    #how .img-patch > img:nth-child(2) {
        grid-row: 2 / 3;
        grid-column: 10 / 13;
    }

    :global(#how-issues) ul.text-cloud > li:nth-child(1) {
        grid-column: 2 / 13;
    }

    :global(#how-issues) ul.text-cloud > li:nth-child(2) {
        grid-column: 13 / 24;
    }

    :global(#how-issues) ul.text-cloud > li:nth-child(3) {
        grid-column: 7 / 24;
    }

    :global(#how-issues) ul.text-cloud > li:nth-child(4) {
        grid-column: 6 / 24;
    }

    :global(#how-issues) ul.text-cloud > li:nth-child(5) {
        grid-column: 4 / 11;
    }

    :global(#how-issues) ul.text-cloud > li:nth-child(6) {
        grid-column: 11 / 24;
    }

    :global(#how-practices) ul.text-cloud > li:nth-child(1) {
        grid-column: 2 / 14;
    }

    :global(#how-practices) ul.text-cloud > li:nth-child(2) {
        grid-column: 6 / 18;
    }

    :global(#how-practices) ul.text-cloud > li:nth-child(3) {
        grid-column: 3 / 15;
    }

    :global(#how-practices) ul.text-cloud > li:nth-child(4) {
        grid-column: 12 / 24;
    }

    :global(#how-practices) ul.text-cloud > li:nth-child(5) {
        grid-column: 2 / 14;
    }

    :global(#how-practices) ul.text-cloud > li:nth-child(6) {
        grid-column: 10 / 22;
    }

    :global(#how-practices) ul.text-cloud > li:nth-child(7) {
        grid-column: 7 / 19;
    }
</style>
