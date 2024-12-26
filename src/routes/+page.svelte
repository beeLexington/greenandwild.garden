<script>
    import flowerBee from "$lib/assets/flower-bee.jpg";
    import gardenCloseup from "$lib/assets/garden-closeup.jpg";
    import meadowGrass from "$lib/assets/meadow-grass.jpg";
    import portrait from "$lib/assets/portrait.jpg";
    import sky from "$lib/assets/sky.jpg";
    import BreakSection from "$lib/break-section.svelte";
    import Header from "$lib/header.svelte";
    import ImagePatch from "$lib/image-patch.svelte";
    import ListCloud from "$lib/list-cloud.svelte";
    import TextPatch from "$lib/text-patch.svelte";
</script>

<Header />

<section id="who">
    <h2>I'm a queer trans non binary <span>gardener</span>...</h2>

    <ImagePatch>
        <!-- add in alt description - describe the different plants in the image -->
        <img
            src={gardenCloseup}
            style="--grid-row: 1 / 4; --grid-column: 1 / 11;"
        />
        <img
            alt="I am sitting in a stone arch window. I have my hands pressed gently on the stone on either side with my mid length hair covering my face. Through the window you can see lush green foliage."
            src={portrait}
            style="--grid-row: 2 / 3; grid-column: 13 / 16;"
        />
    </ImagePatch>

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

        <ListCloud>
            <li style="--grid-column: 2 / 24;">
                Maintaining existing plants and beds
            </li>
            <li style="--grid-column: 11 / 24;">Specialised shrub pruning</li>
            <li style="--grid-column: 4 / 24;">Looking after compost bins</li>
            <li style="--grid-column: 8 / 24;">Vegetable tending</li>
            <li style="--grid-column: 2 / 24;">Scything small meadow areas</li>
        </ListCloud>

        <p>
            If you have a job to do in your garden and you're not sure if I'm
            the right person for you, <a href="#contact">contact me</a> and I'm
            always happy to answer any questions.
        </p>
    </TextPatch>
</section>

<section id="how">
    <h2>Low impact gardening in <span>practice</span></h2>

    <ImagePatch>
        <img src={sky} style="--grid-row: 1 / 4; --grid-column: 15 / 25;" />
        <img src={flowerBee} style="--grid-row: 2 / 3; grid-column: 10 / 13;" />
    </ImagePatch>

    <TextPatch id="how-issues" position="center-wide">
        <p>
            Gardening can have a wide impact on the local environment. Low impact
            gardening is about reducing that impact.
        </p>

        <p>When working in a garden, I consider:</p>

        <ListCloud>
            <li style="--grid-column: 2 / 13;">Noise pollution</li>
            <li style="--grid-column: 13 / 24;">Local air pollution</li>
            <li style="--grid-column: 7 / 24;">Soil disturbance</li>
            <li style="--grid-column: 6 / 24;">Local wildlife</li>
            <li style="--grid-column: 4 / 11;">Waste</li>
            <li style="--grid-column: 11 / 24;">Carbon emissions</li>
        </ListCloud>
    </TextPatch>

    <TextPatch id="how-practices" position="center-wide">
        <p>I do this by:</p>

        <ListCloud>
            <li style="--grid-column: 2 / 14;">
                Using organic and vegan practices
            </li>
            <li style="--grid-column: 6 / 18;">
                Using hand tools over power tools to reduce noise pollution, air
                pollution, and carbon emissions
            </li>
            <li style="--grid-column: 3 / 15;">
                Using circular practices to reuse waste instead of removing it
                from the garden
            </li>
            <li style="--grid-column: 12 / 24;">
                Making use of naturally provided resources such as harvested
                rain water and home made compost
            </li>
            <li style="--grid-column: 2 / 14;">
                Incorporating no dig practices to reduce soil disturbance
            </li>
            <li style="--grid-column: 10 / 22;">
                Sourcing local and sustainable plants and planting materials to
                reduce environmental impact and support other local businesses
            </li>
            <li style="--grid-column: 7 / 19;">
                Understanding the needs of local wildlife to make sure I have
                minimal impact on them
            </li>
        </ListCloud>
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
</style>
