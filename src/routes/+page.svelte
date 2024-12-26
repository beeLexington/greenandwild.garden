<script>
    import flowerBee from "$lib/assets/flower-bee.jpg";
    import gardenCloseup from "$lib/assets/garden-closeup.jpg";
    import meadowGrass from "$lib/assets/meadow-grass.jpg";
    import portrait from "$lib/assets/portrait.jpg";
    import sky from "$lib/assets/sky.jpg";
    import Header from "$lib/header.svelte";
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

    <div class="text-patch">
        <p>
            ...working in the Hertfordshire area with an RHS Level 2 Certificate
            in Practical Horticulture.
        </p>

        <p>
            I have a particular focus on low impact gardening which is a natural
            approach for me. I came into gardening through my concern over the
            climate crisis so I have always centred environmental issues in my
            gardening practices.
        </p>

        <p>
            I've done lots of jobs in my life, including working as a software
            developer, and I am interested in how technology can make gardening
            more accessible, more affordable and more inclusive. I want a world
            where anybody can have a garden where they feel comfortable.
        </p>
    </div>
</section>

<section id="services">
    <h2>I offer a variety of garden maintenance <span>services</span></h2>

    <div class="text-patch left">
        <ul>
            <li>Maintaining existing plants and beds</li>
            <li>Specialised shrub pruning</li>
            <li>Looking after compost bins</li>
            <li>Vegetable tending</li>
            <li>Scything small meadow areas</li>
        </ul>

        <p>
            If you are not sure if I can do something, contact me and I am happy
            to answer any questions.
        </p>
    </div>
</section>

<section class="break-section">
    <img src={meadowGrass} display="presentation" alt="" />
</section>

<section id="how">
    <h2>Key areas I try to consider when <span>gardening</span></h2>

    <div class="text-patch right">
        <ul>
            <li>Noise pollution</li>
            <li>local air pollution</li>
            <li>soil disturbance</li>
            <li>local wildlife</li>
            <li>the materials brought into the garden</li>
            <li>the materials removed from the garden</li>
            <li>carbon emissions</li>
        </ul>
    </div>

    <h2>In practice this looks like</h2>

    <div class="img-patch">
        <img src={sky} />
        <img src={flowerBee} />
    </div>

    <div class="text-patch left">
        <ul>
            <li>Use organic and vegan practices</li>
            <li>
                Use hand tools over power tools to reduce noise and carbon
                emissions
            </li>
            <li>
                Use circular practices and reduce waste that needs to be removed
                from the garden
            </li>
            <li>
                Utilise resources provided naturally, such as rain water
                harvesting, home made compost
            </li>
            <li>
                Reduce the amount of soil disturbance within the garden by
                incorporating no dig practices
            </li>
            <li>
                Source local and sustainable plants and planting materials to
                reduce environmental impact and support other local businesses
            </li>
            <li>
                Understand the needs of local wildlife to ensure that I have
                minimal impact on them
            </li>
        </ul>
    </div>
</section>

<style>
    section {
        padding-block: 6rem;
        display: grid;
        grid-template-columns: 1rem auto 1rem;
    }

    section :global(:first-child) {
        margin-block-start: 0;
    }

    section :global(:last-child) {
        margin-block-end: 0;
    }

    h2 {
        font-size: 5rem;
        margin-block-end: 0;
        grid-column-start: 2;
        grid-column-end: 3;
    }

    h2 > span {
        font-style: italic;
    }

    .img-patch {
        grid-column-start: 1;
        grid-column-end: 4;

        display: grid;
        grid-template-columns: 2rem repeat(22, 1fr) 2rem;
        grid-template-rows: 1fr auto 1fr;
        column-gap: 0.5em;

        margin-block-end: 6rem;
    }

    #who .img-patch > img:nth-child(1) {
        grid-column-start: 1;
        grid-column-end: 11;
        grid-row-start: 1;
        grid-row-end: 4;
    }

    #who .img-patch > img:nth-child(2) {
        grid-column-start: 13;
        grid-column-end: 16;
        grid-row-start: 2;
        grid-row-end: 3;
    }

    .break-section > img {
        grid-column-start: 1;
        grid-column-end: 4;
        max-height: 50vh;
        object-fit: cover;
        width: 100%;
    }

    #how .img-patch > img:nth-child(1) {
        grid-column-start: 15;
        grid-column-end: 25;
        grid-row-start: 1;
        grid-row-end: 4;
    }

    #how .img-patch > img:nth-child(2) {
        grid-column-start: 10;
        grid-column-end: 13;
        grid-row-start: 2;
        grid-row-end: 3;
    }

    .text-patch {
        grid-column-start: 1;
        grid-column-end: 4;

        display: grid;
        grid-template-columns: 2rem repeat(22, 1fr) 2rem;
        column-gap: 0.5em;
    }

    .text-patch > * {
        grid-column-start: 9;
        grid-column-end: 17;
    }

    .text-patch.left > * {
        grid-column-start: 2;
        grid-column-end: 10;
    }

    .text-patch.right > * {
        grid-column-start: 16;
        grid-column-end: 24;
    }
</style>
