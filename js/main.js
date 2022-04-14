
const obj = [
  {
    id: 1,
    name: ` Gold`,
    activ:false,
    imgGold:{
      img1:"https://cdn.macbro.uz/macbro/58060f94-5167-4105-8180-92485ccac18c",
      img2:"https://cdn.macbro.uz/macbro/b8166836-a68f-4886-bf74-04d2ae1e38da",
      img3:"https://cdn.macbro.uz/macbro/dea2b7f5-72f0-4501-9a63-8a93a6d5360c",
      img4:"https://cdn.macbro.uz/macbro/221e8aa7-769e-4396-b614-bba5d5a94a1e",
      img5:"https://cdn.macbro.uz/macbro/2aa0ef46-60b7-469c-8eea-11d8bf09d9f3",
    },
    ram: [
   {
    GB: 8,
    activ:true,
    xotira: [
       {
          name: `M1/8/256 Gold`,
          gbXotira: 256,
          price: 12497000,
          subprice:14621000,
          activ:true,
        },
        {
          name: `M1/8/512 Gold`,
          gbXotira: 512,
          price: 15066000,
          subprice:17627500,
          activ:false,
        }
      ]
      }, 
    {
    GB: 16,
    activ:false,
    xotira: [
      {
        name: `M1/16/256 Gold`,
        gbXotira: 256,
        price: `16935000`,
        subprice:19813500,
        activ:true,
      },
      {
        name: `M1/16/512 Gold`,
        gbXotira: 512,
        price: `19270500`,
        subprice:22546500,
        activ:false,
      },
      {
        name: `M1/16/1tb Gold`,
        gbXotira: 1,
        price: `20438500`,
        subprice:23913000 ,
        activ:false,
      }
    ]
  }
  ],
  },
  {
    id: 2,
    name: ` Silver`,
    activ:false,
    imgUrl: "imgs/macSilver1.jpg",
    imgSilver: {
      img1:"https://cdn.macbro.uz/macbro/cf510327-b4e8-4378-a001-cbd8779504b8",
      img2:"https://cdn.macbro.uz/macbro/67762a5d-aa1e-4d3c-b3cd-fda8b50b937f",
      img3:"https://cdn.macbro.uz/macbro/51b73a16-4170-4944-80cf-6f8bca51351e",
      img4:"https://cdn.macbro.uz/macbro/e622b5e0-65fc-4e91-a70d-9025fc30fd58",
      img5:"https://cdn.macbro.uz/macbro/d90e01d1-2087-48a3-9462-912f58ea138c",
    },
    ram: [
  {
    GB: 8,
    activ:false,
    xotira: [
      {
        name: `M1/8/256 Silver`,
        gbXotira: 256,
        price: 12497000,
        subprice:14621000,
        activ:false,
      },
      {
        name: `M1/8/512 Silver`,
        gbXotira: 512,
        price: 15066000,
        subprice:17627500,
        activ:false,
      },
    ]
  }, 
  {
    GB: 16,
    activ:false,
    xotira: [
      {
        name: `M1/16/256 Silver`,
        gbXotira: 256,
        price: `16935000`,
        subprice:19813500,
        activ:false,
      },
      {
        name: `M1/16/512 Silver`,
        gbXotira: 512,
        price: `19 270 500`,
        subprice:22546500,
        activ:false,
      },
      {
        name: `M1/16/1tb Silver`,
        gbXotira: 1,
        price: `21606500`,
        subprice:25279500,
        activ:false,
      }
    ]
  }
  ],
  
  },
  {
  id: 3,
  name: ` Grey`,
  activ:false,
  imgUrl: "imgs/macGrey1.jpg",
  imgGray: {
    img1:"https://cdn.macbro.uz/macbro/edb6411f-3f34-47b1-a118-36045811f045",
    img2:"https://cdn.macbro.uz/macbro/7f956a88-c90a-44b4-ba40-50aac4807181",
    img3:"https://cdn.macbro.uz/macbro/dfda6000-e242-4442-ad59-bac513806275",
    img4:"https://cdn.macbro.uz/macbro/eb6d4a3e-b892-4c4f-aff6-46d333c494ae",
    img5:"https://cdn.macbro.uz/macbro/66715875-b08c-45a0-9f79-5f4a222e5943",
  },
  ram: [
    {
      GB: 8,
      activ:false,
      xotira: [
    {
      name: `M1/8/256 Grey`,
      gbXotira: 256,
      price: 12497000,
      subprice:14621000,
      activ:false,
     },
    {
      name: `M1/8/512 Grey`,
      gbXotira: 512,
      price: 15066000,
      subprice:17627500,
      activ:false,
    }
  ]
  }, 
  {
    GB: 16,
    activ:false,
    xotira: [
      {
        name: `M1/16/256 Grey`,
        gbXotira: 256,
        price: `16935000`,
        subprice:19813500,
        activ:false,
      },
      {
        name: `M1/16/512 Grey`,
        gbXotira: 512,
        price: `19270500`,
        subprice:22546500,
        activ:false,
      },
      {
        name: `M1/16/1tb Grey`,
        gbXotira: 1,
        price: `21606500`,
        subprice:25279500,
        activ:false,
      }
    ]
  }
  ],
  }
  ];
  

  if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[0].activ == true) {
    console.log("8talik 256");
  } 
  if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[1].activ == true) {
    console.log(" 8talik 512");
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[0].activ == true) {
    console.log("16gblik 256");
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[1].activ == true) {
    console.log("16gblik 512");
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[2].activ == true) {
    console.log("16gblik 1tb");
  } 

