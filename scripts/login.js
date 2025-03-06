$(document).ready(function () {
    $('#login').on('click', function () {
        // Prevent the default form submission since we're not handling that right now.
        event.preventDefault();

        // Redirect to index for now
        window.location.href = '../pages/index.html';
    });
});

