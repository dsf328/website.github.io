// กำหนดให้ปุ่มเคลื่อนที่เมื่อพยายามคลิก
const button = document.getElementById('annoyingButton');
const surpriseMessage = document.getElementById('surpriseMessage');
const surpriseImage = document.getElementById('surpriseImage');

button.addEventListener('mouseover', () => {
    // สุ่มตำแหน่งใหม่สำหรับปุ่ม
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});

button.addEventListener('click', () => {
    // เมื่อคลิกปุ่มได้สำเร็จ
    button.style.display = 'none'; // ซ่อนปุ่ม
    surpriseMessage.classList.remove('hidden'); // แสดงข้อความ
    surpriseImage.classList.remove('hidden'); // แสดงรูปภาพ
});