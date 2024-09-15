import WhiteCow from "./WhiteCow.js";
import BrownCow from "./BrownCow.js";
import WhiteCowView from './WhiteCowView.js';
import BrownCowView from './BrownCowView.js';

export default class Controller {
    constructor(view, database) {
        this.view = view;
        this.database = database;
        this.totalMilk = 0;
        this.addSubmitButtonListener();
    }

    newCow() {
        const id = document.getElementById('cowId').value;

        if (this.validate(id)) {
            const cow = this.database.find(id);
            if (!cow) {
                this.view.showCowNotFound();
                this.addBackButtonListener();
            } else {
                this.processCow(cow);
            }
        } else {
            this.view.showInvalidInput();
            this.addBackButtonListener();
        }
    }

    validate(id) {
        return /^[1-9][0-9]{7}$/.test(id);
    }

    processCow(cow) {
        const { color, id, months, years } = cow;
        
        const currentMilk = { count: 0 };
        const cowView = this.createCowView(color);
        const coloredCow = this.createCow(color, id, years, months);
        
        if (cowView === null) return;
        
        cowView.showCowInfo(id, years, months, currentMilk.count, this.totalMilk);
        this.addBackButtonListener();

        document.getElementById('milk').addEventListener('click', () => this.handleMilkClick(coloredCow, cowView, currentMilk));
        if (color === 'White') {
            document.getElementById('feedLime').addEventListener('click', () => coloredCow.feedLime());
        }
    }

    handleMilkClick(cow, cowView, currentMilk) {
        const acceptedMilk = ['Milk', 'Sour milk', 'Chocolate milk'];
        const milkType = cow.milk();
        console.log(milkType);

        if (acceptedMilk.includes(milkType)) {
            currentMilk.count++;
            this.totalMilk++;
        } else {
            this.handleInvalidMilk(cow, cowView);
        }
        cowView.updateProducts(currentMilk.count, this.totalMilk);
    }

    handleInvalidMilk(cow, cowView) {
        this.database.updateColor(cow.id, "Blue");
        cowView.showBSODCow();

        document.getElementById('reset').addEventListener('click', () => {
            cow.reset();
            this.database.updateColor(cow.id, cow.color);
            cowView.showNormalCow();
        });
    }

    createCowView(color) {
        if (color === 'White') {
            return new WhiteCowView();
        } else if (color === 'Brown') {
            return new BrownCowView();
        }
        this.view.showBSODCow();
        this.addBackButtonListener();
        return null;
    }

    createCow(color, id, years, months) {
        if (color === 'White') {
            return new WhiteCow(id, years, months);
        } else if (color === 'Brown') {
            return new BrownCow(id, years, months);
        }
        return null;
    }

    addBackButtonListener() {
        document.getElementById('back').addEventListener('click', () => {
            this.view.showIdInput();
            this.addSubmitButtonListener();
        });
    }

    addSubmitButtonListener() {
        document.getElementById('submit').addEventListener('click', () => {
            this.newCow();
        });
    }
}
