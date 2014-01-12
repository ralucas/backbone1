var Router = Backbone.Router.extend({
	routes : {
		"" : "home"
	}
});

var router = new Router();

router.on('route:home', function(){
    var imageListView = new ImageListView();
	imageListView.render();
});

Backbone.history.start();