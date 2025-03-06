$(document).ready(function () {
    var message = { text: "Ready For Delectable Tea?", buttonText: "Order Now", page0:"products", buttonText1: "Login", page1 : "login"};

    $.get('../components/callToActionTemplate.html', function (templates) {
        var template = $(templates).filter('#callToAction').html();
        var rendered = Mustache.render(template, { message: message });

        $('#callToAction').append(rendered);
    }).fail(function () {
        console.error('Error loading the template.');
    });
});
