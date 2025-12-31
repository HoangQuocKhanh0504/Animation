// Lấy tất cả các thẻ box
const boxes = document.querySelectorAll('.box');

// Khi trang được tải xong, thêm lớp 'show' cho các box để bắt đầu hiệu ứng
window.addEventListener('load', () => {
    boxes.forEach((box, index) => {
        setTimeout(() => {
            box.classList.add('show');
        }, index * 200); // Mỗi box sẽ có độ trễ khác nhau (200ms cho mỗi box)
    });
});
