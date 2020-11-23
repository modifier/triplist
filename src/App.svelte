<script>
	import CheckGroup from './CheckGroup.svelte';
	import { triplistGroups } from './checklist.js';
</script>

<main class="triplist">
	<h1 class="triplist__title">С чем поехать</h1>
	<div class="triplist__groups">
		{#each triplistGroups as group (group.id)}
		<div class="triplist__group">
			<CheckGroup title={group.title} items={group.items} />
		</div>
		{/each}
	</div>
</main>

<style>
.triplist {
	max-width: 60rem;
	margin: 0 auto;
}

.triplist__title {
	font-size: 2rem;
	margin-top: 0;
}

.triplist__groups {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}

.triplist__group {
	flex: 0 1 19rem;
	margin-bottom: 2em;
}
</style>