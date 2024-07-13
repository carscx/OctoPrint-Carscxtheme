/*
 * View model for OctoPrint-Carscxtheme
 *
 * Author: Carlos Santos
 * License: AGPLv3
 */
$(function() {
    function CarscxthemeViewModel(parameters) {
        var self = this;

        // Inject the Google Fonts link tags into the head
        var link1 = document.createElement('link');
        link1.rel = 'preconnect';
        link1.href = 'https://fonts.googleapis.com';
        document.head.appendChild(link1);

        var link2 = document.createElement('link');
        link2.rel = 'preconnect';
        link2.href = 'https://fonts.gstatic.com';
        link2.crossOrigin = 'anonymous';
        document.head.appendChild(link2);

        var link3 = document.createElement('link');
        link3.rel = 'stylesheet';
        link3.href = 'https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200&display=swap';
        document.head.appendChild(link3);

        // Add the class 'carscxTheme' to the body element
        $('body').addClass('carscxTheme');

        // TODO: Implement your plugin's view model here.
    }

    /* view model class, parameters for constructor, container to bind to
     * Please see http://docs.octoprint.org/en/master/plugins/viewmodels.html#registering-custom-viewmodels for more details
     * and a full list of the available options.
     */
    OCTOPRINT_VIEWMODELS.push({
        construct: CarscxthemeViewModel,
        // ViewModels your plugin depends on, e.g. loginStateViewModel, settingsViewModel, ...
        dependencies: [ /* "loginStateViewModel", "settingsViewModel" */ ],
        // Elements to bind to, e.g. #settings_plugin_carscxTheme, #tab_plugin_carscxTheme, ...
        elements: [ /* ... */ ]
    });
});