let elContent = document.querySelector("#content")
let elModalInner = document.querySelector("#modalinner")

let elRam8 = document.querySelector("#ram8")
let elRam16 = document.querySelector("#ram16")
let elGb256 = document.querySelector("#gb256")
let elGb512 = document.querySelector("#gb512")
let elGb1 = document.querySelector("#gb1")
let elColorsbtn1 = document.querySelector("#colorsbtn1")
let elColorsbtn2 = document.querySelector("#colorsbtn2")
let elColorsbtn3 = document.querySelector("#colorsbtn3")

let elMacItem1 = document.querySelector("#macitem1")
let elMacItem2 = document.querySelector("#macitem2")
let elMacItem3 = document.querySelector("#macitem3")
let elMacItem4 = document.querySelector("#macitem4")
let elMacItem5 = document.querySelector("#macitem5")

let elSlider1 = document.querySelector("#slider1")
let elSlider2 = document.querySelector("#slider2")
let elSlider3 = document.querySelector("#slider3")
let elSlider4 = document.querySelector("#slider4")
let elSlider5 = document.querySelector("#slider5")

let elKaruselm1 = document.querySelector("#karuselm1")
let elKaruselm2 = document.querySelector("#karuselm2")
let elKaruselm3 = document.querySelector("#karuselm3")
let elKaruselm4 = document.querySelector("#karuselm4")
let elKaruselm5 = document.querySelector("#karuselm5")

// let elSliderBox = document.querySelectorAll(".sliderbox")

let caruselimg1 = document.querySelector("#caruselimg1")

let elTitleRam = document.querySelector("#titleram")
let elTitleM1 = document.querySelector("#titlem1")
let elTitleMemory = document.querySelector("#TitleMemory")
let elTitleTB = document.querySelector("#titletb")
let elTitleColor = document.querySelector("#TitleColor")
let elPrice = document.querySelector("#price")
let elSubprice = document.querySelector("#subprice")

let btndec = document.querySelector("#btndec")
let btnenc = document.querySelector("#btnenc")
let btnsum = document.querySelector("#btnsum")

let elSliderPicture = document.querySelectorAll(".slider-picture")
let elMacItems = document.querySelectorAll(".mac__item")
let elSliderInner = document.querySelector("#sliderin")

let elModalBtn = document.querySelector("#modalbtn")
let elModalBtn2 = document.querySelector("#modalbtn2")

// modal part
let elMacmodal1 = document.querySelector("#macmodal1")
let elMacmodal2 = document.querySelector("#macmodal2")
let elMacmodal3 = document.querySelector("#macmodal3")
let elMacmodal4 = document.querySelector("#macmodal4")
let elMacmodal5 = document.querySelector("#macmodal5")
let elModalmacItem = document.querySelectorAll(".modalmac-item")
let elCaruselModal = document.querySelector("#caruselmodal")
let elMain = document.querySelector("#main")
let elFooter = document.querySelector("#footer")
elMacmodal1.addEventListener("click" ,(e) =>{
  e.preventDefault()
  elMacmodal1.classList.add("activmodaldarc")
  elMacmodal2.classList.remove("activmodaldarc")
  elMacmodal3.classList.remove("activmodaldarc")
  elMacmodal4.classList.remove("activmodaldarc")
  elMacmodal5.classList.remove("activmodaldarc")
})
elMacmodal2.addEventListener("click" ,(e) =>{
  e.preventDefault()
  elMacmodal2.classList.add("activmodaldarc")
  elMacmodal1.classList.remove("activmodaldarc")
  elMacmodal3.classList.remove("activmodaldarc")
  elMacmodal4.classList.remove("activmodaldarc")
  elMacmodal5.classList.remove("activmodaldarc")
})
elMacmodal3.addEventListener("click" ,(e) =>{
  e.preventDefault()
  elMacmodal3.classList.add("activmodaldarc")
  elMacmodal2.classList.remove("activmodaldarc")
  elMacmodal1.classList.remove("activmodaldarc")
  elMacmodal4.classList.remove("activmodaldarc")
  elMacmodal5.classList.remove("activmodaldarc")
})
elMacmodal4.addEventListener("click" ,(e) =>{
  e.preventDefault()
  elMacmodal4.classList.add("activmodaldarc")
  elMacmodal2.classList.remove("activmodaldarc")
  elMacmodal3.classList.remove("activmodaldarc")
  elMacmodal1.classList.remove("activmodaldarc")
  elMacmodal5.classList.remove("activmodaldarc")
})
elMacmodal5.addEventListener("click" ,(e) =>{
  e.preventDefault()
  elMacmodal5.classList.add("activmodaldarc")
  elMacmodal2.classList.remove("activmodaldarc")
  elMacmodal3.classList.remove("activmodaldarc")
  elMacmodal4.classList.remove("activmodaldarc")
  elMacmodal1.classList.remove("activmodaldarc")
})

