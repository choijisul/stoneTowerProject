// 제목 불러오기
var titleElement = document.getElementById("title2");

// 1번째 코드에서 localStorage에서 "title" 키의 값을 가져와서 titleElement의 textContent로 설정
var storedTitle = localStorage.getItem("title");
if (storedTitle) {
    titleElement.textContent = storedTitle; 
} else {
    titleElement.textContent = "입력되지 않음"; // "title" 키에 저장된 값이 없을 때 기본값 설정
}

// 설명 불러오기
var explanationInputElement = document.getElementById("explanation2");

var storedExplanationInput = localStorage.getItem("explanation");
if (storedExplanationInput) {
    explanationInputElement.textContent = storedExplanationInput;  
} else {
    explanationInputElement.textContent = "입력되지 않음"; // "title" 키에 저장된 값이 없을 때 기본값 설정
}
