// 모든 .optionItem 요소를 선택합니다.
var optionItems = document.querySelectorAll(".optionItem");

// 각 .optionItem을 클릭할 때 실행될 함수를 정의합니다.
function handleOptionItemClick(event) {
    // 클릭한 .optionItem의 텍스트를 가져옵니다.
    var selectedValue = event.target.textContent;

    // 선택한 값을 로컬 스토리지에 저장합니다.
    localStorage.setItem("selectedValue", selectedValue);
    console.log(selectedValue);
}

// 각 .optionItem에 클릭 이벤트 리스너를 추가합니다.
optionItems.forEach(function (item) {
    item.addEventListener("click", handleOptionItemClick);
});