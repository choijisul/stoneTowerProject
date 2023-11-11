// 불러옴
var periodText = document.querySelector("#period");
var countPeriodText = document.querySelector("#count_period");
var button = document.querySelector('.build_today_stone');

// 다른 JavaScript 파일에서 로컬 스토리지에서 "selectedValue" 값을 가져옵니다.
var storedSelectedValue = localStorage.getItem("selectedValue");
periodText.textContent = periodText.textContent.replace(/\(몇\)/, storedSelectedValue);

// 버튼 클릭 이벤트를 처리하는 함수를 작성합니다.
var count = 0;
function incrementCount() {
    if (count < storedSelectedValue) {
        count++; // count 변수를 1 증가시킵니다.
        console.log(count);
        countPeriodText.textContent = "쌓은 돌맹이  :  " + count + " 일";

        var finishBuildText = document.querySelector('.finish_build');
        finishBuildText.style.visibility = 'visible';
    }
}
// 버튼에 클릭 이벤트 리스너를 추가합니다.
button.addEventListener('click', incrementCount);


// 돌탑 무너뜨리기
var collapseButton = document.querySelector('.collapse_build');

collapseButton.addEventListener('click', function () {
    var confirmation = confirm('지금까지 쌓은 목표가 무너집니다. 돌탑을 무너뜨리겠습니까?');

    if (confirmation) {
        alert('돌탑이 무너졌습니다. (홈 화면으로 이동합니다.)');
        window.location.href = 'index.html';
    } else {
        alert('잘 생각하셨습니다.');
    }
});
