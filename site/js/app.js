var app = app || {};

$(function() {
    var bronies = [{
        name: "Derek",
        favPony: "Twilight Sparkle",
        favQuote: "Kingtak is AWWWWESOME!",
        avatar: "img/twilight_sparkle.png"
    }];

    new app.BroniesView(bronies);
});