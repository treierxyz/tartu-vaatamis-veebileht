// Koodi kirjutas Oliver Jõgar
// Isetehtud elemendid: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
// Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// päis
class TartuHeader extends HTMLElement { // defineerime kohandatud elemendi jaoks uue klassi
    constructor() { // konstruktor
        super(); // kuna klass on HTMLElement klassi laiendus, siis kutsutakse super et tekiks õige prototüübi ahel (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
    }

    async connectedCallback() { // connectedCallback kutsutakse iga kord kui kohandatud element lisatakse DOMi
        let html = await fetch('./tartu-header.html') // fetch võimaldab ressursse hankida, sel juhul päise HTML sisu
        this.innerHTML = await html.text(); // oodatakse kuni HTML fail on hangitud ning sisu lisatakse elemendi innerHTMLi
    }
}

// jalus
class TartuFooter extends HTMLElement { // analoogne töökäik päise klassiga
    constructor() {
        super();
    }

    async connectedCallback() {
        let html = await fetch('./tartu-footer.html')
        this.innerHTML = await html.text();
    }
}

customElements.define("tartu-header", TartuHeader) // defineerib uue kohandatud elemendi "tartu-header" ja seob selle TartuHeader klassiga
customElements.define("tartu-footer", TartuFooter) // analoogne päisega