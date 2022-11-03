class TartuHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
            <h1 id="title">tartu vaatamisväärsused</h1>
            <div id="toc">
                <a href="test">test</a>
                <a href="test">test</a>
                <a href="test">test</a>
            </div>
        </header>
        `;
    }
}
customElements.define("tartu-header", TartuHeader)