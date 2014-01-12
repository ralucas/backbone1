var ImageUploader = Backbone.View.extend({

    el: '.image-uploader',

    model: imageModel,

    events: {
        'change .fileInput': 'getFile'
    },

    getFile: function() {
        console.log('hi1');

        // var reader = new FileReader(),
        //     _this = this,
        //     $inputFile = e.target.files[0];

        // console.log(this.model);

        // reader.onload = (function(file) {
        //     console.log('hi');
        //     _this.model = {
        //         title: file.name,
        //         fileName: file.name,
        //         type: file.type,
        //         size: file.size
        //     };
            
        //     _this.model.save();

        // })($inputFile);

        // reader.readAsDataURL($inputFile);
    }
});