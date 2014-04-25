var app = app || {};

// Create Bronies Collection view

app.BroniesView = Backbone.View.extend({

    el: '#bronies',

    initialize: function( initialBronies ) {
        this.collection = new app.Bronies( initialBronies ),
        this.render();

        this.listenTo( this.collection, 'add', this.renderBrony);
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
    },

    events: {
        'click #add' : 'addBrony'
    },

    addBrony: function( e ) {
        e.preventDefault();

        var formData = {};

        $( '#addBrony div' ).children(' .formdata ').each( function( i, el ) {
            if( $(el).val() != '' ) {
                formData[el.id] = $(el).val();
            }
        });

        this.collection.add( new app.Brony( formData));
    }

});