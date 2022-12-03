// Koodi kirjutas Oliver Jõgar
// Isetehtud elemendid: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
// Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// CSS linkimine: https://stackoverflow.com/questions/574944/how-to-load-up-css-files-using-javascript

// päis
class TartuHeader extends HTMLElement { // defineerime kohandatud elemendi jaoks uue klassi
    constructor() { // konstruktor
        super(); // kuna klass on HTMLElement klassi laiendus, siis kutsutakse super et tekiks õige prototüübi ahel (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
    }

    async connectedCallback() { // connectedCallback kutsutakse iga kord kui kohandatud element lisatakse DOMi
        let html = await fetch('./tartu-header.html') // fetch võimaldab ressursse hankida, sel juhul päise HTML sisu
        var link = document.createElement('link'); // tekitame uue link elemendi
        link.href = "./tartu-header.css"; // lisame sellele CSS faili viitena
        link.type = "text/css"; // seame faili tüübiks CSS
        link.rel = "stylesheet"; // määrab faili ülesande, sel juhul kohandatud elemendi stiilimine
        this.innerHTML = await html.text(); // oodatakse kuni HTML fail on hangitud ning sisu lisatakse elemendi innerHTMLi
        this.appendChild(link); // varem koostatud link element lisatakse juurde stiilimiseks
    }
}

// jalus
class TartuFooter extends HTMLElement { // analoogne töökäik päise klassiga
    constructor() {
        super();
    }

    async connectedCallback() {
        let html = await fetch('./tartu-footer.html')
        var link = document.createElement('link');
        link.href = "./tartu-footer.css";
        link.type = "text/css";
        link.rel = "stylesheet";
        this.innerHTML = await html.text();
        this.appendChild(link);
    }
}

customElements.define("tartu-header", TartuHeader) // defineerib uue kohandatud elemendi "tartu-header" ja seob selle TartuHeader klassiga
customElements.define("tartu-footer", TartuFooter) // analoogne päisega