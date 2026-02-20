// Thiết lập hiệu ứng ánh sáng bám theo chuột cho các thẻ Glassmorphism
const cards = document.querySelectorAll('.glass-card');

cards.forEach(card => {
    card.addEventListener('mousemove', e => {
        // Lấy tọa độ thẻ và tọa độ chuột
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Vẽ một quầng sáng radial-gradient tại đúng vị trí chuột
        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(102, 252, 241, 0.15), rgba(255, 255, 255, 0.03) 40%)`;
    });

    card.addEventListener('mouseleave', () => {
        // Trả lại nền kính mờ mặc định ban đầu khi chuột rời đi
        card.style.background = 'rgba(255, 255, 255, 0.03)';
    });
});