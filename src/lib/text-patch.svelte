<script>
    export let position = "center";
</script>

<div class={position}>
    <slot />
</div>

<style>
    div.left {
        grid-column-start: 2;
        grid-column-end: 10;
    }

    div.center {
        grid-column-start: 9;
        grid-column-end: 17;
    }

    div.right {
        grid-column-start: 16;
        grid-column-end: 24;
    }
</style>
