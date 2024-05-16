document.getElementById(
  "registerPopup"
).innerHTML = `<div id="registerModal" class="modal">
<div class="modal-content">
    <div class="modal-header">
        <span class="close">&times;</span>
        <h2>승인거부 사유 입력</h2>
    </div>
    <div class="modal-middle">
        <table class="modal-table">
            <tr>
                <td class="left-col">회원번호</td>
                <td class="right-col small-text">abc111, abc222</td>
            </tr>
            <tr>
                <td class="left-col">회원명/법인명</td>
                <td class="right-col small-text">김길동, ㈜가나다라투자</td>
            </tr>
            <tr>
                <td class="left-col">
                    <div class="dot-container">
                        승인거부 사유
                    </div>
                </td>
                <td class="right-col">
                    <input type="checkbox" id="option1" name="option1" value="Option1">
                    <label class="small-text" for="option1">서류 식별 불가</label><br>

                    <input type="checkbox" id="option2" name="option2" value="Option2">
                    <label class="small-text" for="option2">필수 서류 누락</label><br>

                    <input type="checkbox" id="option3" name="option3" value="Option3">
                    <label class="small-text" for="option3">서류의 내용이 등록된 회원정보와 다름</label><br>

                    <input type="checkbox" id="option4" name="option4" value="Option4">
                    <label class="small-text" for="option4">서류에 누락된 내용이 있음 (필수정보, 회사직인, 본인날인, 본인서명 등)</label><br>

                    <input type="checkbox" id="option4" name="option4" value="Option4">
                    <label class="small-text" for="option4">서류의 유효기간이 초과됨</label><br>

                    <input type="checkbox" id="option5" name="option5" value="Option5"
                        onclick="enableTextarea()">
                    <label class="small-text" for="option5">직접 입력</label><br>
                    <textarea id="textarea1" placeholder="사유 입력" disabled></textarea>
                </td>
            </tr>
        </table>
    </div>
    <div class="modal-action">
        <hr class="divider-wrap">
        </hr>
        <div class="modal-footer">
            <button id="confirmation" class="modal-btn primary">저장</button>
            <button class="modal-btn secondary">취소</button>
        </div>
    </div>
</div>
</div>`;

var modal = document.getElementById("registerModal");
var btn = document.getElementById("register");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  console.log("click");
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function enableTextarea() {
  var checkbox = document.getElementById("option5");
  var textarea = document.getElementById("textarea1");

  if (checkbox.checked) {
    textarea.disabled = false;
  } else {
    textarea.disabled = true;
  }
}
