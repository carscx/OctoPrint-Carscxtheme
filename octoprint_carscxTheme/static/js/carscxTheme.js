/*
 * View model for OctoPrint-Carscxtheme
 *
 * Author: Carlos Santos
 * License: AGPLv3
 */
$(function() {
    function CarscxthemeViewModel(parameters) {
        var self = this;

        // Assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        // Add the class 'carscxTheme' to the body element
        $('body').addClass('carscxTheme');

        // TODO: Implement your plugin's view model here.
    }

    /* View model class, parameters for constructor, container to bind to
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
