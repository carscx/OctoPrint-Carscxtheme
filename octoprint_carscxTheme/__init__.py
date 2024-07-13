# coding=utf-8
from __future__ import absolute_import

import octoprint.plugin

class CarscxthemePlugin(octoprint.plugin.SettingsPlugin,
                        octoprint.plugin.AssetPlugin,
                        octoprint.plugin.TemplatePlugin):
    def get_settings_defaults(self):
        return {}

    def get_assets(self):
        return {
            "js": ["js/carscxTheme.js"],
            "css": ["css/carscxTheme.css", "css/customlogin.css"],  # Añadir el archivo CSS de inicio de sesión
        }

    def get_template_configs(self):
        return [
            dict(type="login", template="customlogin_login.jinja2", custom_bindings=False)
        ]

    def get_update_information(self):
        return {
            "carscxTheme": {
                "displayName": "Carscxtheme Plugin",
                "displayVersion": self._plugin_version,
                "type": "github_release",
                "user": "carscx",
                "repo": "OctoPrint-Carscxtheme",
                "current": self._plugin_version,
                "pip": "https://github.com/carscx/OctoPrint-Carscxtheme/archive/{target_version}.zip",
            }
        }

__plugin_name__ = "Carscxtheme Plugin"
__plugin_version__ = "1.0.0"
__plugin_description__ = "A custom theme plugin for OctoPrint"
__plugin_pythoncompat__ = ">=3,<4"

def __plugin_load__():
    global __plugin_implementation__
    __plugin_implementation__ = CarscxthemePlugin()

    global __plugin_hooks__
    __plugin_hooks__ = {
        "octoprint.plugin.softwareupdate.check_config": __plugin_implementation__.get_update_information
    }
