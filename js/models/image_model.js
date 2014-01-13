//picture model
var ImageModel = Backbone.Model.extend({
	defaults: {
		imageId: _.uniqueId('image'),
		title: 'new',
		uploaded: false
	},
	initialize : function(){
		console.log('hello images');
		this.on('change', function(){
			console.log('Changes have been made');
		});
	}

});

var imageModel = new ImageModel({
	time: new Date()
	});