//제목 불러오기
var titleInput = document.getElementById("titleInput");   //입력한 값 가져옴

titleInput.addEventListener("input", function () {
    // 입력 필드의 현재 값 가져오기
    var value = titleInput.value;

    // 값을 "title" 키로 localStorage에 저장합니다.
    localStorage.setItem("title", value);
});


// 설명 불러오기
var explanationInput = document.getElementById("explanationInput");   //입력한 값 가져옴

explanationInput.addEventListener("input", function () {
    // 입력 필드의 현재 값 가져오기
    var value = explanationInput.value;

    // 값을 "title" 키로 localStorage에 저장합니다.
    localStorage.setItem("explanation", value);
});