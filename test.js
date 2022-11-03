class TartuHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
            <a href="/index.html">
                <h1 id="title">project tartu</h1>
            </a>
            <div id="toc">
                <a href="/index.html">avaleht</a>
                <a href="#">päeval</a>
                <a href="#">õhtul</a>
            </div>
        </header>
        `;
    }
}
customElements.define("tartu-header", TartuHeader)