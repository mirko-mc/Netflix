let items = document.querySelectorAll(".carousel .carousel-item");
items.forEach((el) => {
  const minPerSlide = 6;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

window.addEventListener("scroll", function () {
  const alreadySeen = document.getElementsByClassName("notVisible");
  for (let i = 0; i < alreadySeen.length; i++) {
    if (window.scrollY >= 300) {
      alreadySeen[i].classList.add("isVisible");
    }
  }
});