elModalBtn.addEventListener("click" ,(e) => {
  e.preventDefault()
  elContent.classList.add("dn")
  elModalInner.classList.remove("dn")
  elMain.classList.add("dn")
  elFooter.classList.add("dn")
})
elModalBtn2.addEventListener("click" ,(e) => {
  e.preventDefault()
  elContent.classList.remove("dn")
  elModalInner.classList.add("dn")
  elMain.classList.remove("dn")
  elFooter.classList.remove("dn")
})

elMacmodal1.innerHTML = `<img class="modalinnercarusel" src="${obj[0].imgGold.img1}" alt="">`
elMacmodal2.innerHTML = `<img class="modalinnercarusel" src="${obj[0].imgGold.img2}" alt="">`
elMacmodal3.innerHTML = `<img class="modalinnercarusel" src="${obj[0].imgGold.img3}" alt="">`
elMacmodal4.innerHTML = `<img class="modalinnercarusel" src="${obj[0].imgGold.img4}" alt="">`
elMacmodal5.innerHTML = `<img class="modalinnercarusel" src="${obj[0].imgGold.img5}" alt="">`


elMacItem1.innerHTML = `<img class="navimg" src="${obj[0].imgGold.img1}" alt="">`
elMacItem2.innerHTML = `<img class="navimg" src="${obj[0].imgGold.img2}" alt="">`
elMacItem3.innerHTML = `<img class="navimg" src="${obj[0].imgGold.img3}" alt="">`
elMacItem4.innerHTML = `<img class="navimg" src="${obj[0].imgGold.img4}" alt="">`
elMacItem5.innerHTML = `<img class="navimg" src="${obj[0].imgGold.img5}" alt="">`

elKaruselm1.innerHTML = `<img class="modalbigcarusel" src="${obj[0].imgGold.img1}" alt="">`
elKaruselm2.innerHTML = `<img class="modalbigcarusel" src="${obj[0].imgGold.img2}" alt="">`
elKaruselm3.innerHTML = `<img class="modalbigcarusel" src="${obj[0].imgGold.img3}" alt="">`
elKaruselm4.innerHTML = `<img class="modalbigcarusel" src="${obj[0].imgGold.img4}" alt="">`
elKaruselm5.innerHTML = `<img class="modalbigcarusel" src="${obj[0].imgGold.img5}" alt="">`


// Slider1
function carousel(){
  elMacItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      elSliderInner.style.transform = `translateX(${-index * 550}px)`;
    });
  });  
}
carousel()
// Slider2
function modalcarousel(){
  elModalmacItem.forEach((item, index) => {
    item.addEventListener("click", () => {
      console.log("clickkkk");
      elCaruselModal.style.transform = `translateX(${-index * 1150}px)`;
    });
  });  
}
modalcarousel()

elSlider1.innerHTML = `<img class="slider-picture" src="${obj[0].imgGold.img1}" alt="...">`
elSlider2.innerHTML = `<img class="slider-picture" src="${obj[0].imgGold.img2}" alt="...">`
elSlider3.innerHTML = `<img class="slider-picture" src="${obj[0].imgGold.img3}" alt="...">`
elSlider4.innerHTML = `<img class="slider-picture" src="${obj[0].imgGold.img4}" alt="...">`
elSlider5.innerHTML = `<img class="slider-picture" src="${obj[0].imgGold.img5}" alt="...">`


