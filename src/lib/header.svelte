<script>
    import meadowGrass from "$lib/assets/meadow-grass.jpg";
    import Logo from "$lib/logo.svelte";
</script>

<header style="--background-image-src: url({meadowGrass});">
    <div>
        <Logo />
        <span>Affordable low impact gardening</span>
    </div>
</header>

<style>
    header {
        position: relative;
        height: 80vh;
        padding: 2em;
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
        filter: var(--image-filter);
    }

    header > div {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
