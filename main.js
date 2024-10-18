// Mock data for mentor availability
const availability = {
    "Rajesh Kumar": ["10:00 AM", "11:00 AM", "3:00 PM", "4:00 PM"]
};


let bookings = JSON.parse(localStorage.getItem('bookings')) || {};

function showAvailability(mentor) {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = ''; 

    const slots = availability[mentor];
    slots.forEach(slot => {
        const slotDiv = document.createElement('div');
        slotDiv.classList.add('slot');

        slotDiv.classList.add('available');
        slotDiv.textContent = `${slot} - Available`;
        slotDiv.onclick = () => openConfirmationModal(slotDiv, mentor, slot);
        
        calendar.appendChild(slotDiv);
    });
}

