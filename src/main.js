import App from './App.svelte';
import 'public/global.css';

const app = new App({
	target: document.querySelector('#app')
});

export default app;