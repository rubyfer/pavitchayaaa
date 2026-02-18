// ===== แสดง Popup รายละเอียด =====
function showDetail(text) {
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup-text").innerText = text;
}

// ===== ปิด Popup =====
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// ===== Animation ตอนเลื่อนหน้า =====
const fadeElements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    fadeElements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            el.classList.add('show');
        }
    });
});
