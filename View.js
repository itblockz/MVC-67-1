export default class View {
    constructor() {
        this.view = document.getElementById('view');
    }
    
    showIdInput() {
        this.view.innerHTML = `
        <label>Enter Cow Id:</label>
        <input type="text" id="cowId">
        <button type="submit" id="submit">Submit</button>
        `
    }

    showInvalidInput() {
        this.view.innerHTML = `
            <p>Invalid input</p>
            <button id="back">Back</button>
        `
    }

    showCowNotFound(id, color, years, months) {
        this.view.innerHTML = `
            <p>Cow not found</p>
            <button id="back">Back</button>
        `
    }

    showBSODCow() {
        this.view.innerHTML = `
            <p>This cow has BSOD</p>
            <button id="back">Back</button>
        `
    }
}