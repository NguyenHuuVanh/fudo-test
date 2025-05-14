// script.js
// Thêm hiệu ứng hoặc xử lý sự kiện nếu cần
document.querySelectorAll(".product-card button").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Đã thêm vào giỏ hàng!");
  });
});
document.querySelectorAll(".voucher-card button").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Đã lấy mã voucher!");
  });
});
