class HeimuElement extends HTMLElement {}

customElements.define('hei-mu', HeimuElement);

const heimuStyle = document.createElement('style');
heimuStyle.textContent = `
	hei-mu {
		background-color: currentColor;
	}

	hei-mu:hover {
		background-color: color-mix(in srgb, currentColor 20%, transparent 80%);
	}
`;
document.head.appendChild(heimuStyle);
