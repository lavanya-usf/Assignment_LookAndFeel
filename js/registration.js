// Handling input events for form elements
document.querySelectorAll('.form input, .form textarea').forEach(function(element) {
    element.addEventListener('keyup', handleInputEvent);
    element.addEventListener('blur', handleInputEvent);
    element.addEventListener('focus', handleInputEvent);
});

// Handling click events for tab links
document.querySelectorAll('.tab a').forEach(function(link) {
    link.addEventListener('click', handleTabClick);
});

// Function to handle input events
function handleInputEvent(event) {
    console.log('Input event fired');
    var element = event.target;
    var label = element.previousElementSibling;
    
    if (event.type === 'keyup') {
        if (element.value === '') {
            label.classList.remove('active', 'highlight');
        } else {
            label.classList.add('active', 'highlight');
        }
    } else if (event.type === 'blur') {
        if (element.value === '') {
            label.classList.remove('active', 'highlight');
        } else {
            label.classList.remove('highlight');
        }
    } else if (event.type === 'focus') {
        if (element.value === '') {
            label.classList.remove('highlight');
        } else {
            label.classList.add('highlight');
        }
    }
}

// Function to handle tab clicks
function handleTabClick(event) {
    console.log('Tab click event fired');
    event.preventDefault();

    var link = event.target;
    var tab = link.parentElement;

    tab.classList.add('active');
    Array.from(tab.parentElement.children).forEach(function(sibling) {
        if (sibling !== tab) {
            sibling.classList.remove('active');
        }
    });

    var target = document.querySelector(link.getAttribute('href'));
    console.log('Target:', target);
    document.querySelectorAll('.tab-content > div').forEach(function(content) {
        if (content !== target) {
            content.style.display = 'none';
        }
    });
    target.style.display = 'block';
}
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'index.html';
});
