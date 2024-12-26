<script>
    export let position = "center";
</script>

<div class={position}>
    <slot />
</div>

<style>
    div.left {
        grid-column: 2 / 10;
    }

    div.center {
        grid-column: 9 / 17;
    }

    div.right {
        grid-column: 16 / 24;
    }
</style>
