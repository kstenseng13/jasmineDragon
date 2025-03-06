$(document).ready(function () {
    // Fetch the products data from the JSON file
    $.getJSON('../data/featured.json', function (data) {

        // Fetch the Mustache template from the external HTML file
        $.get('../components/productCardTemplate.html', function (templates) {

            // Extract the specific template by its ID
            var template = $(templates).filter('#productCardTemplate').html();

            // Render the Mustache template with the fetched products data
            var rendered = Mustache.render(template, { products: data });

            // Append the rendered HTML to the designated section in your main HTML
            $('#featuredProductsSection').append(rendered);
        });

    }).fail(function () {
        console.error('Error loading the featured.json data.');
    });
});