var expect = require('chai').expect;
var messageAttacher = require('../messages/index.js');

describe("Checking Attachments", function () {
    describe("No attached image", function () {
        it("Checks weather a message has no image attached to it", function () {
            expect(messageAttacher.hasImageAttachment().to.equal(false));
        });
    });

    describe("Attached image", function () {
        it("Checks weather a message has image attached to it", function () {
            expect(messageAttacher.hasImageAttachment().to.equal(true));
        });
    });
});