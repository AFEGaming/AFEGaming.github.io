document.addEventListener("DOMContentLoaded", function() {
    // Arama kutusuna 'enter' tuşu ile tetiklenmesini sağla
    var searchInput = document.getElementById("searchQuery");
    searchInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            searchGoogle();
        }
    });

    var feelingLuckyButton = document.getElementById('feelingLuckyButton');
    if (feelingLuckyButton) {
        feelingLuckyButton.addEventListener('click', function() {
            feelingLucky();
            feelingLuckyButton.disabled = true; // Buton devre dışı bırakılır
        });
    }
});

function searchGoogle() {
    var query = document.getElementById("searchQuery").value;
    if (query.trim() !== "") { // Eğer sorgu boş değilse
        var googleSearchUrl = "https://www.google.com/search?q=" + encodeURIComponent(query);
        window.location.href = googleSearchUrl;
    }
}

function feelingLucky() {
    var script = document.createElement('script');
    script.src = 'Lucky.js';
    document.head.appendChild(script);
}
