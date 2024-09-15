export default class WhiteCow {
    constructor(id, years, months) {
        this.id = id;
        this.color = "White";
        this.years = years;
        this.months = months;
        this.lime = false;
    }

    feedLime() {
        this.lime = true;
    }

    milk() {
        if (this.lime) return "Sour milk"
        const bsod = Math.random() < 0.005 * this.months;
        if (bsod || this.color == "Blue") {
            this.color = "Blue";
            return "Soy milk";
        }
        return "Milk";
    }

    reset() {
        this.color = "White";
    }
}