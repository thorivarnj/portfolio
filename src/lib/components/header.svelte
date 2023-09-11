<script>
	import { clsx } from 'clsx'
	import HeaderLinks from './headerLinks.svelte'

	let mobileMenuOpen = false
	const toggleMenu = () => (mobileMenuOpen = !mobileMenuOpen)

	let links = ['home', 'projects', 'contact']
</script>

<nav class="mb-10">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 flex-row-reverse items-center justify-between">
			<div class="inset-y-0 left-0 flex items-center sm:hidden">
				<!-- Mobile menu button-->
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-onyx hover:bg-onyx hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded="false"
					on:click={() => toggleMenu()}
				>
					<span class="sr-only">Open main menu</span>
					<!--
              Icon when menu is closed.
  
              Menu open: "hidden", Menu closed: "block"
            -->
					<svg
						class={clsx(mobileMenuOpen ? 'hidden' : 'block', 'h-6', 'w-6')}
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<!--
              Icon when menu is open.
  
              Menu open: "block", Menu closed: "hidden"
            -->
					<svg
						class={clsx(mobileMenuOpen ? 'block' : 'hidden', 'h-6', 'w-6')}
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="flex w-full items-center justify-between sm:items-stretch">
				<div class="flex flex-shrink-0 items-center">
					<a href="/" class="h-8 w-auto font-righteous text-2xl">TINJ</a>
				</div>
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						<HeaderLinks {links} />
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class={clsx('sm:hidden', mobileMenuOpen ? 'block' : 'hidden')} id="mobile-menu">
		<div class="space-y-1 px-2 pb-3 pt-2">
			<HeaderLinks {links} toggle={toggleMenu} />
		</div>
	</div>
</nav>
