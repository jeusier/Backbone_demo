var app = app || {};

// Create Brony Model View
app.BronyView = Backbone.View.extend({

    tagName: "div",

    className: "bronyContainer",

    template: _.template($( "#bronyTemplate" ).html()),

    render: function() {

        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

});