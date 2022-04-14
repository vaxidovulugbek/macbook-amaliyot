
let elBtnInfoDetails = document.getElementById("btn-info-details")
let elBtnTechDetails = document.getElementById("btn-tech-details")
let elDetailsInfo = document.getElementById("details-info")
let elDetailsTech = document.getElementById("details-tech")
let elHoverBtn = document.getElementById("hoverbtn")

// let elCaruselLeftBtn = document.getElementById("carusel-leftBtn")
// let elCaruselRightBtn = document.getElementById("carusel-rightBtn")
// let elCaruselList = document.getElementById("maincarusel-list")
let elCaruselItemClass = document.querySelectorAll(".maincarusel-item")



elBtnInfoDetails.addEventListener("click",info)
elBtnTechDetails.addEventListener("click",tech)
function info(){
  elDetailsInfo.classList.remove("dn")
  elDetailsTech.classList.add("dn")
  elHoverBtn.style.transition = "all 0.1s";
  elHoverBtn.style="position:absolute; left:0.5%;"
}
function tech(){
  elDetailsInfo.classList.add("dn")
  elDetailsTech.classList.remove("dn")
  elHoverBtn.style.transition = "all 0.1s";
  elHoverBtn.style="position:absolute; left:49.5%;"
}


// elCaruselRightBtn.addEventListener("click",(e) => {
//   e.preventDefault()
//   elCaruselItemClass.forEach((item,index) =>{
//     // item.style.transform = "translate(-30%)"
//     elCaruselList.style.transform = `translate(${-index * 30}%)`
//   })
// })





let elstorislist = document.querySelector("#maincarusel-list")
let carBtnleft = document.querySelectorAll('.carusel-leftBtn');
let carBtnright = document.querySelectorAll('.carusel-rightBtn');
let count1 = 0;
let count2 = 0;


carBtnright.forEach((el, index) => {
  let n = index
  if (n == 0) {
    el.addEventListener('click', () => {
      count1++;
      if (count1 == 1) {
        elstorislist.style.transform = 'translateX(-33%)';
      } else if (count1 == 2) {
        elstorislist.style.transform = 'translateX(-66%)';
      } else if (count1 == 3) {
        elstorislist.style.transform = 'translateX(-99%)';
      } else if (count1 == 4) {
        elstorislist.style.transform = 'translateX(-133%)';
      }
      else {
        elstorislist.style.transform = 'translateX(0)';
        count1 = 0
      }
    })
  }
})

carBtnleft.forEach((el, index) => {
  let n = index
  if (n == 0) {
    el.addEventListener('click', () => {
      count2++;
      if (count2 == 1) {
        elstorislist.style.transform = 'translateX(33%)';
      } else if (count2 == 2) {
        elstorislist.style.transform = 'translateX(66%)';
      } else if (count2 == 3) {
        elstorislist.style.transform = 'translateX(99%)';
      } else if (count2 == 4) {
        elstorislist.style.transform = 'translateX(133%)';
      }
      else {
        elstorislist.style.transform = 'translateX(0)';
        count2 = 0
      }
    })
  }
})




// elSliderInner.style.transform = `translateX(${-index * 550}px)`;
// console.log(elCaruselItemClass);
// function maincarusel(){
//   elModalmacItem.forEach((item, index) => {
//     item.addEventListener("click", () => {
//       console.log("clickkkk");
//       elCaruselModal.style.transform = `translateX(${-index * 1150}px)`;
//     });
//   });  
// }
// maincarusel()




let prevScrollPosition = 0;

function scrollHandler(e) {
    // At a time out of 150 by default for better browser support,
    // but do not set a time out if a snapping point has been reached.
    let atSnappingPoint = e.target.scrollLeft % e.target.offsetWidth === 0,
        timeOut = atSnappingPoint ? 0 : 150,
        slider = e.target.closest(".js-slider");

    clearTimeout(e.target.scrollTimeout);
    e.target.scrollTimeout = setTimeout(function () {
        const currentScrollPosition = parseInt(e.target.scrollLeft, 10);

        slider.classList.remove("slider--last", "slider--first");

        if (
            currentScrollPosition > prevScrollPosition &&
            e.target.scrollWidth - currentScrollPosition ===
                e.target.offsetWidth
        ) {
            slider.classList.add("slider--last");
        } else if (
            currentScrollPosition <= prevScrollPosition &&
            currentScrollPosition <= 0
        ) {
            slider.classList.add("slider--first");
        }
        prevScrollPosition = currentScrollPosition;
    }, timeOut);
}

function updateSlidePosition(e, direction) {
    const firstSlideWidth = e.querySelector(".slider__slide").offsetWidth;

    if (direction === "prev") {
        e.scrollLeft -= firstSlideWidth;
    } else {
        e.scrollLeft += firstSlideWidth;
    }
}

document
    .querySelector(".js-slider-inner")
    .addEventListener("scroll", scrollHandler);

// document
//     .querySelector(".js-slider-inner")
//     .addEventListener("pointermove", (e) => {
//         if (e.movementX > 0 && e.movementY == 0) {
//             updateSlidePosition(
//                 document.querySelector(".js-slider-inner"),
//                 "prev"
//             );
//         } else if (e.movementX < 0 && e.movementY == 0) {
//             updateSlidePosition(
//                 document.querySelector(".js-slider-inner"),
//                 "next"
//             );
//         }
//     });

document
    .querySelector(".js-slider-prev")
    .addEventListener("click", function () {
        updateSlidePosition(this.nextElementSibling, "prev");
    });

document
    .querySelector(".js-slider-next")
    .addEventListener("click", function () {
        updateSlidePosition(this.previousElementSibling, "next");
    });






































































