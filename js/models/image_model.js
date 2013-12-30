//picture model
var ImageModel = Backbone.Model.extend({
	
	defaults: {
		title: "",
		time: new Date(),
		uploaded: false,
		imageId: _.uniqueId('image')
	},
	initialize : function(){
		console.log('hello images');
		this.on('change', function(){
			console.log('Changes have been made');
		});
	},
	urlRoot: "/images"
});

var imageModel = new ImageModel({title: 'first one'});