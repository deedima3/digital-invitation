<script lang='ts'>
    export let date = '2020-06-01';
    export let extraClass
</script>

<div class={`bg-white text-4xl py-5 px-16 text-primary shadow-lg ${extraClass}`} data-aos="fade-up" data-aos-duration="1000">
    {date}
</div>