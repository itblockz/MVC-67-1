import View from './View.js';
import Controller from './Controller.js';
import Database from './Database.js';

const view = new View();
const database = new Database();
const controller = new Controller(view, database);