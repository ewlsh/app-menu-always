/* exported init, enable, disable */

const ViewSelector = imports.ui.viewSelector;
const Main = imports.ui.main;
const Panel = imports.ui.panel;

const ORIG_sync = Panel.AppMenuButton.prototype._sync;

function init() { }

function enable() {
    Panel.AppMenuButton.prototype._sync = MOD_sync;
    Main.panel.statusArea['appMenu']._sync = MOD_sync;
}

function disable() {
    Panel.AppMenuButton.prototype._sync = ORIG_sync;
    Main.panel.statusArea['appMenu']._sync = ORIG_sync;
}

/* Add our own custom function... */

function MOD_sync() {
    let ORIG_gtkSettings = this._gtkSettings;
    this._gtkSettings = {};
    this._gtkSettings.gtk_shell_shows_app_menu = true;
    ORIG_sync.apply(this, arguments);
    this._gtkSettings = ORIG_gtkSettings;
}