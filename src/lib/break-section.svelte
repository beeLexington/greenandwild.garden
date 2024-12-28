<script>
    export let src;
</script>

<section>
    <img {src} display="presentation" alt="" />
</section>

<style>
    section > img {
        width: 100%;
        max-height: 50vh;
        object-fit: cover;
        display: block;
    }
</style>
