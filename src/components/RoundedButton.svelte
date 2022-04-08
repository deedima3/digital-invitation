<script lang="ts">
    export let title = 'Svelte';
    export let onClick = () => {
        console.log('clicked');
    };
    export let extraClass = "";
</script>

<div class="rounded-xl bg-primary flex justify-between items-center w-fit max-w-xs px-16 py-2 text-white font-poppins mt-5 ${extraClass}" on:click={onClick}>
    <img src="/carbon_logo-instagram.png" alt="Instagram Logo">
    <p class="text-xl">{title}</p>
</div>