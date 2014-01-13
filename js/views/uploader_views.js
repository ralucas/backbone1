var ImageUploader = Backbone.View.extend({

    el: '.image-uploader',

    model: imageModel,

    events: {
        'change .fileInput': 'getFile',
        'submit .new-image-form': 'uploadFile'
    },

    getFile: function(e) {
        var reader = new FileReader(),
            _this = this,
            $inputFile = e.target.files[0];

        reader.onload = (function(file) {
            _this.model = new ImageModel({
                title: file.name,
                fileName: file.name,
                type: file.type,
                size: file.size
            });
            
            _this.model.save();

        })($inputFile);

        reader.readAsDataURL($inputFile);
    },

    uploadFile: function(e) {
        e.preventDefault();
        if (!this.model.fileName) {
            alert('Please load a file');
        } else {
            console.log(this.model);
            this.model.save({uploaded: true});
        }
    }
});

var imageUploader = new ImageUploader();