$(document).ready(function () {
    getProducts('signature');
    getProducts('seasonal');
    getProducts('milkTea');
    getProducts('fruitTea');
    getProducts('snacks');
});

function getProducts(name){
        // Fetch the products data from the JSON file
        $.getJSON(('../data/' + name + '.json'), function (data) {
            $.get('../components/productCardTemplate.html', function (templates) {
                var template = $(templates).filter('#productCardTemplate').html();
                var rendered = Mustache.render(template, { products: data });
                $('#' + name + 'Section').append(rendered);
            });
    
        }).fail(function () {
            console.error('Error loading the ' + name + '.json data.');
        });
}

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.section');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Remove 'active' class from all tabs
            tabs.forEach(btn => {
                btn.className = btn.className.replace(' active', '');
            });

            // Hide all sections
            sections.forEach(section => {
                if (!section.className.includes('hidden')) {
                    section.className += ' hidden';
                }
            });

            // Add 'active' class to the clicked tab
            this.className += ' active';

            // Show the corresponding section
            const target = document.querySelector(this.getAttribute('data-target'));
            if (target) {
                target.className = target.className.replace(' hidden', '');

                // Scroll to the target section
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Set the default active tab and section
    tabs[0].click(); // Click the first tab by default
});