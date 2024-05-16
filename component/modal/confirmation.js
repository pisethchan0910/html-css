document.getElementById(
  "confirmPopup"
).innerHTML = `<div class="confirmation-overlay"></div>
<div id="confirmationModal" class="confirmation">
    <div class="confirmation-content">
        <div class="confirmation-header">
            <div class="top">
                <img src="assets/icon/exclaim.svg" class="icon" alt="Icon">
                <span class="close-confirmation">&times;</span>
            </div>
            <div class="bottom">
                <span class="text">선택된 2명의 승인상태를 변경하시겠습니까?</span>
            </div>
        </div>
        <div class="confirmation-footer">
            <button class="modal-btn primary">확인</button>
            <button class="modal-btn secondary">취소</button>
        </div>
    </div>
</div>`;

var confirmationModal = document.getElementById("confirmationModal");
var confirmationBtn = document.getElementById("confirmation");
var confirmationSpan = document.getElementsByClassName("close-confirmation")[0];
var confirmationOverlay = document.querySelector(".confirmation-overlay");

confirmationBtn.onclick = function () {
  confirmationOverlay.style.display = "block";
  confirmationModal.style.display = "block";
};

confirmationSpan.onclick = function () {
  confirmationOverlay.style.display = "none";
  confirmationModal.style.display = "none";
};

window.onclick = function (event) {
  if (
    event.target == confirmationModal ||
    event.target == confirmationOverlay
  ) {
    confirmationOverlay.style.display = "none";
    confirmationModal.style.display = "none";
  }
};
