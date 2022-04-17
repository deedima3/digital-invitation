<script lang="ts">
	import Button from './Button.svelte';

	const onClick = (scrollInto : string) => {
		var element = document.getElementById(scrollInto);
		element.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<div class="flex flex-col justify-end fixed top-[60vh] right-0 z-50 w-20">
	<div class="flex flex-col gap-5">
		<Button onClick={() => onClick("lover")}>
			<img
				src="/emojione-monotone_couple-with-heart-woman-woman.png"
				alt="Lover Section Icon"
				class="w-10"
			/>
		</Button>
		<Button onClick={() => onClick("video")}>
			<img src="/akar-icons_video.png" alt="Video Section Icon" class="w-10" />
		</Button>
        <Button onClick={() => onClick("location")}>
			<img src="/cil_location-pin.png" alt="Location Section Icon" class="w-10" />
		</Button>
	</div>
</div>
