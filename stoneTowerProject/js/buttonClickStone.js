// 정보 불러오기
var button = document.getElementById('click');
var storedSelectedValue = localStorage.getItem("selectedValue");
var period = storedSelectedValue;
var count = 0;

// 이미지 위치 정보
var imgWidth = 25.0;
var imgHeight = 'auto';
var imgLeft = 21;
var imgTop = 570;

// 이미지 URL
var imageUrls = ['./img/stone1.png', './img/stone2.png', './img/stone3.png'];

// 버튼 리스너
button.addEventListener('click', function () {
    if (count < period) {
        // 이미지 랜덤
        var imageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        // 이미지 생성
        var img = document.createElement('img');
        img.src = imageUrl;

        // 이미지 너비가 0보다 클 때만 이미지 너비 조절
        if (imgWidth > 0) {
            if (imgWidth <= 8) {
                imgWidth -= 1.5;
                imgLeft += 1;
                imgTop -= 30;
            } else {
                imgWidth -= 1.5;
                imgLeft += 1;
                imgTop -= 40;
            }
        }

        img.style.width = imgWidth + '%';
        img.style.height = imgHeight;

        img.style.position = 'absolute';
        img.style.left = imgLeft + "%";
        img.style.top = imgTop + "px";

        // 문서에 추가
        document.body.appendChild(img);
        count++;

        if(count == period ){
            setTimeout(function() {
                alert("목표를 달성했습니다!!");
            }, 1500);  
        }
    }
});