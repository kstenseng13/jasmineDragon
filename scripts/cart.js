$(document).ready(function () {
    // Fetch the products data from the JSON file
    $.getJSON('../data/featured.json', function (data) {

        // Fetch the Mustache template from the external HTML file
        $.get('../components/orderItemTemplate.html', function (templates) {

            // Extract the specific template by its ID
            var template = $(templates).filter('#orderItemTemplate').html();

            // Render the Mustache template with the fetched products data
            var rendered = Mustache.render(template, { orderItem: data });

            // Append the rendered HTML to the designated section in your main HTML
            $('#orderSummaryItemsSection').append(rendered);
        });

        var message = { text: "Join Dragon Rewards For Extra Savings", buttonText: "Join Now", page0:"register", buttonText1: "Login", page1 : "login"}
        $.get('../components/callToActionTemplate.html', function (templates) {

            var template = $(templates).filter('#callToAction').html();

            var rendered = Mustache.render(template, { message: message });

            $('#rewardsSection').append(rendered);
        });

    }).fail(function () {
        console.error('Error loading the featured.json data.');
    });
});