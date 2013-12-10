//picture model
var ImageModel = Backbone.Model.extend({
	initialize : function(){
		console.log('hello images');
		this.on('change', function(){
			console.log('Changes have been made');
		});
	},
	urlRoot : "/images",
	imageId : _.uniqueId('image'),
	time : new Date(),
	title : "",
	uploaded: false
});

var imageModel = new ImageModel();

console.log(imageModel.imageId);

//views
var ImageListView = Backbone.View.extend({
	el: '.image-thumbs',
	render: function (){
		var source = $("#thumbs-template").html();
		var template = Handlebars.compile(source);
		var data = template(imageModel);
		this.$el.html(data);
	}
});

var imageListView = new ImageListView();



//routes
var Router = Backbone.Router.extend({
	routes : {
		"" : "home"
	}
});

var router = new Router();

router.on('route:home', function(){
	imageListView.render();
});

Backbone.history.start();