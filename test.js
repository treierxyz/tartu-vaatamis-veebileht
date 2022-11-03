class TartuHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
            <h1 id="title">project tartu</h1>
            <div id="toc">
                <a href="/index.html">avaleht</a>
                <a href="test">päeval</a>
                <a href="test">õhtul</a>
            </div>
        </header>
        `;
    }
}
customElements.define("tartu-header", TartuHeader)