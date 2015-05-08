/**
 * Application template
 *
 * @type {*|Element}
 */
var app = document.querySelector('#app');

/**
 * Determines if back arrow should be visible.
 *
 * @type {boolean}
 */
app.showBackArrow = false;

/**
 * Determines if info icon should be visible.
 *
 * @type {boolean}
 */
app.showInfoIcon = true;

/**
 * State change (app-router event).
 *
 * @param event
 */
app.appStateChange = function (event) {
    var path = event.detail.path;
    if (path === '/about') {
        app.appTitle = 'About';
        app.showBackArrow = true;
        app.showInfoIcon = false;
    } else {
        app.appTitle = 'Password Generator';
        app.showBackArrow = false;
        app.showInfoIcon = true;
    }
}

/**
 * Redirect to generator.
 *
 */
app.goToGenerator = function () {
    document.querySelector('app-router').go('/generator');
};

/**
 * Redirect to about.
 *
 */
app.goToAbout = function () {
    document.querySelector('app-router').go('/about');
}