elRam8.addEventListener("click",(e) => {
  e.preventDefault()
  elRam16.classList.remove("activ")
  elRam8.classList.add("activ")
  elTitleRam.textContent = obj[0].ram[0].GB
  elGb1.classList.remove("displayb")

  obj[0].ram[0].activ = true 
  obj[0].ram[1].activ = false

  if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[0].activ == true) {
    console.log("8talik 256");
    elPrice.textContent = `${obj[0].ram[0].xotira[0].price}`
    elSubprice.textContent = `${obj[0].ram[0].xotira[0].subprice}`
    
  } 
  if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[1].activ == true) {
    console.log("8talik 512");
    elPrice.textContent = `${obj[0].ram[0].xotira[1].price}`
    elSubprice.textContent = `${obj[0].ram[0].xotira[0].subprice}`
  } 
  // if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[0].activ == true && obj[0].ram[0].xotira[0].activ == true) {
  //   console.log("16gblik 256");
  //   elPrice.textContent = `${obj[0].ram[1].xotira[0].price}`
  // } 
  // if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[1].activ == true && obj[0].ram[0].xotira[1].activ == true) {
  //   console.log("16gblik 512");
  //   elPrice.textContent = `${obj[0].ram[1].xotira[1].price}`
  // } 
  // if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[2].activ == true) {
  //   console.log("16gblik 1tb");
  //   elPrice.textContent = `${obj[0].ram[1].xotira[2].price}`
  // } 
  
})
elRam16.addEventListener("click",(e) => {
  e.preventDefault()
  elRam8.classList.remove("activ")
  elRam16.classList.add("activ")
  elTitleRam.textContent = obj[0].ram[1].GB
  elGb1.classList.add("displayb")
  elRam8.classList.remove("dn")
  // elPrice.textContent = "16935000"

  obj[0].ram[0].activ = false 
  obj[0].ram[1].activ = true

  obj[1].ram[0].activ = false 
  obj[1].ram[1].activ = true

  obj[2].ram[0].activ = false 
  obj[2].ram[1].activ = true

  // obj[0].ram[0].xotira[0].activ == true
  // obj[0].ram[1].xotira[0].activ == true

  // if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[0].activ == true) {
  //   console.log("8talik 256");
  //   elPrice.textContent = `${obj[0].ram[0].xotira[0].price}`
  // } 
  // if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[1].activ == true) {
  //   console.log("8talik 512");
  //   elPrice.textContent = `${obj[0].ram[0].xotira[1].price}`
  // } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[0].activ == true && obj[0].ram[0].xotira[0].activ == true) {
    console.log("16gblik 256");
    elPrice.textContent = `${obj[0].ram[1].xotira[0].price}`
    elSubprice.textContent = `${obj[0].ram[1].xotira[0].subprice}`
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[1].activ == true && obj[0].ram[0].xotira[1].activ == true) {
    console.log("16gblik 512");
    elPrice.textContent = `${obj[0].ram[1].xotira[1].price}`
    elSubprice.textContent = `${obj[0].ram[1].xotira[1].subprice}`
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[2].activ == true) {
    console.log("16gblik 1tb");
    elPrice.textContent = `${obj[0].ram[1].xotira[2].price}`
    elSubprice.textContent = `${obj[0].ram[1].xotira[2].subprice}`
  } 
})

// START MEMORY PART

