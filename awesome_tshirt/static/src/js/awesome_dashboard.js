odoo.define('awesome_tshirt.dashboard', function (require) {
    "use strict";

    var AbstractAction = require('web.AbstractAction');
    var ClientAction = AbstractAction.extend({
        init: function() {
            console.log('Hello world!');
        },
    });

    core.action_registry.add('menu-action', ClientAction);

    return '';
});

