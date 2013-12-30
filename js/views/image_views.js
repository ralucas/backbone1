var ImageListView = Backbone.View.extend({

	el: '.image-thumbs',

	model: imageModel,

	template: _.template( $('#thumbs-template').html() ),

	render: function (){
		console.log(this.model.toJSON());
		console.log(this.$el);
		this.$el.html( this.template( this.model.toJSON() ) );
	}
});

var imageListView = new ImageListView();