elGb256.addEventListener("click",(e) => {
  e.preventDefault()
  elGb512.classList.remove("activ")
  elGb1.classList.remove("activ")
  elGb256.classList.add("activ")
  elTitleMemory.textContent = obj[0].ram[0].xotira[0].gbXotira
  elTitleTB.classList.remove("displayb")
  elTitleMemory.classList.remove("titlefontsize")
  elTitleM1.classList.remove("titlefontsize")
  elTitleMemory.classList.remove("titlefontsize")
  elRam8.classList.remove("dn")

  obj[0].ram[0].xotira[0].activ = true
  obj[0].ram[0].xotira[1].activ = false
  obj[0].ram[1].xotira[0].activ = true
  obj[0].ram[1].xotira[1].activ = false
  obj[0].ram[1].xotira[2].activ = false

  
  if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[0].activ == true) {
    console.log("8talik 256");
    elPrice.textContent = `${obj[0].ram[0].xotira[0].price}`
    elSubprice.textContent = `${obj[0].ram[0].xotira[0].subprice}`
  } 
  // if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[1].activ == true) {
  //   console.log(" 8talik 512");
  //   elPrice.textContent = `${obj[0].ram[0].xotira[1].price}`
  // } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[0].activ == true && obj[0].ram[0].xotira[0].activ == true) {
    console.log("16gblik 256");
    elPrice.textContent = `${obj[0].ram[1].xotira[0].price}`
    elSubprice.textContent = `${obj[0].ram[1].xotira[0].subprice}`
  } 
  // if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[1].activ == true && obj[0].ram[0].xotira[1].activ == true) {
  //   console.log("16gblik 512");
  //   elPrice.textContent = `${obj[0].ram[1].xotira[1].price}`
  // } 
  // if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[2].activ == true) {
  //   console.log("16gblik 1tb");
  //   elPrice.textContent = `${obj[0].ram[1].xotira[2].price}`
  // } 
  
  // console.log(obj);

})
elGb512.addEventListener("click",(e) => {
  e.preventDefault()
  elGb256.classList.remove("activ")
  elGb1.classList.remove("activ")
  elGb512.classList.add("activ")
  elTitleMemory.textContent = obj[0].ram[0].xotira[1].gbXotira
  elTitleTB.classList.remove("displayb")
  elTitleRam.classList.remove("titlefontsize")
  elTitleM1.classList.remove("titlefontsize")
  elTitleMemory.classList.remove("titlefontsize")
  elRam8.classList.remove("dn")

  obj[0].ram[0].xotira[0].activ = false 
  obj[0].ram[0].xotira[1].activ = true
  obj[0].ram[1].xotira[0].activ = false
  obj[0].ram[1].xotira[1].activ = true
  obj[0].ram[1].xotira[2].activ = false


  // if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[0].activ == true) {
  //   console.log("8talik 256");
  //   elPrice.textContent = `${obj[0].ram[0].xotira[0].price}`
  // } 
  if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[1].activ == true) {
    console.log(" 8talik 512");
    elPrice.textContent = `${obj[0].ram[0].xotira[1].price}`
    elSubprice.textContent = `${obj[0].ram[0].xotira[1].subprice}`
  } 
  // if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[0].activ == true && obj[0].ram[0].xotira[0].activ == true) {
  //   console.log("16gblik 256");
  //   elPrice.textContent = `${obj[0].ram[1].xotira[0].price}`
  // } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[1].activ == true && obj[0].ram[0].xotira[1].activ == true) {
    console.log("16gblik 512");
    elPrice.textContent = `${obj[0].ram[1].xotira[1].price}`
    elSubprice.textContent = `${obj[0].ram[1].xotira[1].subprice}`
  } 
  // if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[2].activ == true) {
  //   console.log("16gblik 1tb");
  //   elPrice.textContent = `${obj[0].ram[1].xotira[2].price}`
  // } 
  

  // console.log(obj);

})
elGb1.addEventListener("click",(e) => {
  e.preventDefault()
  elGb512.classList.remove("activ")
  elGb256.classList.remove("activ")
  elGb1.classList.add("activ")
  elTitleMemory.textContent = obj[0].ram[1].xotira[2].gbXotira
  elTitleTB.classList.add("displayb")
  elTitleTB.classList.add("titlefontsize")
  elTitleRam.classList.add("titlefontsize")
  elTitleM1.classList.add("titlefontsize")
  elTitleMemory.classList.add("titlefontsize")
  elTitleColor.classList.add("titlefontsize")
  elRam8.classList.add("dn")

  obj[0].ram[0].xotira[0].activ = false 
  obj[0].ram[0].xotira[1].activ = false
  obj[0].ram[1].xotira[0].activ = false
  obj[0].ram[1].xotira[1].activ = false
  obj[0].ram[1].xotira[2].activ = true

  obj[1].ram[0].xotira[0].activ = false 
  obj[1].ram[0].xotira[1].activ = false
  obj[1].ram[1].xotira[0].activ = false
  obj[1].ram[1].xotira[1].activ = false
  obj[1].ram[1].xotira[2].activ = true

  obj[2].ram[0].xotira[0].activ = false 
  obj[2].ram[0].xotira[1].activ = false
  obj[2].ram[1].xotira[0].activ = false
  obj[2].ram[1].xotira[1].activ = false
  obj[2].ram[1].xotira[2].activ = true


  // if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[0].activ == true) {
  //   console.log("8talik 256");
  //   elPrice.textContent = `${obj[0].ram[0].xotira[0].price}`
  // } 
  // if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[1].activ == true) {
  //   console.log("8talik 512");
  //   elPrice.textContent = `${obj[0].ram[0].xotira[1].price}`
  // } 
  // if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[0].activ == true && obj[0].ram[0].xotira[0].activ == true) {
  //   console.log("16gblik 256");
  //   elPrice.textContent = `${obj[0].ram[1].xotira[0].price}`
  // } 
  // if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[1].activ == true && obj[0].ram[0].xotira[1].activ == true) {
  //   console.log("16gblik 512");
  //   elPrice.textContent = `${obj[0].ram[1].xotira[1].price}`
  // }   
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[2].activ == true) {
    console.log("16gblik 1tb");
    elPrice.textContent = `${obj[0].ram[1].xotira[2].price}`
    elSubprice.textContent = `${obj[0].ram[1].xotira[2].subprice}`
  } 
})

// START COLORS PART

