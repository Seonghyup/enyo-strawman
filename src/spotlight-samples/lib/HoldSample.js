var
	kind = require('enyo/kind'),
	Button = require('enyo/Button'),
	Control = require('enyo/Control');

var
	Spotlight = require('spotlight');

var h = {
	ontap: 'tapped',
	onSpotlightKeyDown: 'setConfigSpotlight',
	onhold: 'held',
	onholdpulse: 'pulse',
	onrelease: 'released'
};

module.exports = kind({
	name: 'HoldSample',
	kind: Control,
	components: [
		{kind: Button, content: 'Select and Hold Me', mixins: [h]},
		{tag: 'ul', components: [
			{tag: 'li', name: 'd', allowHtml: true, idleContent: '<i>waiting for hold events...</i>'},
			{tag: 'li', name: 'd2', allowHtml: true, idleContent: '<i>waiting for pulse events...</i>'},
			{tag: 'li', name: 'd3', allowHtml: true, idleContent: '<i>waiting for other events...</i>'}
		]}
	],
	setConfigSpotlight: function(sender, event) {
		if (event.keyCode === 13 && !Spotlight.Accelerator.isAccelerating()) {
			event.configureHoldPulse({
				frequency: 200, resume: true, endHold: 'onLeave',
				events: [
					{name: 'hold', time: 200},
					{name: 'longpress', time: 1000},
					{name: 'reallylongpress', time: 2000}
				]
			});
		}
	},
	report: function(actor, action, display) {
		this.$[display].setContent(actor.content + ': ' + action);
		this.resetSoon(display);
	},
	resetSoon: function(display) {
		this.startJob('reset_' + display, function() {
			this.reset(display);
		}, 2000);
	},
	tapped: function(sender, event) {
		this.report(sender, 'tapped', 'd3');
	},
	pulse: function(sender, event) {
		this.report(sender, 'pulsing (' + event.holdTime + ')', 'd2');
	},
	held: function(sender, event) {
		this.report(sender, event.type, 'd');
	},
	released: function(sender, event) {
		this.report(sender, 'released', 'd');
	}
});