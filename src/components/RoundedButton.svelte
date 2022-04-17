<script lang="ts">
    export let title = 'Svelte';
    export let onClick = () => {
        console.log('clicked');
    };
    export let extraClass = "";
</script>

<div class="rounded-xl bg-primary flex justify-between items-center w-fit max-w-xs px-16 py-2 text-white font-poppins mt-5 gap-10 ${extraClass}" on:click={onClick}>
    <img src="/et_facebook.png" alt="Instagram Logo">
    <p class="text-lg">{title}</p>
</div>