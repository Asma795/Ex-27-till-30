"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userNames = ['Asma123', 'Alina99', 'admin', 'saba99', 'im_latin'];
// Using For Of Loop
for (const user of userNames) {
    if (user === 'admin') {
        console.log('Hello Admin, Would you like to see a status report');
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again`);
    }
}
