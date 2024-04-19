// const gio = document.querySelectorAll(".gio");
// // tạo biến gio và gán với class .gio ở html(...all áp dụng cho tất cả đối tượng có class là gio)
// const phut = document.querySelectorAll(".phut");
// const giay = document.querySelectorAll(".giay");
// // tạo một biến thời gian mới và + vào 2 giờ (đếm ngược 2h từ hiện tại)
// const targetTime = new Date();
// targetTime.setHours(targetTime.getHours() + 2);

// // cập nhật thời gian
// function updateTime() {
//   // tạo một biến date mới để thể hiện tg hiện tại
//   const currentTime = new Date();
//   // tính khoảng cách giữa thời gian đích so với hiện tại(vd 2-0=2)
//   const timeDifference = targetTime - currentTime;

//   // matchMedia.floor làm tròn xuống lấy phần nguyên
//   // lấy phần chênh chia 1h rồi làm tròn để ra số giờ
//   const hours = Math.floor(timeDifference / (1000 * 60 * 60));
//   // lấy phần thừa khi tính giờ chia cho 1 phút rồi dùng floor lấy nguyên
//   const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//   // lấy phần dư khi tính phút chia cho 1s rồi dùng floor để lấy nguyên(còn lại miili s không cần)
//   const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//   gio.forEach(
//     (element) => (element.textContent = hours.toString().padStart(2, "0"))
//   );
// // khi dùng querySelectorAll thì những thẻ có class sẽ được lấy và lưu vào như một note list
// // forEach duyệt như mảng, element là đối tượng hiện tại, element.textContent =dùng để cập nhật nội dung phần tử hiện tại
// // tostring để chuyển đổi số sang chuỗi để đưa ra màn hình với padstrat(2, "0") là 2 chữ số
//   phut.forEach(
//     (element) => (element.textContent = minutes.toString().padStart(2, "0"))
//   );
//   giay.forEach(
//     (element) => (element.textContent = seconds.toString().padStart(2, "0"))
//   );
// }
// // gọi hàm lần đầu để tạo đồng hồ đếm ngược
// updateTime();
// // gọi hàm updateTime mỗi giây (1000mili giây)
// setInterval(updateTime, 1000);

const gio = document.querySelectorAll(".gio");
const phut = document.querySelectorAll(".phut");
const giay = document.querySelectorAll(".giay");
const targetTime = new Date();
targetTime.setHours(targetTime.getHours() + 2);

function updateTime() {
  const currentTime = new Date();
  const timeDifference = targetTime - currentTime;

  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  gio.forEach(
    (element) => (element.textContent = hours.toString().padStart(2, "0"))
  );
  phut.forEach(
    (element) => (element.textContent = minutes.toString().padStart(2, "0"))
  );
  giay.forEach(
    (element) => (element.textContent = seconds.toString().padStart(2, "0"))
  );
}
updateTime();

setInterval(updateTime, 1000);
