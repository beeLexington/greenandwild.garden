<script>
    import Logo from "./logo.svelte";
</script>

<header>
    <Logo />

    <nav>
        <ul>
            <li><a href="/about">about</a></li>
            <li><a href="/services">services</a></li>
            <li><a href="/contact">contact</a></li>
        </ul>
    </nav>
</header>

<style>
    header {
        padding: 2em;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    nav {
        padding-inline-end: 1em;
    }

    nav > ul {
        list-style: none;
        margin: 0;
        padding: 0;

        display: flex;
        gap: 1em;
        font-size: 1.3rem;
    }
</style>