elColorsbtn1.addEventListener("click",(e) => {
  e.preventDefault()
  obj[0].activ = true
  obj[1].activ = false
  obj[2].activ = false

  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[2].activ == true && obj[0].activ == true) {
    console.log("16gblik 1tb");
    elPrice.textContent = `${obj[0].ram[1].xotira[2].price}`
    elSubprice.textContent = `${obj[0].ram[1].xotira[2].subprice}`
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[2].activ == true && obj[1].activ == true) {
    console.log("16gblik 1tb");
    elPrice.textContent = `${obj[1].ram[1].xotira[2].price}`
    elSubprice.textContent = `${obj[1].ram[1].xotira[2].subprice}`
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[2].activ == true && obj[2].activ == true) {
    console.log("16gblik 1tb");
    elPrice.textContent = `${obj[2].ram[1].xotira[2].price}`
    elSubprice.textContent = `${obj[2].ram[1].xotira[2].subprice}`
  } 

  elColorsbtn3.classList.remove("activ")
  elColorsbtn2.classList.remove("activ")
  elColorsbtn1.classList.add("activ")
  elTitleColor.textContent = obj[0].name

  // caruselimg1.innerHTML = `<img src="${obj[0].imgGold.img1}" class="d-block w-100" alt="...">`
  elSlider1.innerHTML = `<img class="slider-picture" src="${obj[0].imgGold.img1}" alt="...">`
  elSlider2.innerHTML = `<img class="slider-picture" src="${obj[0].imgGold.img2}" alt="...">`
  elSlider3.innerHTML = `<img class="slider-picture" src="${obj[0].imgGold.img3}" alt="...">`
  elSlider4.innerHTML = `<img class="slider-picture" src="${obj[0].imgGold.img4}" alt="...">`
  elSlider5.innerHTML = `<img class="slider-picture" src="${obj[0].imgGold.img5}" alt="...">`
  
  elMacItem1.innerHTML = `<img class="navimg" src="${obj[0].imgGold.img1}" alt="">`
  elMacItem2.innerHTML = `<img class="navimg" src="${obj[0].imgGold.img2}" alt="">`
  elMacItem3.innerHTML = `<img class="navimg" src="${obj[0].imgGold.img3}" alt="">`
  elMacItem4.innerHTML = `<img class="navimg" src="${obj[0].imgGold.img4}" alt="">`
  elMacItem5.innerHTML = `<img class="navimg" src="${obj[0].imgGold.img5}" alt="">`

  elMacmodal1.innerHTML = `<img class="modalinnercarusel" src="${obj[0].imgGold.img1}" alt="">`
  elMacmodal2.innerHTML = `<img class="modalinnercarusel" src="${obj[0].imgGold.img2}" alt="">`
  elMacmodal3.innerHTML = `<img class="modalinnercarusel" src="${obj[0].imgGold.img3}" alt="">`
  elMacmodal4.innerHTML = `<img class="modalinnercarusel" src="${obj[0].imgGold.img4}" alt="">`
  elMacmodal5.innerHTML = `<img class="modalinnercarusel" src="${obj[0].imgGold.img5}" alt="">`

  elKaruselm1.innerHTML = `<img class="modalbigcarusel" src="${obj[0].imgGold.img1}" alt="">`
  elKaruselm2.innerHTML = `<img class="modalbigcarusel" src="${obj[0].imgGold.img2}" alt="">`
  elKaruselm3.innerHTML = `<img class="modalbigcarusel" src="${obj[0].imgGold.img3}" alt="">`
  elKaruselm4.innerHTML = `<img class="modalbigcarusel" src="${obj[0].imgGold.img4}" alt="">`
  elKaruselm5.innerHTML = `<img class="modalbigcarusel" src="${obj[0].imgGold.img5}" alt="">`

})
elColorsbtn2.addEventListener("click",(e) => {
  e.preventDefault()
  obj[0].activ = false
  obj[1].activ = true
  obj[2].activ = false

  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[2].activ == true && obj[0].activ == true) {
    console.log("16gblik 1tb");
    elPrice.textContent = `${obj[0].ram[1].xotira[2].price}`
    elSubprice.textContent = `${obj[0].ram[1].xotira[2].subprice}`
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[2].activ == true && obj[1].activ == true) {
    console.log("16gblik 1tb");
    elPrice.textContent = `${obj[1].ram[1].xotira[2].price}`
    elSubprice.textContent = `${obj[1].ram[1].xotira[2].subprice}`
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[2].activ == true && obj[2].activ == true) {
    console.log("16gblik 1tb");
    elPrice.textContent = `${obj[2].ram[1].xotira[2].price}`
    elSubprice.textContent = `${obj[2].ram[1].xotira[2].subprice}`
  } 

  elColorsbtn3.classList.remove("activ")
  elColorsbtn1.classList.remove("activ")
  elColorsbtn2.classList.add("activ")
  elTitleColor.textContent = obj[1].name

  // caruselimg1.innerHTML = `<img src="${obj[1].imgSilver.img1}" class="d-block w-100" alt="...">`
  elSlider1.innerHTML = `<img class="slider-picture" src="${obj[1].imgSilver.img1}" alt="...">`
  elSlider2.innerHTML = `<img class="slider-picture" src="${obj[1].imgSilver.img2}" alt="...">`
  elSlider3.innerHTML = `<img class="slider-picture" src="${obj[1].imgSilver.img3}" alt="...">`
  elSlider4.innerHTML = `<img class="slider-picture" src="${obj[1].imgSilver.img4}" alt="...">`
  elSlider5.innerHTML = `<img class="slider-picture" src="${obj[1].imgSilver.img5}" alt="...">`

  elMacItem1.innerHTML = `<img class="navimg" src="${obj[1].imgSilver.img1}" alt="">`
  elMacItem2.innerHTML = `<img class="navimg" src="${obj[1].imgSilver.img2}" alt="">`
  elMacItem3.innerHTML = `<img class="navimg" src="${obj[1].imgSilver.img3}" alt="">`
  elMacItem4.innerHTML = `<img class="navimg" src="${obj[1].imgSilver.img4}" alt="">`
  elMacItem5.innerHTML = `<img class="navimg" src="${obj[1].imgSilver.img5}" alt="">`

  elMacmodal1.innerHTML = `<img class="modalinnercarusel" src="${obj[1].imgSilver.img1}" alt="">`
  elMacmodal2.innerHTML = `<img class="modalinnercarusel" src="${obj[1].imgSilver.img2}" alt="">`
  elMacmodal3.innerHTML = `<img class="modalinnercarusel" src="${obj[1].imgSilver.img3}" alt="">`
  elMacmodal4.innerHTML = `<img class="modalinnercarusel" src="${obj[1].imgSilver.img4}" alt="">`
  elMacmodal5.innerHTML = `<img class="modalinnercarusel" src="${obj[1].imgSilver.img5}" alt="">`

  elKaruselm1.innerHTML = `<img class="modalbigcarusel" src="${obj[1].imgSilver.img1}" alt="">`
  elKaruselm2.innerHTML = `<img class="modalbigcarusel" src="${obj[1].imgSilver.img2}" alt="">`
  elKaruselm3.innerHTML = `<img class="modalbigcarusel" src="${obj[1].imgSilver.img3}" alt="">`
  elKaruselm4.innerHTML = `<img class="modalbigcarusel" src="${obj[1].imgSilver.img4}" alt="">`
  elKaruselm5.innerHTML = `<img class="modalbigcarusel" src="${obj[1].imgSilver.img5}" alt="">`
})
elColorsbtn3.addEventListener("click",(e) => {
  e.preventDefault()
  obj[0].activ = false
  obj[1].activ = false
  obj[2].activ = true

  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[2].activ == true && obj[0].activ == true) {
    console.log("16gblik 1tb");
    elPrice.textContent = `${obj[0].ram[1].xotira[2].price}`
    elSubprice.textContent = `${obj[0].ram[1].xotira[2].subprice}`
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[2].activ == true && obj[1].activ == true) {
    console.log("16gblik 1tb");
    elPrice.textContent = `${obj[1].ram[1].xotira[2].price}`
    elSubprice.textContent = `${obj[1].ram[1].xotira[2].subprice}`
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[2].activ == true && obj[2].activ == true) {
    console.log("16gblik 1tb");
    elPrice.textContent = `${obj[2].ram[1].xotira[2].price}`
    elSubprice.textContent = `${obj[2].ram[1].xotira[2].subprice}`
  } 

  elColorsbtn2.classList.remove("activ")
  elColorsbtn1.classList.remove("activ")
  elColorsbtn3.classList.add("activ")
  elTitleColor.textContent = obj[2].name

  // caruselimg1.innerHTML = `<img src="${obj[2].imgGray.img1}" class="d-block w-100" alt="...">`
  elSlider1.innerHTML = `<img class="slider-picture" src="${obj[2].imgGray.img1}" alt="...">`
  elSlider2.innerHTML = `<img class="slider-picture" src="${obj[2].imgGray.img2}" alt="...">`
  elSlider3.innerHTML = `<img class="slider-picture" src="${obj[2].imgGray.img3}" alt="...">`
  elSlider4.innerHTML = `<img class="slider-picture" src="${obj[2].imgGray.img4}" alt="...">`
  elSlider5.innerHTML = `<img class="slider-picture" src="${obj[2].imgGray.img5}" alt="...">`

  elMacItem1.innerHTML = `<img class="navimg" src="${obj[2].imgGray.img1}" alt="">`
  elMacItem2.innerHTML = `<img class="navimg" src="${obj[2].imgGray.img2}" alt="">`
  elMacItem3.innerHTML = `<img class="navimg" src="${obj[2].imgGray.img3}" alt="">`
  elMacItem4.innerHTML = `<img class="navimg" src="${obj[2].imgGray.img4}" alt="">`
  elMacItem5.innerHTML = `<img class="navimg" src="${obj[2].imgGray.img5}" alt="">`

  elMacmodal1.innerHTML = `<img class="modalinnercarusel" src="${obj[2].imgGray.img1}" alt="">`
  elMacmodal2.innerHTML = `<img class="modalinnercarusel" src="${obj[2].imgGray.img2}" alt="">`
  elMacmodal3.innerHTML = `<img class="modalinnercarusel" src="${obj[2].imgGray.img3}" alt="">`
  elMacmodal4.innerHTML = `<img class="modalinnercarusel" src="${obj[2].imgGray.img4}" alt="">`
  elMacmodal5.innerHTML = `<img class="modalinnercarusel" src="${obj[2].imgGray.img5}" alt="">`

  elKaruselm1.innerHTML = `<img class="modalbigcarusel" src="${obj[2].imgGray.img1}" alt="">`
  elKaruselm2.innerHTML = `<img class="modalbigcarusel" src="${obj[2].imgGray.img2}" alt="">`
  elKaruselm3.innerHTML = `<img class="modalbigcarusel" src="${obj[2].imgGray.img3}" alt="">`
  elKaruselm4.innerHTML = `<img class="modalbigcarusel" src="${obj[2].imgGray.img4}" alt="">`
  elKaruselm5.innerHTML = `<img class="modalbigcarusel" src="${obj[2].imgGray.img5}" alt="">`
})

