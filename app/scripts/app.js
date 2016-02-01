/* global Base64, Sha256, Clipboard */
(function (document) {
    'use strict';

    new Clipboard('#clipboard');

    // Reference to app template
    var app = document.querySelector('#app');

    // Default values
    app.section = 'form';
    app.alias = '';
    app.secret = '';
    app.remember = false;
    app.password = '';

    // Open about dialog
    app.openAbout = function () {
        this.$.aboutDialog.open();
    };

    // Opens warning dialog if user enabled "save secret" option
    app.save = function () {
        if (this.remember === true) {
            this.$.saveDialog.open();
        }
    };

    // Clears all important application data (and storage)
    app.clear = function () {
        this.alias = '';
        this.secret = '';
        this.remember = false;
        this.clipboard = false;
        this.password = '';
        this.$.rememberStorage.save();
        this.$.clipboardStorage.save();
        this.$.secretStorage.save();
    };

    // Validates form, generates password and forwards user to "result" section
    app.generate = function () {
        if (this.alias === '') {
            this.toast('Please fill in the alias!');
            this.$.alias.$.input.focus();
        } else if (this.secret === '') {
            this.toast('Please fill in the secret!');
            this.$.secret.$.input.focus();
        } else {
            this.password = Base64.encode(Sha256.hash(this.alias + this.secret)).substring(17,49);
            if (this.remember === true) {
                this.$.rememberStorage.save();
                this.$.clipboardStorage.save();
                this.$.secretStorage.save();
            }
            if (this.clipboard === true) {
                this.copy();
                this.$.clipboard.click();
            }
            this.section = 'result';
        }
    };

    // Copies password to clipboard
    app.copy = function () {
        this.$.clipboard.dataset.clipboardText = this.password;
        this.toast('Password copied to your clipboard.');
    };

    // Returns back to "form" section
    app.back = function () {
        this.section = 'form';
    };

    // Show toast with a message
    app.toast = function (message) {
        this.$.toast.hide();
        this.$.toast.text = message;
        this.$.toast.show();
    };

    // Keypress handler on input key press (call app.generate if enter is pressed)
    app.keyHandler = function (event) {
        if (event.keyCode === 13) {
            this.generate();
        }
    };

    // Focus alias input when app is loaded (wait a bit for UI load)
    app.addEventListener('dom-change', function () {
        //this.$.alias.$.input.focus();
        this.async(function () {
            this.$.alias.$.input.focus();
        });
    });

})(document);
