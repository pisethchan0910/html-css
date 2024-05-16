document.getElementById("nav").innerHTML = `
<section class="nav">
    <ul class="nav-menu">
      <li class="nav-item">
        <a href="#">기본정보 관리</a>
      </li>
      <li class="nav-item">
        <a href="#">투자유형 관리</a>
      </li>
      <li class="nav-item">
        <a href="#">입출금내역 조회</a>
      </li>
      <li class="nav-item">
        <a href="#">영업내역 조회</a>
      </li>
      <li class="nav-item">
        <a href="#">투자내역 조회</a>
      </li>
      <li class="nav-item">
        <a href="#">채권내역 조회</a>
      </li>
      <li class="nav-item">
        <a href="#">SMS 관리</a>
      </li>
      <li class="nav-item">
        <a href="#">상담내역 관리</a>
      </li>
      <li class="nav-item">
        <a href="#">1:1문의내역 조회</a>
      </li>
    </ul>
</section>
`;

window.onload = function () {
  var navItems = document.querySelectorAll(".nav-item a");

  for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function (event) {
      event.preventDefault();

      for (var j = 0; j < navItems.length; j++) {
        navItems[j].classList.remove("active");
      }

      this.classList.add("active");
    });
  }
};
