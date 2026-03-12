document.addEventListener('DOMContentLoaded', () => {
    const subtitle = document.getElementById('subtitle');

    // Simple animation for the subtitle to make it dynamic for digital signage
    const messages = [
        "Welcome to the display",
        "System operating normally",
        "Ready for your content",
        "Hello, World!"
    ];

    let currentIndex = 0;

    setInterval(() => {
        subtitle.style.opacity = 0;

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % messages.length;
            subtitle.textContent = messages[currentIndex];

            // Fade back in
            subtitle.style.transition = 'opacity 1s ease-in-out';
            subtitle.style.opacity = 1;
        }, 1000); // Wait for fade out

        subtitle.style.transition = 'opacity 1s ease-in-out';
    }, 5000); // Change message every 5 seconds
});