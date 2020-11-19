import { writable } from 'svelte/store';

function getInitialChecks() {
	const storedChecks = localStorage.getItem('checks');
	let result;

	try {
		result = JSON.parse(storedChecks);
	} catch (e) {
		console.error("Cannout parse initial checks: ", e);
		return {};
	}

	if (typeof result !== 'object') {
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

	const { subscribe, set, update } = writable({
		checks: getInitialChecks()
	});

	return {
		subscribe,
		checkItem: (id, isChecked) => update(state => {
			state.checks[id] = isChecked;

			localStorage.setItem('checks', JSON.stringify(state.checks));

			return state;
		}),
	};
}

export const triplistStore = createTriplistStore();