document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = 'THIS IS Prodigy-Hub!';
    const welcomeElement = document.getElementById('welcome-message');

    function typeMessage(message, element) {
        let index = 0;
        function type() {
            if (index < message.length) {
                element.textContent += message.charAt(index);
                index++;
                setTimeout(type, 300); // Adjust speed by changing the timeout value
            }
        }
        type();
    }

    typeMessage(welcomeMessage, welcomeElement);

    
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
        {text: "Mentorship program is so good it gives all the tips for clearing jee mains and advanced with that tips i am seeing massivly improvement in my academic and my mock test marks increasing it help us lot especially it is free and if it is paid i will buy if i knew what goods i wil get from them", name: "Ashutosh Baranwal"},
        { text: "I highly recommend this program to anyone preparing for JEE. The guidance is top-notch.", name: "Utsav Choudhary" },
        { text: "The interactive sessions and problem sheets were incredibly helpful for my preparation.", name: "Satyam Jha" },
        { text: "Thanks to the mentorship program, I was able to understand difficult concepts much better.", name: "Abhishek Sharma" },
        { text: "The personalized support and advice really made a difference in my studies.", name: "Shivani" },
        { text: "nice", name: "Avhi Chatterjee" },
        { text: "Productivity📈", name: "Debojeet"},
        {text: "sab badhiyan hai", name: "Aaditya Jha"},
        {text: "Going Really Well, won't overexpress lol", name: "Harsh Vashist"},
        {text: "Currently I can not fully utilise it but trying to do so Overall This is a booster for my jee prep and for becoming best version of myself.", name: "Sachin bansal"}
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

    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = nav.contains(event.target);
        const isClickInsideToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideMenu && !isClickInsideToggle) {
            nav.classList.remove('active');
        }
    });
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
