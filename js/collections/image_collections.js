var ImageCollection = Backbone.Collection.extend({
    model: ImageModel,
    localStorage: new Backbone.LocalStorage('ImageCollection'),
    url: '/images'
});