Meteor.startup(function() {
  Hooks.init({ updateFocus: settings.updateFocus });
});