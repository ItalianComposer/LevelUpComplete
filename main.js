$(document).ready(function(){
    let currentIndex = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        const offset = -index * 100 + '%';
        $('.slider').css('transform', 'translateX(' + offset + ')');
    }

    $('#next').click(function() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    });

    $('#prev').click(function() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    });

    // Swipe functionality for mobile
    let touchStartX = null;

    $('.slider-container').on('touchstart', function(event) {
        touchStartX = event.originalEvent.touches[0].clientX;
    });

    $('.slider-container').on('touchend', function(event) {
        if (!touchStartX) return;
        const touchEndX = event.originalEvent.changedTouches[0].clientX;
        const touchDiff = touchStartX - touchEndX;
        if (touchDiff > 50) {
            $('#next').click();
        } else if (touchDiff < -50) {
            $('#prev').click();
        }
        touchStartX = null;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let minutes = 30;
    let seconds = 0;

    function updateTimer() {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timerInterval);
                return;
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }

        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
});