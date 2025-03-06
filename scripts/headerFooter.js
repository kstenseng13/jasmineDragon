$.get("../components/navbar.html", function (data) {
    $("#navbar").replaceWith(data);
});
$.get("../components/footer.html", function (data) {
    $("#footer").replaceWith(data);
});

// Hide the menu if a click is detected outside of it
document.addEventListener('click', function(event) {
    var menuToggle = document.getElementById('toggleMenu');
    var menu = document.getElementById('mobileMenu');

    if (event.target === menuToggle || menuToggle.contains(event.target)) {
        if (menu.classList.contains('block')) {
            menu.classList.add('hidden');
            menu.classList.remove('block');
            menuToggle.setAttribute('aria-expanded', 'false');
        } else {
            menu.classList.remove('hidden');
            menu.classList.add('block');
            menuToggle.setAttribute('aria-expanded', 'true');
        }
    } else if (menu.classList.contains('block')) {
        menu.classList.add('hidden');
        menu.classList.remove('block');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});

