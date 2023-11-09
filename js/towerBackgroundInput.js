var imageElement = document.getElementById("imageElement");

// 앞 js코드에서 변수 가져옴
var setdBackgroundId = localStorage.getItem("backgroundId");

// .jpg 앞 부분의 이름을 설정할 변수
var imageName = setdBackgroundId; // 예시로 "background_sky2" 설정

// 새 이미지 URL 생성
var newImageUrl = "./img/" + imageName + ".png";

// 이미지 엘리먼트의 src 속성 변경
imageElement.src = newImageUrl;
console.log(newImageUrl);