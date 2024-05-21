<script lang="ts">
	import Footer from '$lib/components/footer.svelte'
	import Header from '$lib/components/header.svelte'
	import '../../app.css'
</script>

<body class="bg-af_white">
	<Header />
	<slot />
	<Footer />
</body>
