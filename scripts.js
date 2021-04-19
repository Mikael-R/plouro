window.onload = function () {
  const scrollUpBtn = document.getElementById("scroll-up-btn");
  document.addEventListener("scroll", handleScroll);

  scrollUpBtn.addEventListener("click", scrollToTop);
  scrollUpBtn.addEventListener("mouseover", changeClass);
  scrollUpBtn.addEventListener("mouseleave", changeClass);

  function handleScroll() {
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const GOLDEN_RATIO = 0.5;

    if (document.documentElement.scrollTop / scrollHeight > GOLDEN_RATIO) {
      scrollUpBtn.style.display = "block";
    } else {
      scrollUpBtn.style.display = "none";
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function changeClass() {
    if (scrollUpBtn.className.indexOf("fill") === -1) {
      scrollUpBtn.className = "bi bi-arrow-up-circle-fill";
    } else {
      scrollUpBtn.className = "bi bi-arrow-up-circle";
    }
  }
};
