
// let objMacgold = [
//   {
//     id:1,
//     title:"MacBook Air 13-inch M1",
//     color:[
//       "TILLA RANG",
//       "KUMUSH RANG",
//       "KULRANG",
//     ],
//     price:{
//       ram:[
//         {
//           "8":100,
//           "16":200,
//         },
//       ],
//       memory:[
//         {
//           "256":200,
//           "512":400,
//           "1":600,
//         },
//       ],
//     },
//     xotira:{
//       ram:[
//         {
//           "8":8,
//           "16":16
//         },
//       ],
//       memory:[
//         {
//           "256":256,
//           "512":512,
//           "1":1,
//         },
//       ],
//     },
//     ram1:[8,16],
//     memory:[256,512,1],
//     colors:["TILLA RANG","KUMUSH RANG","KULRANG"],
//     img:["../im",],
    // ram:{
    //   ram8:{
    //     ram1:8,
    //   },
    //   ram16:{
    //     ram1:16,
    //   }
    // }

    // ram2:{
    //   ram1:8,
    //   ram2:16,
    //   ram2:16,
    // }

    // color:{
    //   color1:"TILLA RANG",
    //   color2:"KUMUSH RANG",
    //   color3:"KULRANG",
    //   ram:{
    //     ram1:8,
    //     ram2:16,
    //     ram8:{
    //       memory:{
    //         memory1:256,
    //         memory2:512,
    //       },
    //     },

    //     ram16:{
    //       memory:{
    //         memory1:256,
    //         memory2:512,
    //         memory3:1,
    //       },
    //     },
    //   },
    // },
  // },
  // {
  //   ram:16,
  //   memory1:256,
  //   memory2:512,
  //   memory3:1,
  // }
// ]
// objMac.forEach((item) => {
//   console.log(item.ram1.ram8);
// })




