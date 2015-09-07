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
     * Initialize default variables.
     */
    app.__page = 0;
    app.appTitle = 'Password Generator';
    app.showBackArrowIcon = false;
    app.showInfoIcon = true;

    /**
     * Click handler for info button.
     */
    app.infoClickHandler = function () {
        app.__page = 1;
        app.appTitle = 'About';
        app.showBackArrowIcon = true;
        app.showInfoIcon = false;
    },

    /**
     * Click handler for back arrow button.
     */
    app.backArrowClickHandler = function () {
        app.__page = 0;
        app.appTitle = 'Password Generator';
        app.showBackArrowIcon = false;
        app.showInfoIcon = true;
    },

    /**
     * Event listener for Polymer initialization.
     */
    window.addEventListener('WebComponentsReady', function () {
        console.log('Password Generator is ready!');
    });

})(document);
