//漢堡按鈕
const hambar = document.querySelector('.hambar');
//下拉式選單
const mobileMenu = document.querySelector('.mobileMenu');

hambar.addEventListener('click', e => {
  mobileMenu.classList.toggle('active');
});
