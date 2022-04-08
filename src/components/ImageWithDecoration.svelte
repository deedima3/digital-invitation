<script lang="ts">
    export let image = '/cowo.png'
    export let imageAlt = 'Foto Cowo'
</script>

<div class="relative ma">
    <div class="bg-primary w-[250px] md:w-[400px] h-[350px] max-w-screen md:h-[500px] ml-24"/>
    <img src={image} alt={imageAlt} class="mt-10 z-50 absolute top-0 w-[300px] md:w-[400px] max-w-screen">
</div>