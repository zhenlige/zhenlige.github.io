class HeimuElement extends HTMLElement {}

customElements.define('heimu', HeimuElement);

const heimuStyle = document.createElement('style');
heimuStyle.textContent = `
	heimu {
		background-color: currentColor;
	}

	heimu:hover {
		text-decoration: line-through color-mix(in srgb, currentColor 50%, transparent 50%);
		background-color: transparent;
	}
`;
document.head.appendChild(heimuStyle);
