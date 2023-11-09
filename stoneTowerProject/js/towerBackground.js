// HTML 버튼 요소를 선택합니다.
var buttons = document.querySelectorAll(".background_button");
var numInfo;
var setBackgroundId;
// 버튼을 순회하며 클릭 이벤트를 추가합니다.
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        // 클릭한 버튼의 ID를 가져와 변수에 저장
        numInfo = button.id;

        // 클릭한 버튼의 ID에 따라 setBackgroundId 값을 설정
        if (numInfo === "1") {
            setBackgroundId = "background_sky1";
        } else if (numInfo === "2") {
            setBackgroundId = "background_sky2";
        } else if (numInfo === "3") {
            setBackgroundId = "background_sky3";
        } else if (numInfo === "4"){
            setBackgroundId = "background_sky4";
        } else if (numInfo === "5"){
            setBackgroundId = "background_sky5";
        } //하늘
        if (numInfo === "6") {
            setBackgroundId = "background_sea1";
        } else if (numInfo === "7") {
            setBackgroundId = "background_sea2";
        } else if (numInfo === "8") {
            setBackgroundId = "background_sea3";
        } else if (numInfo === "9"){
            setBackgroundId = "background_sea4";
        } else if (numInfo === "10"){
            setBackgroundId = "background_sea5";
        } //바다
        if (numInfo === "11") {
            setBackgroundId = "background_flower1";
        } else if (numInfo === "12") {
            setBackgroundId = "background_flower2";
        } else if (numInfo === "13") {
            setBackgroundId = "background_flower3";
        } else if (numInfo === "14"){
            setBackgroundId = "background_flower4";
        } else if (numInfo === "15"){
            setBackgroundId = "background_flower5";
        } //꽃밭
        if (numInfo === "16") {
            setBackgroundId = "background_wall1";
        } else if (numInfo === "17") {
            setBackgroundId = "background_wall2";
        } else if (numInfo === "18") {
            setBackgroundId = "background_wall3";
        } else if (numInfo === "19"){
            setBackgroundId = "background_wall4";
        } else if (numInfo === "20"){
            setBackgroundId = "background_wall5";
        } //담벼락

        localStorage.setItem("backgroundId", setBackgroundId);

        // 테스트
        console.log("클릭한 버튼의 ID:", numInfo);
        console.log("주소 변경:", setBackgroundId);
    });
});