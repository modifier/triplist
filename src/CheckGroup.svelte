<script>
	import { triplistStore } from './stores.js';
	import Checkbox from './Checkbox.svelte';

	export let title;
	export let items;

	function handleChecked(e) {
		triplistStore.checkItem(e.detail.id, e.detail.checked);
	}
</script>

<h2>{ title }</h2>
<ul>
	{#each items as item (item.id)}
		<Checkbox 
			on:checked={handleChecked}
			id={item.id}
			checked={$triplistStore.checks[item.id]}
			label={item.title} 
		/>
	{/each}
</ul>