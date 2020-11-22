<script>
	import CheckGroup from './CheckGroup.svelte';
	import { triplistGroups } from './checklist.js';
</script>

<main>
	{#each triplistGroups as group (group.id)}
	<CheckGroup title={group.title} items={group.items} />
	{/each}
</main>

<style>
</style>