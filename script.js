document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a, .btn');

    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        const targetId = event.currentTarget.getAttribute('href');

        // Check if the link is internal (starts with "#")
        if (targetId.startsWith('#')) {
            event.preventDefault();

            const targetPosition = document.querySelector(targetId).offsetTop;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 100;
            let start = null;

            window.requestAnimationFrame(step);

            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
                if (progress < duration) window.requestAnimationFrame(step);
            }

            function easeInOutCubic(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t * t + b;
                t -= 2;
                return c / 2 * (t * t * t + 2) + b;
            }
        } else {
            // Allow default action for external links
            event.preventDefault();
            window.open(targetId, '_blank');
        }
    }
});
