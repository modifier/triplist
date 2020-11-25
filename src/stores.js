import { writable, derived } from 'svelte/store';

function getInitialChecks() {
	const storedChecks = localStorage.getItem('checks');
	let result;

	try {
		result = JSON.parse(storedChecks);
	} catch (e) {
		console.error("Cannot parse initial checks: ", e);
		return {};
	}

	if (typeof result !== 'object' || result === null) {
		return {};
	}

	const cleanResult = {};
	for (let [key, value] of Object.entries(result)) {
		if (typeof value === 'boolean' && isStringNumber(key)) {
			cleanResult[key] = value;
		}
	}

	return result || {};
}

function isStringNumber(key) {
	return String(Number(key)) === key;
}

function createTriplistStore() {
	const store = writable({
		checks: getInitialChecks(),
		previousChecks: null
	});

	return {
		subscribe: store.subscribe,
		checkItem: (id, isChecked) => store.update(state => {
			state.checks[id] = isChecked;

			state.previousChecks = null;

			localStorage.setItem('checks', JSON.stringify(state.checks));

			return state;
		}),
		resetAll: () => store.update(state => {
			state.previousChecks = state.checks;

			state.checks = {};
			localStorage.setItem('checks', JSON.stringify(state.checks));

			return state;
		}),
		unresetAll: () => store.update(state => {
			state.checks = state.previousChecks;

			state.previousChecks = null;

			return state;
		})
	};
}

export const triplistStore = createTriplistStore();
