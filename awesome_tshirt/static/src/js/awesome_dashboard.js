


odoo.define('awesome_tshirt.dashboard', function (require) {
    "use strict";

    var AbstractAction = require('web.AbstractAction');
    var ClientAction = AbstractAction();

    var core = require('web.core');

    var Dashboard = AbstractAction.extend({
        start: function () {
            this.$el.html('Hello world');
            return this._super.apply(this, arguments);
        },
    });

    core.action_registry.add('awesome_tshirt.dashboard', Dashboard);

    return Dashboard;
});

// var Counter = Widget.extend({
//     template: 'awesome_tshirt.test-div',
//     events: {
//         'click button': '_onClick',
//     },
//     init: function (parent, value) {
//         this._super(parent);
//         this.count = value;
//     },
//     _onClick: function () {
//         this.count++;
//         this.$('.val').text(this.count);
//     },
// });

