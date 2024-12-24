<script>
    export let backgroundColour;
</script>

<div class={backgroundColour}>
    <slot />
</div>

<style>
    div {
        grid-column-start: var(--start-column, 1);
        grid-column-end: var(--end-column, 13);

        border: 0.5rem solid rgb(var(--colour-black));
        border-inline-start-width: min(
            0.5rem,
            (var(--start-column, 1) - 1) * 0.5rem
        );
        border-inline-end-width: min(
            0.5rem,
            (13 - var(--end-column, 13)) * 0.5rem
        );
        padding: 2rem;
    }

    div.green {
        background-color: rgb(var(--colour-green));
    }

    div.pink {
        background-color: rgb(var(--colour-pink));
    }

    div.purple {
        background-color: rgb(var(--colour-purple));
    }

    div :global(:first-child) {
        margin-block-start: 0;
    }

    div :global(:last-child) {
        margin-block-end: 0;
    }
</style>