const objec = {
  id: 1,
  name: 'max',
  color: [' Gold', ' Silver', ' Gray'],
  price: {
      ram: [{
          '8':150,
          '16':300,
      }],
      memory: [{
          '256': 200,
          '512': 400,
          '1t': 800,
      }],
      color: [{
          'red':10,
          'blue':15,
          'yellow':20,
      }],
  },
  xotira: {
      ram: {
          '8':8,
          '16':16,
          '32':32
      },
      memory: {
          '128': 128,
          '256': 256,
          '512': 512,
          '1t': 1
      },
  },
  imgs:{
    img1:"https://cdn.macbro.uz/macbro/58060f94-5167-4105-8180-92485ccac18c",
    img2:"https://cdn.macbro.uz/macbro/b8166836-a68f-4886-bf74-04d2ae1e38da",
    img3:"https://cdn.macbro.uz/macbro/dea2b7f5-72f0-4501-9a63-8a93a6d5360c",
    img4:"https://cdn.macbro.uz/macbro/221e8aa7-769e-4396-b614-bba5d5a94a1e",
    img5:"https://cdn.macbro.uz/macbro/2aa0ef46-60b7-469c-8eea-11d8bf09d9f3"
  },
  silver:{
    img1:"https://cdn.macbro.uz/macbro/cf510327-b4e8-4378-a001-cbd8779504b8",
    img2:"https://cdn.macbro.uz/macbro/67762a5d-aa1e-4d3c-b3cd-fda8b50b937f",
    img3:"https://cdn.macbro.uz/macbro/51b73a16-4170-4944-80cf-6f8bca51351e",
    img4:"https://cdn.macbro.uz/macbro/e622b5e0-65fc-4e91-a70d-9025fc30fd58",
    img5:"https://cdn.macbro.uz/macbro/d90e01d1-2087-48a3-9462-912f58ea138c",
  },
  gray:{
    img1:"https://cdn.macbro.uz/macbro/edb6411f-3f34-47b1-a118-36045811f045",
    img2:"https://cdn.macbro.uz/macbro/7f956a88-c90a-44b4-ba40-50aac4807181",
    img3:"https://cdn.macbro.uz/macbro/dfda6000-e242-4442-ad59-bac513806275",
    img4:"https://cdn.macbro.uz/macbro/eb6d4a3e-b892-4c4f-aff6-46d333c494ae",
    img5:"https://cdn.macbro.uz/macbro/66715875-b08c-45a0-9f79-5f4a222e5943"
  }
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

console.log(elMacItem1.innerHTML);

elMacItem1.innerHTML = `<img class="navimg" src="${objec.imgs.img1}" alt="">`
elMacItem2.innerHTML = `<img class="navimg" src="${objec.imgs.img2}" alt="">`
elMacItem3.innerHTML = `<img class="navimg" src="${objec.imgs.img3}" alt="">`
elMacItem4.innerHTML = `<img class="navimg" src="${objec.imgs.img4}" alt="">`
elMacItem5.innerHTML = `<img class="navimg" src="${objec.imgs.img5}" alt="">`



// console.log(elTitleMemory.textContent);

elRam8.addEventListener("click",(e) => {
  e.preventDefault()
  elRam16.classList.remove("activ")
  elRam8.classList.add("activ")
  elTitleRam.textContent = objec.xotira.ram[8]
  elGb1.classList.remove("displayb")
  elPrice.textContent = "12 497 000"
})
elRam16.addEventListener("click",(e) => {
  e.preventDefault()
  elRam8.classList.remove("activ")
  elRam16.classList.add("activ")
  elTitleRam.textContent = objec.xotira.ram[16]
  elGb1.classList.add("displayb")
  elRam8.classList.remove("dn")
  elPrice.textContent = "16 935 000"
})

// START MEMORY PART

elGb256.addEventListener("click",(e) => {
  e.preventDefault()
  elGb512.classList.remove("activ")
  elGb1.classList.remove("activ")
  elGb256.classList.add("activ")
  elTitleMemory.textContent = objec.xotira.memory[256]
  elTitleTB.classList.remove("displayb")
  elTitleRam.classList.remove("titlefontsize")
  elTitleM1.classList.remove("titlefontsize")
  elTitleMemory.classList.remove("titlefontsize")
  elRam8.classList.remove("dn")
})
elGb512.addEventListener("click",(e) => {
  e.preventDefault()
  elGb256.classList.remove("activ")
  elGb1.classList.remove("activ")
  elGb512.classList.add("activ")
  elTitleMemory.textContent = objec.xotira.memory[512]
  elTitleTB.classList.remove("displayb")
  elTitleRam.classList.remove("titlefontsize")
  elTitleM1.classList.remove("titlefontsize")
  elTitleMemory.classList.remove("titlefontsize")
  elRam8.classList.remove("dn")
})
elGb1.addEventListener("click",(e) => {
  e.preventDefault()
  elGb512.classList.remove("activ")
  elGb256.classList.remove("activ")
  elGb1.classList.add("activ")
  elTitleMemory.textContent = objec.xotira.memory["1t"]
  elTitleTB.classList.add("displayb")
  elTitleTB.classList.add("titlefontsize")
  elTitleRam.classList.add("titlefontsize")
  elTitleM1.classList.add("titlefontsize")
  elTitleMemory.classList.add("titlefontsize")
  elTitleColor.classList.add("titlefontsize")
  elRam8.classList.add("dn")
})

// START COLORS PART

elColorsbtn1.addEventListener("click",(e) => {
  e.preventDefault()
  elColorsbtn3.classList.remove("activ")
  elColorsbtn2.classList.remove("activ")
  elColorsbtn1.classList.add("activ")
  elTitleColor.textContent = objec.color[0]

  caruselimg1.innerHTML = `<img src="${objec.imgs.img1}" class="d-block w-100" alt="...">`
  
  elMacItem1.innerHTML = `<img class="navimg" src="${objec.imgs.img1}" alt="">`
  elMacItem2.innerHTML = `<img class="navimg" src="${objec.imgs.img2}" alt="">`
  elMacItem3.innerHTML = `<img class="navimg" src="${objec.imgs.img3}" alt="">`
  elMacItem4.innerHTML = `<img class="navimg" src="${objec.imgs.img4}" alt="">`
  elMacItem5.innerHTML = `<img class="navimg" src="${objec.imgs.img5}" alt="">`

})
elColorsbtn2.addEventListener("click",(e) => {
  e.preventDefault()
  elColorsbtn3.classList.remove("activ")
  elColorsbtn1.classList.remove("activ")
  elColorsbtn2.classList.add("activ")
  elTitleColor.textContent = objec.color[1]

  caruselimg1.innerHTML = `<img src="${objec.silver.img1}" class="d-block w-100" alt="...">`

  elMacItem1.innerHTML = `<img class="navimg" src="${objec.silver.img1}" alt="">`
  elMacItem2.innerHTML = `<img class="navimg" src="${objec.silver.img2}" alt="">`
  elMacItem3.innerHTML = `<img class="navimg" src="${objec.silver.img3}" alt="">`
  elMacItem4.innerHTML = `<img class="navimg" src="${objec.silver.img4}" alt="">`
  elMacItem5.innerHTML = `<img class="navimg" src="${objec.silver.img5}" alt="">`
})
elColorsbtn3.addEventListener("click",(e) => {
  e.preventDefault()
  elColorsbtn2.classList.remove("activ")
  elColorsbtn1.classList.remove("activ")
  elColorsbtn3.classList.add("activ")
  elTitleColor.textContent = objec.color[2]

  caruselimg1.innerHTML = `<img src="${objec.gray.img1}" class="d-block w-100" alt="...">`

  elMacItem1.innerHTML = `<img class="navimg" src="${objec.gray.img1}" alt="">`
  elMacItem2.innerHTML = `<img class="navimg" src="${objec.gray.img2}" alt="">`
  elMacItem3.innerHTML = `<img class="navimg" src="${objec.gray.img3}" alt="">`
  elMacItem4.innerHTML = `<img class="navimg" src="${objec.gray.img4}" alt="">`
  elMacItem5.innerHTML = `<img class="navimg" src="${objec.gray.img5}" alt="">`
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
  let a = eval(elPrice.textContent) + eval(elPrice.textContent)
  elPrice.textContent = a
  let b = eval(elSubprice.textContent) + eval(elSubprice.textContent)
  elSubprice.textContent = b
  // console.log(elPrice.textContent + elPrice.textContent);
  // console.log(eval(elPrice.textContent));
})
btndec.addEventListener("click",(e) => {
  e.preventDefault()
  btnsum.textContent--
  let c = eval(elPrice.textContent) - eval(elPrice.textContent)
  elPrice.textContent = c
  let d = eval(elSubprice.textContent) - eval(elSubprice.textContent)
  elSubprice.textContent = d
  // btnsum.textContent = Math.min(1)
})



