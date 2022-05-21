<script>
	import { onMount } from "svelte";

	import anime from "../../node_modules/animejs/lib/anime.es.js";

	export let msg = "";
	export let type = "error";
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
	{#if type === "error"}
		<div
			id="error-alert"
			class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded shadow-lg absolute min-w-fit bottom-0 right-0 mb-4 mr-4"
			role="alert"
		>
			<strong class="font-bold">Error!</strong>
			<span class="inline">{msg}</span>
			<span class="relative top-0 bottom-0 right-0 pl-2">
				<i on:click={dismiss} class="fa fa-window-close" aria-hidden="true" />
			</span>
		</div>
	{:else if type === "success"}
		<div
			id="error-alert"
			class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow-lg absolute min-w-fit bottom-0 right-0 mb-4 mr-4"
			role="alert"
		>
			<strong class="font-bold">Success!</strong>
			<span class="inline">{msg}</span>
			<span class="relative top-0 bottom-0 right-0 pl-2">
				<i on:click={dismiss} class="fa fa-window-close" aria-hidden="true" />
			</span>
		</div>
	{:else if type === "info"}
		<div
			id="error-alert"
			class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded shadow-lg absolute min-w-fit bottom-0 right-0 mb-4 mr-4"
			role="alert"
		>
			<strong class="font-bold">Info!</strong>
			<span class="inline">{msg}</span>
			<span class="relative top-0 bottom-0 right-0 pl-2">
				<i on:click={dismiss} class="fa fa-window-close" aria-hidden="true" />
			</span>
		</div>
	{:else if type === "warning"}
		<div
			id="error-alert"
			class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded shadow-lg absolute min-w-fit bottom-0 right-0 mb-4 mr-4"
			role="alert"
		>
			<strong class="font-bold">Warning!</strong>
			<span class="inline">{msg}</span>
			<span class="relative top-0 bottom-0 right-0 pl-2">
				<i on:click={dismiss} class="fa fa-window-close" aria-hidden="true" />
			</span>
		</div>
	{/if}
{/if}

<style>
</style>
