$(function() {
    $(".nav-link").hover(
        function() {
            $(this).addClass("navExp");
        }, 
        function() {
            $(this).removeClass("navExp");
        }
    );
});

$(function() {
    $(".hire").hover(
        function() {
            $(this).addClass("hireHover");
        }, 
        function() {
            $(this).removeClass("hireHover");
        }
    );
});

$(function() {
    $(".btn").hover(
        function() {
            $(this).animate({marginTop: '-14px'}, 200);
        }, 
        function() {
            $(this).animate({marginTop: '0px'}, 200);
        }
    );
});

$(function() {
    $(".Works-item5,.Works-item6, .Works-item7, .Works-item8,.Works-item9, .Works-item10").hover(
        function() {
            $(this).animate({marginTop: '-14px'}, 200);
        }, 
        function() {
            $(this).animate({marginTop: '0px'}, 200);
        }
    );
});

$(function() {
    $(".Works-item5,.Works-item6, .Works-item7, .Works-item8,.Works-item9, .Works-item10").hover(
        function() {
            $(this).addClass("box-shadow");
        }, 
        function() {
            $(this).removeClass("box-shadow");
        }
    );
});


$("#skills").click(function() {
    $('html, body').animate({
        scrollTop: $(".skills").offset().top
    }, 100);
});

$("#works").click(function() {
    $('html, body').animate({
        scrollTop: $(".Works").offset().top
    }, 100);
});
$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $(".About").offset().top
    }, 100);
});
$("#skills").click(function() {
    $('html, body').animate({
        scrollTop: $(".Tools-container").offset().top
    }, 100);
});



$(function() {
    $(".img1").hover(
        function() {
            $(this).addClass("image-styling");
        }, 
        function() {
            $(this).removeClass("image-styling");
        }
    );
});


document.getElementById('contact').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.contact-section').scrollIntoView({ behavior: 'smooth' });
});


document.getElementById('skills').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.Tools-container').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact-btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.contact-section').scrollIntoView({ behavior: 'smooth' });
});


function downloadResume() {
    const link = document.createElement('a');
    link.href = '/Users/chirag/Desktop/WEB DEV PROJECT/Capstone Project/assets/Resume.pdf'; // Update with the actual path to the document
    link.download = 'Resume.pdf'; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.getElementById('about').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.tools-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('skills').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.projects-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('works').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.works-section').scrollIntoView({ behavior: 'smooth' });
});



document.getElementById('skills').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.work').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.contact-section').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.hire').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

