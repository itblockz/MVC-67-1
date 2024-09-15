import Cow from './Cow.js';

export default class Database {
    constructor() {
        this.cows = []
        this.loadData();
    }

    async loadData() {
        try {
            const response = await fetch('./data.csv');
            const raw = await response.text();
            const data = raw.split(/\r?\n/);
            data.forEach(line => {
                const array = line.split(",");
                const id = array[0];
                const color = array[1];
                const years = array[2];
                const months = array[3];
                const cow = new Cow(id, color, years, months);
                this.cows.push(cow);
            });
        } catch (error) {
            console.error('Error loading data:', error);
        }
    }
    

    find(id) {
        return this.cows.find(cow => cow.id === id);
    }

    updateColor(id, color) {
        const cow = this.find(id);
        cow.color = color;
        // this.saveData();
    }
}