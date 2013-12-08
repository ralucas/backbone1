//picture model
var ImageModel = Backbone.Model.extend({
	initialize : function(){
		console.log('hello images');
	},
	urlRoot : "/images",
	imageId : _.uniqueId('image'),
	defaults : {
		name : "",
		time : new Date()
	}
});

var imageModel = new ImageModel();

console.log(imageModel.imageId);

//views
var ImageList = Backbone.View.extend({
	el: '.image-thumbs',
	render: function (){
		this.$el.html('Content show here');
	}
});

var imageList = new ImageList();

//routes
var Router = Backbone.Router.extend({
	routes : {
		"" : "home"
	}
});

var router = new Router();

router.on('route:home', function(){
	imageList.render();
});

Backbone.history.start();