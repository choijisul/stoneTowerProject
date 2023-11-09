/* 일반함수 */
const label = document.querySelector('.label');
const options = document.querySelectorAll('.optionItem');
// 클릭한 옵션의 텍스트를 라벨 안에 넣음
const handleSelect = function(item) {
  label.innerHTML = item.textContent;
  label.parentNode.classList.remove('active');
}
// 옵션 클릭시 클릭한 옵션을 넘김
options.forEach(function(option){
  option.addEventListener('click', function(){handleSelect(option)})
})
// 라벨을 클릭시 옵션 목록이 열림/닫힘
label.addEventListener('click', function(){
  if(label.parentNode.classList.contains('active')) {
    label.parentNode.classList.remove('active');
  } else {
    label.parentNode.classList.add('active');
  }
});




// 버튼 동작
function changeBackground(button) {
  var buttons = document.querySelectorAll(".background_button");
  buttons.forEach(function(btn) {
      btn.classList.remove("active");
      // btn.querySelector(".newImage").style.display = "none"; // 모든 새 이미지를 숨깁니다.
  });
  button.classList.add("active");
  // button.querySelector(".newImage").style.display = "block"; // 클릭한 버튼에 있는 새 이미지를 표시합니다.
}
