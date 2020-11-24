<script>
	import { triplistStore } from './stores.js';
	import CheckGroup from './CheckGroup.svelte';
	import { triplistGroups } from './checklist.js';

	function hasChecks(checks) {
		return Object.values(checks).some(value => value === true);
	}
</script>

<main class="triplist">
	<header class="triplist__header">
		<h1 class="triplist__title">С чем поехать</h1>

		{#if $triplistStore.previousChecks}
			<button class="triplist__unreset" on:click={triplistStore.unresetAll}>Отменить</button>
		{:else if hasChecks($triplistStore.checks)}
			<button class="triplist__reset" on:click={triplistStore.resetAll}>Очистить</button>
		{/if}
	</header>
	<p class="triplist__desc">Короткий список того, что взять с собой в поездку.</p>

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

.triplist__header {
	display: flex;
	justify-content: space-between;
	align-content: center;
}

.triplist__title {
	font-size: 2rem;
	margin: 0;
}

.triplist__desc {
	margin-top: 0.5rem;
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

.triplist__reset,
.triplist__unreset {
	border: 2px #333 solid;
	background: white;
	text-transform: capitalize;
	padding: 0.5em 0.7em;
	cursor: pointer;
	transition: background 0.3s;
}

.triplist__reset:hover,
.triplist__unreset:hover {
	background: #eee;
}
</style>