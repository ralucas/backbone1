var ImageListView = Backbone.View.extend({

	el: '.image-thumbs',

	model: imageModel,

	template: _.template( $('#thumbs-template').html() ),

	render: function (){
		this.$el.html( this.template( this.model.toJSON() ) );
	}
});