// Koodi kirjutas Oliver Jõgar
// Isetehtud elemendid: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
// Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

class TartuHeader extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        let html = await fetch('/tartu-header.html')
        this.innerHTML = await html.text();
    }
}

customElements.define("tartu-header", TartuHeader)