export default class BrownCow {
    constructor(id, years, months) {
        this.id = id;
        this.color = "Brown";
        this.years = years;
        this.months = months;
    }

    milk() {
        const bsod = Math.random() < 0.01 * this.years;
        if (bsod || this.color == "Blue") {
            this.color = "Blue";
            return "Almond milk";
        }
        return "Chocolate milk";
    }

    reset() {
        this.color = "Brown";
    }
}