// Koodi kirjutas Oliver Jõgar
// Isetehtud elemendid: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
// Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// CSS linkimine: https://stackoverflow.com/questions/574944/how-to-load-up-css-files-using-javascript

class TartuHeader extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        let html = await fetch('/tartu-header.html')
        var link = document.createElement('link');
        link.href = "/tartu-header.css";
        link.type = "text/css";
        link.rel = "stylesheet";
        this.innerHTML = await html.text();
        this.appendChild(link);
    }
}

customElements.define("tartu-header", TartuHeader)