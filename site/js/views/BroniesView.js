var app = app || {};

// Create Bronies Collection view

app.BroniesView = Backbone.View.extend({

    el: '#bronies',

    initialize: function( initialBronies ) {
        this.collection = new app.Bronies( initialBronies ),
        this.render();
    },

    render: function() {
        this.collection.each(function( item ) {
            this.renderBrony( item );
        }, this);
    },

    renderBrony: function( item ) {
        var bronyView = new app.BronyView({
            model: item
        });

        this.$el.append( bronyView.render().el);
    }

});