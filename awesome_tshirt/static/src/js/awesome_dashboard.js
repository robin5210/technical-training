var Widget = require('web.Widget');
var AbstractAction = require('web.AbstractAction');

odoo.define('awesome_tshirt.dashboard', function (require) {
    "use strict";

    var ClientAction = AbstractAction.extend({
        init: function() {
            console.log('Hello world!');
        },
    });

    core.action_registry.add('tshirt-dashboard', ClientAction);

    return '';
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

