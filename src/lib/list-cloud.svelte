<ul>
    <slot />
</ul>

<style>
    ul {
        margin-block: 1.5em;
        padding-inline-start: 0;

        list-style-type: none;

        display: grid;
        grid-template-columns: 3rem repeat(22, 1fr) 3rem;
        row-gap: 1em;
    }

    ul > :global(li) {
        grid-column: var(--grid-column, 2 / 24);
    }
</style>
