//picture model
var Picture = Backbone.Model.extend({
	initialize : function(){
		console.log('hello picture');
	},
	urlRoot : "/pictures",
	imageId : _.uniqueId('image'),
	defaults : {
		name : "",
		time : new Date()
	}
});

var picture = new Picture();

console.log(picture.imageId);

var ImageView = new Backbone.View.extend({

});





var Router = Backbone.Router.extend({
	routes : {
		"" : "home"
	}
});