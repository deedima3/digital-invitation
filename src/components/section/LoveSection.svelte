<script lang="ts">
	import ImageWithDecoration from '../ImageWithDecoration.svelte';
	import RoundedButton from '../RoundedButton.svelte';
	import TextTitle from '../TextTitle.svelte';
</script>

<div class="w-full h-full flex flex-col items-center relative">
	<div class="absolute top-0 left-0 -mt-32 z-0">
		<img src="/ornament.png" alt="Ornament Picture" class="scale-mirror" />
	</div>
	<div class="flex justify-center flex-col items-center static z-20">
		<TextTitle title="Para Mempelai" />
		<div
			class="flex flex-col w-full max-w-screen-xl gap-5 mt-5 md:mt-24 z-20 "
			data-aos-duration="1000"
			data-aos="fade-up"
		>
			<div class="flex lg:flex-row flex-col w-full justify-between items-center">
				<div
					class="flex flex-col mt-24 w-1/2 items-center lg:items-start text-center lg:text-start"
				>
					<h2 class="text-5xl font-grandhotel text-primary">Komang Sudiasa</h2>
					<h5 class="text-xl font-poppins text-primary mt-2">
						Anak ketiga dari pasangan Gede Merta dan Made salini berasal dari desa Sambirenteng,
						Tejakula, Buleleng, Bali
					</h5>
					<RoundedButton />
				</div>
				<div class="mt-10 lg:mt-0">
					<ImageWithDecoration />
				</div>
			</div>
		</div>
		<div class="flex flex-col w-full max-w-screen-xl gap-5 mt-24 z-50">
			<div class="flex lg:flex-row flex-col w-full justify-between items-center" data-aos-duration="1000" data-aos="fade-up">
				<div class="mt-10 lg:mt-0">
					<ImageWithDecoration image="/cewe.png" imageAlt="Foto Cewe" />
				</div>
				<div class="flex flex-col mt-24 w-1/2 items-center lg:items-start text-center lg:text-start">
					<h2 class="text-5xl font-grandhotel text-primary">Luh Yulianti</h2>
					<h5 class="text-xl font-poppins text-primary mt-2">
						Anak pertama dari pasangan Made Sutawan dan Nyoman Parini berasal dari desa
						Sambirenteng, Tejakula, Buleleng, Bali
					</h5>
					<RoundedButton />
				</div>
			</div>
		</div>
	</div>
	<div class="absolute bottom-[-280px] right-0 z-0 rotate-180">
		<img src="/ornament.png" alt="Ornament Picture" class="scale-mirror" />
	</div>
</div>
