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

<label class="checkitem">
	<div class="checkbox">
		<input type="checkbox" {checked} on:change={handleChecked} class="checkbox__perse" />
	    <svg class="checkbox__styled" viewBox="0 0 21 21">
	        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
	    </svg>
	</div>
	{ label }
</label>

<style>
.checkitem {
	cursor: pointer;
	line-height: 1.5em;
}
.checkbox {
	display: inline-block;
}

.checkbox {
	position: relative;
	vertical-align: top;
}

.checkbox__perse,
.checkbox__styled {
    width: 21px;
    height: 21px;
    display: block;
}

.checkbox__perse {
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    outline: none;
    background: #fff;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    border-radius: 4px;
    transition: box-shadow .3s;
    box-shadow: inset 0 0 0 1px #D1D6EE;
}
.checkbox__perse:hover {
	box-shadow: inset 0 0 0 2px #BBC1E1;
}
.checkbox__perse:checked {
	box-shadow: inset 0 0 0 11px #1E2235;
}

.checkbox__perse:checked + .checkbox__styled {
    animation: bounce .4s linear forwards .2s;
}

.checkbox__styled {
    pointer-events: none;
    fill: none;
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 21px;
    height: 21px;
    transform: translateZ(0);
}


@keyframes bounce {
    50% {
        transform: scale(1.2);
    }
    75% {
        transform: scale(.9);
    }
    100% {
        transform: scale(1);
    }
}

input:disabled {
  color: #ccc;
}

label {
  display: block;
}
</style>

<!-- https://codepen.io/aaroniker/pen/PowZbgb?editors=1100 -->