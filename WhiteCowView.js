export default class WhiteCowView {
    constructor() {
        this.view = document.getElementById('view');
    }

    showCowInfo(id, years, months, current, total) {
        this.view.innerHTML = `
            <p>Id: ${id}<p>
            <p>Color: ${"White"}<p>
            <p>Year age: ${years}<p>
            <p>Month age: ${months}<p>
            <button id="milk">Milk</button>
            <button id="feedLime">Feed Lime</button>
            <div id="resetDiv"></div>
            <p id="currentMilk">This cow's products: ${current}</p>
            <p id="totalMilk">Total products: ${total}</p>
            <button id="back">Back</button>
        `
    }

    updateProducts(current, total) {
        document.getElementById('currentMilk').innerText = "This cow's products: " + current;
        document.getElementById('totalMilk').innerText = "Total products: " + total;
    }

    showBSODCow() {
        document.getElementById('resetDiv').innerHTML = `
            <button id="reset">Reset BSOD</button>
        `
    }

    showNormalCow() {
        document.getElementById('resetDiv').innerHTML = "";
    }
}