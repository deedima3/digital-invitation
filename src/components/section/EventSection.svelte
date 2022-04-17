<script lang="ts">
	import ImageWithDecoration from '../ImageWithDecoration.svelte';

	import RoundedButton from '../RoundedButton.svelte';
	import TextTitle from '../TextTitle.svelte';
</script>

<div class="w-full h-full flex flex-col items-center relative overflow-hidden pb-24" id="location">
	<div class="absolute top-0 left-0 -mt-32 z-0">
		<img src="/ornament.png" alt="Ornament Picture" class="scale-mirror" />
	</div>
	<div class="flex flex-col w-full max-w-screen-xl gap-5 mt-24 z-20">
		<div class="w-full max-w-screen-xl flex flex-col items-center">
			<TextTitle title="Acara Pernikahan" />
			<p class="text-xl md:text-2xl text-primary w-full max-w-screen-lg text-center mt-10" data-aos-duration="1000" data-aos="fade-up">
				Merupakan suatu kehormatan bagi kami, jika bapak, ibu, saudara/i dapat datang pada acara
				pada tanggal
			</p>
			<h2 class="text-4xl md:text-5xl font-grandhotel text-primary mt-10" data-aos-duration="1000" data-aos="fade-up">28 April 2022</h2>
			<p class="text-xl md:text-2xl text-primary w-full max-w-screen-lg text-center mt-10" data-aos-duration="1000" data-aos="fade-up">
				Di Jalan Tejakula-Tianyar, Nomor xxx diseberang Warung Made, Desa Sambirenteng, Kecamatan
				Tejakula, Kabupaten Buleleng, Bali.
			</p>
		</div>
	</div>
	<div class="absolute bottom-[-290px] right-0 z-0 rotate-180">
		<img src="/ornament.png" alt="Ornament Picture" class="scale-mirror" />
	</div>
	<div class="mapouter w-full max-w-screen-xl mt-5" data-aos-duration="1000" data-aos="fade-up">
		<div class="gmap_canvas w-full max-w-screen-xl">
			<iframe
				class="w-full h-full"
				id="gmap_canvas"
				src="https://maps.google.com/maps?q=Jalan%20Tejakula%20Tianyar%20Warung%20Made&t=&z=13&ie=UTF8&iwloc=&output=embed"
				frameborder="0"
				scrolling="no"
				marginheight="0"
				marginwidth="0"
			/><a href="https://fmovies-online.net">fmovies</a><br /><style>
				.mapouter {
					position: relative;
					text-align: right;
                    height : 500px;
				}
			</style><a href="https://www.embedgooglemap.net" /><style>
				.gmap_canvas {
					overflow: hidden;
					background: none !important;
                    height : 500px;
				}
			</style>
		</div>
	</div>
</div>
