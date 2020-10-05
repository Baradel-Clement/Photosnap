var btn = document.querySelector('.month-story-button')
var span_background = document.querySelector('#span_background');

btn.addEventListener('mouseenter', function(e) {
    e.preventDefault();

    span_background.classList.toggle('active_background');
    span_background.classList.toggle('background-radial');
})

btn.addEventListener('mouseout', function(event) {
    event.preventDefault();
    
    span_background.classList.toggle('active_background');
    span_background.classList.toggle('background-radial');
})