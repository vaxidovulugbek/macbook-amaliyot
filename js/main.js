


// console.log(obj[0].ram[1].xotira[0].activ);
// if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[0].activ == true) {
//   console.log("512");
// } 

const obj = [
  {
    id: 1,
    name: ` Gold`,
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
          activ:true,
        },
        {
          name: `M1/8/512 Gold`,
          gbXotira: 512,
          price: 15066000,
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
        activ:true,
      },
      {
        name: `M1/16/512 Gold`,
        gbXotira: 512,
        price: `19270500`,
        activ:false,
      },
      {
        name: `M1/16/1tb Gold`,
        gbXotira: 1,
        price: `22497000`,
        activ:false,
      }
    ]
  }
  ],
  },
  {
    id: 2,
    name: ` Silver`,
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
    xotira: [
      {
        name: `M1/8/256 Silver`,
        gbXotira: 256,
        price: 12497000
      },
      {
        name: `M1/8/512 Silver`,
        gbXotira: 512,
        price: 15066000
      },
      {
        name: `M1/16/1tb Silver`,
        gbXotira: 1,
        price: `22497000`
      }
    ]
  }, 
  {
    GB: 16,
    xotira: [
      {
        name: `M1/16/256 Silver`,
        gbXotira: 256,
        price: `16935000`
      },
      {
        name: `M1/16/512 Silver`,
        gbXotira: 512,
        price: `19 270 500`
      },
      {
        name: `M1/16/1tb Silver`,
        gbXotira: 1,
        price: `22497000`
      }
    ]
  }
  ],
  
  },
  {
  id: 3,
  name: ` Grey`,
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
      xotira: [
    {
      name: `M1/8/256 Grey`,
      gbXotira: 256,
      price: 12497000
     },
    {
      name: `M1/8/512 Grey`,
      gbXotira: 512,
      price: 15066000
    }
  ]
  }, 
  {
    GB: 16,
    xotira: [
      {
        name: `M1/16/256 Grey`,
        gbXotira: 256,
        price: `16935000`
      },
      {
        name: `M1/16/512 Grey`,
        gbXotira: 512,
        price: `19270500`
      },
      {
        name: `M1/16/1tb Grey`,
        gbXotira: 1,
        price: `22497000`
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


// console.log(objec.imgs.img1);


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

// console.log(elMacItem1.innerHTML);

elMacItem1.innerHTML = `<img class="navimg" src="${obj[0].imgGold.img1}" alt="">`
elMacItem2.innerHTML = `<img class="navimg" src="${obj[0].imgGold.img2}" alt="">`
elMacItem3.innerHTML = `<img class="navimg" src="${obj[0].imgGold.img3}" alt="">`
elMacItem4.innerHTML = `<img class="navimg" src="${obj[0].imgGold.img4}" alt="">`
elMacItem5.innerHTML = `<img class="navimg" src="${obj[0].imgGold.img5}" alt="">`



// console.log(elTitleMemory.textContent);

elRam8.addEventListener("click",(e) => {
  e.preventDefault()
  elRam16.classList.remove("activ")
  elRam8.classList.add("activ")
  elTitleRam.textContent = obj[0].ram[0].GB
  elGb1.classList.remove("displayb")
  // elPrice.textContent = "12497000"

  obj[0].ram[0].activ = true 
  obj[0].ram[1].activ = false
  // obj[0].ram[0].xotira[0].activ == true
  // obj[0].ram[1].xotira[0].activ == true

  if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[0].activ == true) {
    console.log("8talik 256");
    elPrice.textContent = `${obj[0].ram[0].xotira[0].price}`
  } 
  if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[1].activ == true) {
    console.log("8talik 512");
    elPrice.textContent = `${obj[0].ram[0].xotira[1].price}`
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[0].activ == true && obj[0].ram[0].xotira[0].activ == true) {
    console.log("16gblik 256");
    elPrice.textContent = `${obj[0].ram[1].xotira[0].price}`
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[1].activ == true && obj[0].ram[0].xotira[1].activ == true) {
    console.log("16gblik 512");
    elPrice.textContent = `${obj[0].ram[1].xotira[1].price}`
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[2].activ == true) {
    console.log("16gblik 1tb");
    elPrice.textContent = `${obj[0].ram[1].xotira[2].price}`
  } 
  
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
  // obj[0].ram[0].xotira[0].activ == true
  // obj[0].ram[1].xotira[0].activ == true

  if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[0].activ == true) {
    console.log("8talik 256");
    elPrice.textContent = `${obj[0].ram[0].xotira[0].price}`
    // elPrice.textContent = `${obj[0].ram[0].xotira[0].price}`
    // elPrice.textContent = "salom"
  } 
  if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[1].activ == true) {
    console.log("8talik 512");
    elPrice.textContent = `${obj[0].ram[0].xotira[1].price}`
    // elPrice.textContent = "salom"
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[0].activ == true && obj[0].ram[0].xotira[0].activ == true) {
    console.log("16gblik 256");
    elPrice.textContent = `${obj[0].ram[1].xotira[0].price}`
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[1].activ == true && obj[0].ram[0].xotira[1].activ == true) {
    console.log("16gblik 512");
    elPrice.textContent = `${obj[0].ram[1].xotira[1].price}`
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[2].activ == true) {
    console.log("16gblik 1tb");
    elPrice.textContent = `${obj[0].ram[1].xotira[2].price}`
    
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
  } 
  if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[1].activ == true) {
    console.log(" 8talik 512");
    elPrice.textContent = `${obj[0].ram[0].xotira[1].price}`
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[0].activ == true && obj[0].ram[0].xotira[0].activ == true) {
    console.log("16gblik 256");
    elPrice.textContent = `${obj[0].ram[1].xotira[0].price}`
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[1].activ == true && obj[0].ram[0].xotira[1].activ == true) {
    console.log("16gblik 512");
    elPrice.textContent = `${obj[0].ram[1].xotira[1].price}`
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[2].activ == true) {
    console.log("16gblik 1tb");
    elPrice.textContent = `${obj[0].ram[1].xotira[2].price}`
  } 
  
  
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


  if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[0].activ == true) {
    console.log("8talik 256");
    elPrice.textContent = `${obj[0].ram[0].xotira[0].price}`
  } 
  if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[1].activ == true) {
    console.log(" 8talik 512");
    elPrice.textContent = `${obj[0].ram[0].xotira[1].price}`
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[0].activ == true && obj[0].ram[0].xotira[0].activ == true) {
    console.log("16gblik 256");
    elPrice.textContent = `${obj[0].ram[1].xotira[0].price}`
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[1].activ == true && obj[0].ram[0].xotira[1].activ == true) {
    console.log("16gblik 512");
    elPrice.textContent = `${obj[0].ram[1].xotira[1].price}`
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[2].activ == true) {
    console.log("16gblik 1tb");
    elPrice.textContent = `${obj[0].ram[1].xotira[2].price}`
  } 
  

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


  if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[0].activ == true) {
    console.log("8talik 256");
    elPrice.textContent = `${obj[0].ram[0].xotira[0].price}`
  } 
  if (obj[0].ram[0].activ == true && obj[0].ram[0].xotira[1].activ == true) {
    console.log("8talik 512");
    elPrice.textContent = `${obj[0].ram[0].xotira[1].price}`
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[0].activ == true && obj[0].ram[0].xotira[0].activ == true) {
    console.log("16gblik 256");
    elPrice.textContent = `${obj[0].ram[1].xotira[0].price}`
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[1].activ == true && obj[0].ram[0].xotira[1].activ == true) {
    console.log("16gblik 512");
    elPrice.textContent = `${obj[0].ram[1].xotira[1].price}`
  } 
  if (obj[0].ram[1].activ == true && obj[0].ram[1].xotira[2].activ == true) {
    console.log("16gblik 1tb");
    elPrice.textContent = `${obj[0].ram[1].xotira[2].price}`
  } 
 
})

