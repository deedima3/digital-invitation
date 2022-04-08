<script lang='ts'>
    export let onClick = () => {
        console.log('clicked');
    };
</script>

<button class="bg-primary rounded-full p-2 max-w-fit w-48 min-w-48 shadow-lg animate-bounce" on:click={onClick}>
    <slot/>
</button>