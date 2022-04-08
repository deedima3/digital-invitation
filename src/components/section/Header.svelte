<script lang="ts">
	import EventDate from '../EventDate.svelte';

	export let name = 'Svelte';
</script>

<div class="w-full max-h-screen overflow-clip relative flex flex-col justify-center items-center shadow-xl z-20">
	<div class="flex flex-col justify-center items-center absolute z-50 font-grandhotel text-white">
		<h4 class="text-6xl drop-shadow-xl" data-aos="fade-up" data-aos-duration="1000">The Wedding Of</h4>
		<h1 class="text-9xl mt-5 drop-shadow-xl" data-aos="fade-up" data-aos-duration="1000">Gasa</h1>
		<h1 class="text-9xl drop-shadow-xl" data-aos="fade-up" data-aos-duration="1000">&</h1>
		<h1 class="text-9xl drop-shadow-xl" data-aos="fade-up" data-aos-duration="1000">Yuli</h1>
		<EventDate extraClass={"mt-10"} date="28 April 2022"/>
	</div>
	<div class="bg-black absolute opacity-30 z-20 w-full h-full" />
	<img class="w-full min-h-screen object-cover" src="./header.png" alt="Ring Image" />
</div>
