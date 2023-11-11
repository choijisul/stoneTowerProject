// 정보 불러오기
var button = document.getElementById('click');
var storedSelectedValue = localStorage.getItem("selectedValue");
var period = storedSelectedValue;
var count = 0;

// 이미지 위치 정보
var imgWidth = 0;
var imgHeight = 'auto';
var imgLeft = 0;
var imgTop = 480;

var stoneTowerImgWidth = 5;
var stoneTowerImgHeight = 'auto';
var stoneTowerImgLeft = 20;
var stoneTowerImgTop = 600;

if (window.innerWidth <= 600) {  // 테블릿
    imgWidth = 60.0;
    imgLeft = 20;
    imgTop = 460;
    stoneTowerImgWidth = 15;
    stoneTowerImgLeft = 16;
    stoneTowerImgTop = 565;
} else if (window.innerWidth <= 1000) {
    imgWidth = 30.0;
    imgLeft = 10;
    imgTop = 490;
    stoneTowerImgWidth = 7;
    stoneTowerImgLeft = 10;
    stoneTowerImgTop = 590;
} else {
    imgWidth = 25.0;
    imgLeft = 21;
}

// 이미지 URL
var imageUrls = ['./img/stone1.png', './img/stone2.png', './img/stone3.png'];

// 버튼 리스너
button.addEventListener('click', function () {
    if (count < period) {
        // weekely 2번째 이후 주의 첫 번째면
        console.log("count : " + count);
        if (count % 7 == 0 && count > 0) {
            console.log(".");
            // 작은 돌 추가
            // 이미지
            var stonetowerImg = document.createElement('img');
            // 지금까지 js로 새로 생성한 이미지 모두 없애기
            stonetowerImg.src = './img/icon.png';
            stonetowerImg.style.width = stoneTowerImgWidth + '%';
            stonetowerImg.style.height = stoneTowerImgHeight;

            stonetowerImg.style.position = 'absolute';
            stonetowerImg.style.left = stoneTowerImgLeft + "%";
            stonetowerImg.style.top = stoneTowerImgTop + "px";

            if (window.innerWidth <= 600) {  // 테블릿
                stoneTowerImgLeft += 15;
            } else if (window.innerWidth <= 1000) {
                stoneTowerImgLeft += 7;
            } else {
                stoneTowerImgLeft += 5;
            }
            document.body.appendChild(stonetowerImg);
            // 크기, 위치 초기화
            imgTop += 210;
            if (window.innerWidth <= 600) {  // 테블릿
                imgWidth = 60.0;
                imgLeft = 20;
            } else if (window.innerWidth <= 1000) {
                imgWidth = 30.0;
                imgLeft = 14;
            } else {
                imgWidth = 25.0;
                imgLeft = 21;
            }
            var allImages = document.querySelectorAll('#stoneImg'); // 'stoneImg' id를 가진 이미지 엘리먼트들을 모두 가져옴
            allImages.forEach(function (image) {
                image.remove(); // 각 'stoneImg' id를 가진 이미지를 제거
            });


        }
        // 이미지 랜덤
        var imageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        // 이미지 생성
        var img = document.createElement('img');
        img.src = imageUrl;
        img.id = 'stoneImg'; // id 추가

        // 이미지 너비가 0보다 클 때만 이미지 너비 조절
        if (window.innerWidth <= 600) {  // 테블릿
            imgWidth -= 5;
            imgLeft += 3;
            imgTop -= 30;
        } else if (window.innerWidth <= 1000) {
            imgWidth -= 2;
            imgLeft += 1;
            imgTop -= 30;
        } else {
            imgWidth -= 2;
            imgLeft += 1;
            imgTop -= 30;
        }

        img.style.width = imgWidth + '%';
        img.style.height = imgHeight;

        img.style.position = 'absolute';
        img.style.left = imgLeft + "%";
        img.style.top = imgTop + "px";

        // 문서에 추가
        document.body.appendChild(img);
        count++;

        if (count == period) {
            setTimeout(function () {
                alert("목표를 달성했습니다!!");
            }, 1500);
        }

    }
});
