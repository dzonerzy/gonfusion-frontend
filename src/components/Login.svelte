<script>
  import anime from "animejs/lib/anime.es";

  import AlertError from "./AlertError.svelte";

  VANTA.NET({
    el: "body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 600.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    //color: 0xfc5130,
    //backgroundColor: 0x1c2541,
    color: 0xff7e6b,
    backgroundColor: 0x1c2541,
    points: 15.0,
    maxDistance: 21.0,
    spacing: 14.0,
  });

  export let fullname = "";
  export let email = "";
  export let password = "";
  export let isLoginForm = true;

  function clearform() {
    email = "";
    password = "";
    fullname = "";
  }

  function switchToRegister() {
    clearform();
    anime({
      targets: "#viewChange",
      opacity: [1, 0],
      easing: "easeInOutQuad",
      duration: 200,
    });
    anime({
      targets: "#login-form",
      rotateY: [0, 90],
      duration: 500,
      easing: "easeInOutQuad",
      complete: () => {
        isLoginForm = !isLoginForm;
        anime({
          targets: "#viewChange",
          opacity: [0, 1],
          easing: "easeInOutQuad",
          delay: 350,
          duration: 200,
        });
        anime({
          targets: "#login-form",
          rotateY: [90, 0],
          duration: 500,
          easing: "easeInOutQuad",
        });
      },
    });
  }

  /*function rotateonmousemove(e) {
		var x = window.innerWidth / 2 - e.pageX;
		var y = window.innerHeight / 2 - e.pageY;
		anime({
			targets: formlogin,
			rotateX: x / 12,
			rotateY: y / 12,
			easing: "linear",
			duration: 200,
		});
	}

	function resetform(e) {
		anime({
			targets: formlogin,
			rotateX: 0 + "deg",
			rotateY: 0 + "deg",
			easing: "linear",
			duration: 500,
		});
	}*/
</script>

<div class="centered-div text-null inline-table">
  <div
    id="login-form"
    class="card w-96 custom-glass text-white shadow-xl drop-shadow-2xl border-t-slate-100 border-t border-l border-l-slate-100 border-opacity-20 inline-block align-middle"
  >
    <figure class="px-10 pt-10">
      <img src="assets/logo.png" alt="logo" class="rounded-xl" />
    </figure>
    {#if isLoginForm}
      <div class="card-body items-center text-center">
        <span class="divider text-xl bg- text-base-100 font-bold"> Login </span>
        <label class="input-group">
          <span class="text-slate-800 text-base"
            ><i class="fa-solid fa-at" /></span
          >
          <input
            type="text"
            placeholder="email@site.com"
            class="input input-bordered w-full text-black"
            bind:value={email}
          />
        </label>
        <label class="input-group">
          <span class="text-slate-800 text-base"
            ><i class="fa-solid fa-key" /></span
          >
          <input
            type="password"
            placeholder="********"
            class="input input-bordered w-full text-black"
            bind:value={password}
          />
        </label>

        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text pr-2 text-base-100">Remember me</span>
            <input type="checkbox" class="checkbox checkbox-sm bg-base-100" />
          </label>
        </div>

        <div class="card-actions">
          <div class="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              class="inline-flex items-center py-2 px-4 text-sm font-medium text-base-100 bg-transparent rounded-l-lg border border-base-300 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-800 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
            >
              <i class="fa-solid fa-arrow-right-to-bracket mr-2" />
              Login
            </button>
            <button
              on:click={clearform}
              type="button"
              class="inline-flex items-center py-2 px-4 text-sm font-medium text-base-100 bg-transparent rounded-r-md border border-base-300 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-800 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
            >
              <i class="fa-solid fa-trash mr-2" />
              Reset
            </button>
          </div>
        </div>
      </div>
    {:else}
      <div class="card-body items-center text-center">
        <span class="divider text-xl bg- text-base-100 font-bold">
          Register
        </span>
        <label class="input-group">
          <span class="text-slate-800 text-base"
            ><i class="fa-solid fa-user-astronaut" /></span
          >
          <input
            type="text"
            placeholder="Fullname"
            class="input input-bordered w-full text-black"
            bind:value={fullname}
          />
        </label>
        <label class="input-group">
          <span class="text-slate-800 text-base"
            ><i class="fa-solid fa-at" /></span
          >
          <input
            type="text"
            placeholder="email@site.com"
            class="input input-bordered w-full text-black"
            bind:value={email}
          />
        </label>
        <label class="input-group">
          <span class="text-slate-800 text-base"
            ><i class="fa-solid fa-key" /></span
          >
          <input
            type="password"
            placeholder="********"
            class="input input-bordered w-full text-black"
            bind:value={password}
          />
        </label>

        <div class="card-actions">
          <div class="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              class="inline-flex items-center py-2 px-4 text-sm font-medium text-base-100 bg-transparent rounded-l-lg border border-base-300 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-800 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
            >
              <i class="fa-solid fa-door-open mr-2" />
              Register
            </button>
            <button
              on:click={clearform}
              type="button"
              class="inline-flex items-center py-2 px-4 text-sm font-medium text-base-100 bg-transparent rounded-r-md border border-base-300 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-800 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
            >
              <i class="fa-solid fa-trash mr-2" />
              Reset
            </button>
          </div>
        </div>
      </div>
    {/if}
  </div>
  <div
    id="viewChange"
    class="text-base-100 inline-flex w-8 h-10 rounded-r-full bg-gradient-to-r from-rose-900 to-red-800 border-r border-t border-b border-gray-900 text-base align-middle justify-center items-center"
  >
    <div class="text-center pr-1 ">
      <i
        on:click={switchToRegister}
        class="fa-solid fa-rotate cursor-pointer hover:animate-spin"
      />
    </div>
  </div>
</div>
<AlertError msg="Invalid username or password" />

<style>
  .centered-div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #login-form {
    backdrop-filter: blur(6px);
    transform: none;
  }

  .custom-glass {
    background-color: transparent;
    background-image: linear-gradient(
        135deg,
        rgb(255 255 255 / var(--glass-opacity, 30%)) 0%,
        rgb(0 0 0 / 0%) 100%
      ),
      linear-gradient(
        var(--glass-reflex-degree, 100deg),
        rgb(255 255 255 / var(--glass-reflex-opacity, 10%)) 25%,
        rgb(0 0 0 / 0%) 25%
      );
    text-shadow: 0 1px rgb(0 0 0 / var(--glass-text-shadow-opacity, 5%));
  }

  .divider:before {
    background-color: hsl(var(--bc) / var(--tw-bg-opacity));
    opacity: 0.2;
    background-color: #fff;
  }

  .divider:after {
    background-color: hsl(var(--bc) / var(--tw-bg-opacity));
    opacity: 0.2;
    background-color: #fff;
  }
</style>
