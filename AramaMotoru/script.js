document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById('backgroundMusic');
    var toggleButton = document.getElementById('toggleButton');
    var statusLabel = document.getElementById('statusLabel');

    toggleButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            statusLabel.textContent = 'Müzik Çalıyor';
            toggleButton.textContent = 'Duraklat';
        } else {
            audio.pause();
            statusLabel.textContent = 'Müzik Durdu';
            toggleButton.textContent = 'Başlat';
        }
    });

    var feelingLuckyButton = document.getElementById('feelingLuckyButton');
    if (feelingLuckyButton) {
        feelingLuckyButton.addEventListener('click', feelingLucky);
    }
});

function searchGoogle() {
    var query = document.getElementById("searchQuery").value;
    var googleSearchUrl = "https://www.google.com/search?q=" + encodeURIComponent(query);
    window.location.href = googleSearchUrl;
}

function feelingLucky() {
    var script = document.createElement('script');
    script.src = 'Lucky.js';
    document.head.appendChild(script);
}
