////////////////////////NAVBAR/////////////////////////////////////////////////
alert(
  "this website is still in development so currently works on computer only soon will be available for all devices"
);
AOS.init({
  duration: 1000,
});

//variables for navbar and section-1
const section1 = document.querySelector(".home-page");
const header = document.querySelector("header");

const options = { threshold: 0.5 };

const obeserver = new IntersectionObserver((element) => {
  if (!element[0].isIntersecting) {
    header.classList.add("header-fixed");
  } else {
    header.classList.remove("header-fixed");
  }
}, options);

obeserver.observe(section1);

////////////////////////////PAGE-2////////////////////////////////////
//VARIABLES FOR PAGE-2 FUNCTIONALITY
const rightArrow = document.querySelector(".fa-arrow-right");
const leftArrow = document.querySelector(".fa-arrow-left");
const track = document.querySelector(".track");
const card = track.querySelector(".card");
let pointsToMove = track.clientWidth / 3;
let currCard = 1;

//MOVE LEFT
const moveLeft = () => {
  let negateBy;
  if (currCard > 1) {
    currCard--;
    negateBy = currCard * pointsToMove - pointsToMove;
    console.log(negateBy, currCard);
    track.style.transform = "translateX(-" + negateBy + "px)";
  } else {
    currCard = track.childElementCount - 3;
    negateBy = currCard * pointsToMove;
    track.style.transform = "translateX(-" + negateBy + "px)";
  }
};
//MOVE-LEFT
const moveRight = () => {
  if (currCard < track.childElementCount - 2) {
    let positiveBy = currCard * pointsToMove;
    track.style.transform = "translateX(-" + positiveBy + "px)";
    currCard++;
    console.log(currCard);
  } else {
    track.style.transform = "translateX(0px)";
    // pointsToMove = track.clientWidth / 3;
    currCard = 1;
  }
};

leftArrow.addEventListener("click", moveLeft);
rightArrow.addEventListener("click", moveRight);
