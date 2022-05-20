<script>
	import { onMount } from "svelte";

	import anime from "../../node_modules/animejs/lib/anime.es.js";

	export let msg = "";
	let dismissed = false;

	onMount(() => {
		if (msg) {
			anime({
				targets: "#error-alert",
				keyframes: [
					{
						opacity: [0, 1],
						translateY: ["-100px", 0],
						duration: 400,
					},
					{
						translateY: ["-20px"],
						duration: 200,
					},
					{
						translateY: ["6px"],
						duration: 200,
					},
					{
						translateY: ["-10px"],
						duration: 200,
					},
					{
						translateY: ["2px"],
						duration: 200,
					},
					{
						translateY: ["-4px"],
						duration: 130,
					},
					{
						translateY: ["0px"],
						duration: 130,
					},
				],
				easing: "easeInOutSine",
			});
		}
	});

	function dismiss() {
		anime({
			targets: "#error-alert",
			easing: "easeInOutSine",
			keyframes: [
				{
					rotate: "3deg",
					duration: 100,
				},
				{
					rotate: "-3deg",
					duration: 100,
				},
				{
					rotate: "0deg",
					duration: 100,
				},
				{
					translateY: -100,
					duration: 200,
					opacity: 0.0,
				},
			],
			complete: () => {
				dismissed = true;
			},
		});
	}
</script>

{#if dismissed === false}
	<div id="error-alert" class="absolute bottom-0 right-0 m-5">
		<div class="alert alert-error shadow-lg">
			<div>
				<i class="fa-solid fa-circle-exclamation" />
				<span>{msg}</span>
			</div>
			<div class="flex-none">
				<button class="btn btn-sm btn-ghost" on:click={dismiss}> Close </button>
			</div>
		</div>
	</div>
{/if}

<style>
</style>
