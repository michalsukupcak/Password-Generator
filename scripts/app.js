/**
 * Main application template companion script.
 */
(function (document) {
    'use strict';

    /**
     * Get reference to application.
     */
    var app = document.querySelector('#app');

    /**
     * Click handler for info button.
     */
    app._infoClickHandler = function () {
        app.__page = 1;
        app.appTitle = 'About';
        app.showBackArrowIcon = true;
        app.showInfoIcon = false;
    },

    /**
     * Click handler for back arrow button.
     */
    app._backArrowClickHandler = function () {
        app.__page = 0;
        app.appTitle = 'Password Generator';
        app.showBackArrowIcon = false;
        app.showInfoIcon = true;
    },

    /**
     * Event listener for application load.
     */
    app.addEventListener('dom-change', function () {
        console.log('Fingerprint Calculator is loaded ...');
    });

    /**
     * Event listener for Polymer initialization.
     */
    window.addEventListener('WebComponentsReady', function () {
        console.log('WebComponents are initialized and ready ...');
        app.appTitle = 'Password Generator';
        app.showBackArrowIcon = false;
        app.showInfoIcon = true;
    });

})(document);
