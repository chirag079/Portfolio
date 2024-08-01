document.getElementById('skills').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' });
});


document.querySelector('.hire').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});


document.querySelector('.contact').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});


