var app = app || {};

// Brony Model Class
app.Brony = Backbone.Model.extend({

    //defaults
    defaults: {
        name: "Brony",
        favPony: "Twilight Sparkle",
        favQuote: "Friendship is Magic",
        avatar: "img/twilight_sparkle.png"
    }
});