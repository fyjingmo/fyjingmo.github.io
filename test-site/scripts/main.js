// const myHeading = document.querySelector('h1')
// myHeading.textContent = 'Hello world!'

// // 变量
// let iceCream = 'chocolate'
// // 条件语句
// if (iceCream === 'chocolate') {
//   alert('我最喜欢巧克力冰淇淋了！')
// } else {
//   alert('但是巧克力才是我的最爱呀……')
// }
// // 函数
// function multiply(num1, num2) {
//   // 运算符
//   let result = num1 * num2
//   return result
// }
// console.log(multiply(4, 7))
// // 事件
// document.querySelector('h1').addEventListener('click', function () {
//   alert('别戳我，我怕疼！')
// })

// const myImage = document.querySelector('img')

// myImage.onclick = () => {
//   const mySrc = myImage.getAttribute('src')
//   if (mySrc === 'images/tom.jpg') {
//     myImage.setAttribute('src', 'images/1.png')
//   } else {
//     myImage.setAttribute('src', 'images/tom.jpg')
//   }
// }

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')
function setUserName() {
  const myName = prompt('Please enter your name.')
  if (!myName) {
    setUserName()
  } else {
    localStorage.setItem('name', myName)
    myHeading.textContent = `Mozilla is cool, ${myName}`
  }
}

if (!localStorage.getItem('name')) {
  setUserName()
} else {
  const storedName = localStorage.getItem('name')
  myHeading.textContent = `Mozilla is cool, ${storedName}`
}
myButton.onclick = function () {
  setUserName()
}
