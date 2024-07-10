document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a, .btn');

    for (const link of links) {
        link.addEventListener('click', (event) => {
            const targetId = event.currentTarget.getAttribute('href');

            if (targetId.startsWith('#')) {
                event.preventDefault();
                smoothScroll(targetId);
            }
        });
    }

    function smoothScroll(targetId) {
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
    }

    // Feedback section
    const feedbacks = [
        { text: "This mentorship program is amazing! It really helped me improve my scores.", name: "Rahul Verma" },
        { text: "I highly recommend this program to anyone preparing for JEE. The guidance is top-notch.", name: "Utsav Choudhary" },
        { text: "The interactive sessions and problem sheets were incredibly helpful for my preparation.", name: "Satyam Nagar" },
        { text: "Thanks to the mentorship program, I was able to understand difficult concepts much better.", name: "Abhishek Sharma" },
        { text: "The personalized support and advice really made a difference in my studies.", name: "Shivani" },
        { text: "nice", name: "Avhi Chatterjee" }
    ];

    let currentFeedbackIndex = 0;

    function updateFeedback() {
        const feedbackText = document.getElementById('feedback-text');
        const studentName = document.getElementById('student-name');

        feedbackText.textContent = feedbacks[currentFeedbackIndex].text;
        studentName.textContent = `- ${feedbacks[currentFeedbackIndex].name}`;

        currentFeedbackIndex = (currentFeedbackIndex + 1) % feedbacks.length;
    }

    setInterval(updateFeedback, 5000);

    // Initialize the first feedback
    updateFeedback();
});
