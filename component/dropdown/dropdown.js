function createDropdownOptions(dropdownId, options) {
  var dropdown = document.getElementById(dropdownId);
  var optionsContainer = dropdown.querySelector(".select-dropdown");
  var selectedValue = dropdown.querySelector(".selected-value");

  for (var i = 0; i < options.length; i++) {
    var opt = options[i];
    var li = document.createElement("li");
    li.textContent = opt.label;
    li.className = "option";
    li.setAttribute("role", "option");
    li.addEventListener("click", function (e) {
      if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
        selectedValue.textContent = this.textContent;
        dropdown.classList.remove("active");
      }
    });
    li.addEventListener("keyup", function (e) {
      if (e.key === "Enter") {
        selectedValue.textContent = this.textContent;
        dropdown.classList.remove("active");
      }
    });
    optionsContainer.appendChild(li);
  }

  dropdown
    .querySelector(".select-button")
    .addEventListener("click", function () {
      dropdown.classList.toggle("active");
      this.setAttribute(
        "aria-expanded",
        this.getAttribute("aria-expanded") === "true" ? "false" : "true"
      );
    });
}

createDropdownOptions("dropdown1", [
  { label: "승인여부 전체" },
  { label: "승인대기" },
  { label: "승인완료" },
  { label: "승인거부" },
]);

createDropdownOptions("dropdown2", [
  { label: "신청일시순" },
  { label: "승인일시순" }
]);

createDropdownOptions("dropdown3", [
  { label: "LinkedIn" },
  { label: "Twitter" },
  { label: "Reddit" },
]);

createDropdownOptions("dropdown4", [
  { label: "승인상태 변경" },
  { label: "승인완료" },
  { label: "승인거부" },
]);
