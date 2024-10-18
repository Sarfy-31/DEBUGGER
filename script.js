
const mentorCards = document.querySelectorAll('.mentor-card');
const bookButtons = document.querySelectorAll('.mentor-card-back button');
const filterCheckboxes = document.querySelectorAll('.filter input[type="checkbox"]');


bookButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const mentorCard = mentorCards[index];
        const mentorName = mentorCard.getAttribute('data-name');
        const mentorExpertise = mentorCard.getAttribute('data-expertise');
        const mentorPhoto = mentorCard.querySelector('img').src;

       
        localStorage.setItem('mentorName', mentorName);
        localStorage.setItem('mentorExpertise', mentorExpertise);
        localStorage.setItem('mentorPhoto', mentorPhoto);

       
        window.location.href = 'booking.html';
    });
});

