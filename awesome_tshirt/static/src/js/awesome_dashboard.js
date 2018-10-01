odoo.define('awesome_tshirt.dashboard', function (require) {
    "use strict";

    return '';
});

var AbstractAction = require('web.AbstractAction');
var ClientAction = AbstractAction();

core.action_registry.add('awesome_tshirt.menu-action', ClientAction);