// START COLORS PART

elColorsbtn1.addEventListener("click",(e) => {
  e.preventDefault()
  elColorsbtn3.classList.remove("activ")
  elColorsbtn2.classList.remove("activ")
  elColorsbtn1.classList.add("activ")
  elTitleColor.textContent = obj[0].name

  caruselimg1.innerHTML = `<img src="${obj[0].imgGold.img1}" class="d-block w-100" alt="...">`
  
  elMacItem1.innerHTML = `<img class="navimg" src="${obj[0].imgGold.img1}" alt="">`
  elMacItem2.innerHTML = `<img class="navimg" src="${obj[0].imgGold.img2}" alt="">`
  elMacItem3.innerHTML = `<img class="navimg" src="${obj[0].imgGold.img3}" alt="">`
  elMacItem4.innerHTML = `<img class="navimg" src="${obj[0].imgGold.img4}" alt="">`
  elMacItem5.innerHTML = `<img class="navimg" src="${obj[0].imgGold.img5}" alt="">`

})
elColorsbtn2.addEventListener("click",(e) => {
  e.preventDefault()
  elColorsbtn3.classList.remove("activ")
  elColorsbtn1.classList.remove("activ")
  elColorsbtn2.classList.add("activ")
  elTitleColor.textContent = obj[1].name

  caruselimg1.innerHTML = `<img src="${obj[1].imgSilver.img1}" class="d-block w-100" alt="...">`

  elMacItem1.innerHTML = `<img class="navimg" src="${obj[1].imgSilver.img1}" alt="">`
  elMacItem2.innerHTML = `<img class="navimg" src="${obj[1].imgSilver.img2}" alt="">`
  elMacItem3.innerHTML = `<img class="navimg" src="${obj[1].imgSilver.img3}" alt="">`
  elMacItem4.innerHTML = `<img class="navimg" src="${obj[1].imgSilver.img4}" alt="">`
  elMacItem5.innerHTML = `<img class="navimg" src="${obj[1].imgSilver.img5}" alt="">`
})
elColorsbtn3.addEventListener("click",(e) => {
  e.preventDefault()
  elColorsbtn2.classList.remove("activ")
  elColorsbtn1.classList.remove("activ")
  elColorsbtn3.classList.add("activ")
  elTitleColor.textContent = obj[2].name

  caruselimg1.innerHTML = `<img src="${obj[2].imgGray.img1}" class="d-block w-100" alt="...">`

  elMacItem1.innerHTML = `<img class="navimg" src="${obj[2].imgGray.img1}" alt="">`
  elMacItem2.innerHTML = `<img class="navimg" src="${obj[2].imgGray.img2}" alt="">`
  elMacItem3.innerHTML = `<img class="navimg" src="${obj[2].imgGray.img3}" alt="">`
  elMacItem4.innerHTML = `<img class="navimg" src="${obj[2].imgGray.img4}" alt="">`
  elMacItem5.innerHTML = `<img class="navimg" src="${obj[2].imgGray.img5}" alt="">`
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



btnenc.addEventListener("click",(e) => {
  e.preventDefault()
  btnsum.textContent++
  // let a = eval(elPrice.textContent) + eval(elPrice.textContent)
  // elPrice.textContent = a
  // let b = eval(elSubprice.textContent) + eval(elSubprice.textContent)
  // elSubprice.textContent = b
})
btndec.addEventListener("click",(e) => {
  if(btnsum.textContent > 1){
    e.preventDefault()
    btnsum.textContent--
  }

  // let c = eval(elPrice.textContent) - eval(elPrice.textContent)
  // elPrice.textContent = c
  // let d = eval(elSubprice.textContent) - eval(elSubprice.textContent)
  // elSubprice.textContent = d
  // btnsum.textContent = Math.min(1)
})

 
// let res = elRam8.classList.some("activ")
// console.log(res);
// let res = elRam8.classList.some(item => {
//   return item = "activ"
// })
// console.log(res);

// PRICE PART
// function ramprice () {
//   // if (elRam8.classList.includes("activ")) {
//   //   console.log("acrtiv bor");
//   // }
  // let res = elRam8.classList.includes("activ")
  // console.log(res);
  // if (8>4) {
  //   console.log("acrtiv bor");
  // }
// }
// ramprice()



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













