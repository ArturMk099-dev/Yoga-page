let bar = document.getElementsByClassName("bar")[0];
let navbar = document.getElementsByClassName("nav-bar")[0];
let body = document.querySelector("body");
bar.addEventListener("click", function (e) {
  navbar.classList.toggle("open");
  bar.classList.toggle("active");
  e.stopPropagation();
});

document.body.addEventListener("click", function (e) {
  if (!bar.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("open");
    bar.classList.remove("active");
  }
});

setTimeout(function () {
  document.body.classList.add("show");
}, 300);

let links = document.querySelectorAll(".nav-bar a");
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function (e) {
    e.preventDefault();
    let url = this.href;
    document.body.classList.add("hide");
    setTimeout(function () {
      location.href = url;
    }, 300);
  };
}

let header = document.querySelector("header");
let lastScroll = 0;
window.addEventListener("scroll", function () {
  let curScroll = window.scrollY;
  if (curScroll > lastScroll) {
    header.classList.add("hide");
    navbar.classList.remove("open");
    bar.classList.remove("active");
  } else {
    header.classList.remove("hide");
  }
  lastScroll = curScroll;
});
