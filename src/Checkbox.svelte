<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let id;
	export let label;
	export let checked = false;

	function handleChecked(e) {
		checked = e.target.checked;
		dispatch('checked', {
			id,
			checked
		});
	}
</script>

<label>
	<input type="checkbox" {checked} on:change={handleChecked} />
	{ label }
</label>