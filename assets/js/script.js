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
  const alreadySeen = document.getElementsByClassName("invisible");
  for (let i = 0; i < alreadySeen.length; i++) {
    if (window.scrollY >= 150) {
      console.log(alreadySeen[i])
      alreadySeen[i].classList.remove("invisible");
      alreadySeen[i].classList.add("visible");
      console.log(alreadySeen[i])
    }
  }
  if (window.scrollY >= 300) {
    as.classList.remove("invisible");
    as.classList.add("visible");
  }
  if (window.scrollY >= 450) {
    as.classList.remove("invisible");
    as.classList.add("visible");
  }
  // const b = document.querySelector("main section:nth-child(5)");
  // if (window.scrollY >= 300) {
  //   b.classList.remove("invisible");
  //   b.classList.add("visible");
  // }
  // const c = document.querySelector("main section:nth-child(6)");
  // if (window.scrollY >= 450) {
  //   c.style.display = "block";
  // }
});
