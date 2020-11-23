<script>
	import { triplistStore } from './stores.js';
	import Checkbox from './Checkbox.svelte';

	export let title;
	export let items;
	export let className;

	function handleChecked(e) {
		triplistStore.checkItem(e.detail.id, e.detail.checked);
	}
</script>

<div class={[className, "checkbox-group"].join(" ")}>
	<h2 class="checkbox-group__title">{ title }</h2>
	<ul class="checkbox-group__items">
		{#each items as item (item.id)}
			<li class="checkbox-group__item">
				<Checkbox 
					on:checked={handleChecked}
					id={item.id}
					checked={$triplistStore.checks[item.id]}
					label={item.title} 
				/>
			</li>
		{/each}
	</ul>
</div>

<style>
.checkbox-group {
	border: 2px #666 solid;
	padding: 1em;
}

.checkbox-group__title {
	font-size: 20px;
	margin: 0 0 0.5em;
}

.checkbox-group__items {
	margin: 0;
	padding: 0;
}

.checkbox-group__item {
	margin: 0;
	list-style: none;
}
</style>