// START MAC IMG PART

elMacItem1.addEventListener("click",(e) => {
  e.preventDefault()
  elMacItem1.classList.add("activdarc")
  elMacItem2.classList.remove("activdarc")
  elMacItem3.classList.remove("activdarc")
  elMacItem4.classList.remove("activdarc")
  elMacItem5.classList.remove("activdarc")
})
elMacItem2.addEventListener("click",(e) => {
  e.preventDefault()
  elMacItem2.classList.add("activdarc")
  elMacItem1.classList.remove("activdarc")
  elMacItem3.classList.remove("activdarc")
  elMacItem4.classList.remove("activdarc")
  elMacItem5.classList.remove("activdarc")
})
elMacItem3.addEventListener("click",(e) => {
  e.preventDefault()
  elMacItem3.classList.add("activdarc")
  elMacItem2.classList.remove("activdarc")
  elMacItem1.classList.remove("activdarc")
  elMacItem4.classList.remove("activdarc")
  elMacItem5.classList.remove("activdarc")
})
elMacItem4.addEventListener("click",(e) => {
  e.preventDefault()
  elMacItem4.classList.add("activdarc")
  elMacItem2.classList.remove("activdarc")
  elMacItem3.classList.remove("activdarc")
  elMacItem1.classList.remove("activdarc")
  elMacItem5.classList.remove("activdarc")
})
elMacItem5.addEventListener("click",(e) => {
  e.preventDefault()
  elMacItem5.classList.add("activdarc")
  elMacItem2.classList.remove("activdarc")
  elMacItem3.classList.remove("activdarc")
  elMacItem4.classList.remove("activdarc")
  elMacItem1.classList.remove("activdarc")
})
// console.log(obj[0].ram[0].xotira[0].price);
// console.log(obj[0].ram[1].xotira[0].price);
// console.log(obj[0].ram[1].xotira[2].price);



