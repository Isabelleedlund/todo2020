const mocha             = require("mocha");
const expect            = require("chai").expect;
const {app}             = require("../main");

describe("Testing if app works", () => {
    it("Should run app", () => {
        expect(app).to.exist;
    });
});


module.exports = {app}; // Unit testing with Kemal