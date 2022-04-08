<script lang="ts">
	import LoveSection from '../components/section/LoveSection.svelte';
	import ButtonList from '../components/ButtonList.svelte';
	import Header from '../components/section/Header.svelte';
	import EventSection from '../components/section/EventSection.svelte';
	import VideoSection from '../components/section/VideoSection.svelte';
	import Footer from '../components/section/Footer.svelte';
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import Song from '../components/Song.svelte';

	onMount(() => {
		AOS.init();
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</svelte:head>

<ButtonList />
<Header />
<LoveSection />
<VideoSection />
<EventSection />
<Footer />
<Song />