let aa = eval(elPrice.textContent)
let cc = eval(elSubprice.textContent)

btnenc.addEventListener("click",(e) => {
  e.preventDefault()
  btnsum.textContent++
  elPrice.textContent = eval(elPrice.textContent) + aa
  // elSubprice.textContent = eval(elSubprice.textContent) + cc
})

btndec.addEventListener("click",(e) => {
  if(btnsum.textContent > 1){
    e.preventDefault()
    btnsum.textContent--
    elPrice.textContent = eval(elPrice.textContent) - aa
    // elSubprice.textContent = eval(elSubprice.textContent) - cc
  }
})





// let g = 10
// let v = 20
// function sn (g,v) {
//   let f =  g 
//   let c = v
//   f = 32
//   c = 78
//   let massives = [f,c]
//   return(massives)
// }
// console.log(sn(g,v));



// if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[0].activ == true) {
//   console.log("8talik 256");
// } 
// if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[1].activ == true) {
//   console.log(" 8talik 512");
// } 
// if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[0].activ == true) {
//   console.log("16gblik 256");
// } 
// if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[1].activ == true) {
//   console.log("16gblik 512");
// } 
// if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[2].activ == true) {
//   console.log("16gblik 1tb");
// } 









// boya yasagan holatim count

// if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[0].activ == true) {
//   //   console.log("8talik 256");
  
//   btnenc.addEventListener("click",(e) => {
//     e.preventDefault()
//     btnsum.textContent++
//     aa = obj[0].ram[0].xotira[0].price
//     cc = obj[0].ram[0].xotira[0].subprice
//     elPrice.textContent = eval(elPrice.textContent) + aa
//     elSubprice.textContent = eval(elSubprice.textContent) + cc
//   })
// } 
// if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[1].activ == true) {
//   // console.log("8talik 512");
  
//   btnenc.addEventListener("click",(e) => {
//     e.preventDefault()
//     btnsum.textContent++
//     aa = obj[0].ram[0].xotira[1].price
//     cc = obj[0].ram[0].xotira[1].subprice
//     elPrice.textContent = eval(elPrice.textContent) + aa
//     elSubprice.textContent = eval(elSubprice.textContent) + cc
//   })
// } 
// if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[0].activ == true && obj[0].ram[0].xotira[0].activ == true) {
//   // console.log("16gblik 256");
  
//   btnenc.addEventListener("click",(e) => {
//     e.preventDefault()
//     btnsum.textContent++
//     aa = obj[0].ram[1].xotira[0].price
//     cc = obj[0].ram[1].xotira[0].subprice
//     elPrice.textContent = eval(elPrice.textContent) + aa
//     elSubprice.textContent = eval(elSubprice.textContent) + cc
//   })
// } 
// if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[1].activ == true && obj[0].ram[0].xotira[1].activ == true) {
//   // console.log("16gblik 512");
  
//   btnenc.addEventListener("click",(e) => {
//     e.preventDefault()
//     btnsum.textContent++
//     aa = obj[0].ram[1].xotira[1].price
//     cc = obj[0].ram[1].xotira[1].subprice
//     elPrice.textContent = eval(elPrice.textContent) + aa
//     elSubprice.textContent = eval(elSubprice.textContent) + cc
//   })
// } 
// if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[2].activ == true) {
//   // console.log("16gblik 1tb");
  
//   btnenc.addEventListener("click",(e) => {
//     e.preventDefault()
//     btnsum.textContent++
//     aa = obj[0].ram[1].xotira[2].price
//     cc = obj[0].ram[1].xotira[2].subprice
//     elPrice.textContent = eval(elPrice.textContent) + aa
//     elSubprice.textContent = eval(elSubprice.textContent) + cc
//   })
// } 


