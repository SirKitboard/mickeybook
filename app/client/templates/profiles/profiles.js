/*****************************************************************************/
/* Profiles: Event Handlers */
/*****************************************************************************/
Template.Profiles.events({
});

Template.Timeline.events({
	'submit #post_form': function(event) {
		var messageInput = document.getElementById('post_input');
		var message = messageInput.value;
		Posts.insert({
			postedBy: Meteor.userId(),
			message: message,
			datePosted: new Date()
		});
		messageInput.value = "";
		return false;
	}
});

/*****************************************************************************/
/* Profiles: Helpers */
/*****************************************************************************/
Template.Profiles.helpers({
	template: function() {
		var template = Session.get('selectedTab');
		if (!template) {
			return "Timeline";
		} else {
			return template;
		}
	}
});

Template.Timeline.helpers({
	posts: function() {
		return Posts.find();
	},
	username: function(id) {
		var user = Meteor.users.findOne({_id: id});
		return user.profile.firstName + " " + user.profile.lastName;
	}
});
/*****************************************************************************/
/* Profiles: Lifecycle Hooks */
/*****************************************************************************/
Template.Profiles.created = function () {
};

Template.Profiles.rendered = function () {
	$('#tabs').tabs();
};

Template.Profiles.destroyed = function () {
};
