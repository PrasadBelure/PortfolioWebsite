// HTML & CSS & JS progress circular bar 
let htmlProgress = document.querySelector(".html-progress");
let htmlValue = document.querySelector(".html-progress .progress-value");

let htmlStartValue = 0;
let htmlEndValue = 90;
let htmlSpeed = 20;

let progressHtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${htmlStartValue * 3.6}deg, #ededed 0deg)`;

  if (htmlStartValue === htmlEndValue) {
    clearInterval(progressHtml);
  }
}, htmlSpeed);

// ReactJS & NodeJS progress circular bar
let reactjsProgress = document.querySelector(".reactjs-progress");
let reactjsValue = document.querySelector(".reactjs-progress .progress-value");

let reactjsStartValue = 0;
let reactjsEndValue = 90;
let reactjsSpeed = 20;

let progressReactjs = setInterval(() => {
  reactjsStartValue++;

  reactjsValue.textContent = `${reactjsStartValue}%`;
  reactjsProgress.style.background = `conic-gradient(#6f34fe ${reactjsStartValue * 3.6}deg, #ededed 0deg)`;

  if (reactjsStartValue === reactjsEndValue) {
    clearInterval(progressReactjs);
  }
}, reactjsSpeed);

// Machine Learning progress circular bar
let mlProgress = document.querySelector(".ml-progress");
let mlValue = document.querySelector(".ml-progress .progress-value");

let mlStartValue = 0;
let mlEndValue = 80;
let mlSpeed = 20;

let progressMl = setInterval(() => {
  mlStartValue++;

  mlValue.textContent = `${mlStartValue}%`;
  mlProgress.style.background = `conic-gradient(#20c997 ${mlStartValue * 3.6}deg, #ededed 0deg)`;

  if (mlStartValue === mlEndValue) {
    clearInterval(progressMl);
  }
}, mlSpeed);

// AI Chatbots progress circular bar
let aiProgress = document.querySelector(".ai-progress");
let aiValue = document.querySelector(".ai-progress .progress-value");

let aiStartValue = 0;
let aiEndValue = 70;
let aiSpeed = 20;

let progressAi = setInterval(() => {
  aiStartValue++;

  aiValue.textContent = `${aiStartValue}%`;
  aiProgress.style.background = `conic-gradient(#3f396d ${aiStartValue * 3.6}deg, #ededed 0deg)`;

  if (aiStartValue === aiEndValue) {
    clearInterval(progressAi);
  }
}, aiSpeed);

// Filter using JavaScript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value === "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});

// Sticky navbar
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      document.getElementById('navbar-top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar-top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });
});

// Back to top button
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});