let span = document.querySelectorAll('.arrow')
let div = document.querySelectorAll('.blog')
let spanArrow = document.querySelectorAll('.stock-arrow')
let divBlog = document.querySelectorAll('.stock-blog')
const active = document.querySelector('.stock-active')
let l = 0

span [1].onclick = () => {
  l++
  for(let i of div) {
    if (l==0) {i.style.left = '0px'}
    if (l==1) {i.style.left = '-549px'}
    if (l==2) {i.style.left = '-1098px'}
    if (l==3) {i.style.left = '-1647px'}
    if (l>4) {l=4}
  }
}

span [0].onclick = () => {
  l--
  for(let i of div) {
    if (l==0) {i.style.left = '0px'}
    if (l==1) {i.style.left = '-549px'}
    if (l==2) {i.style.left = '-1098px'}
    if (l==3) {i.style.left = '-1647px'}
    if (l<0) {l=0}
  }
}

spanArrow [1].onclick = () => {
  l++
  for(let i of divBlog) {
    if (l==0) {i.style.left = '0px'}
    if (l==1) {i.style.left = '-120vh'}
    if (l>4) {l=4}
  }
}

spanArrow [0].onclick = () => {
  l--
  for(let i of divBlog) {
    if (l==0) {i.style.left = '0px'}
    if (l==1) {i.style.left = '-120vh'}
    if (l<0) {l=0}
  }
  spanArrow.addEventListener('click', () => {
    spanArrow.classList.remove('stock-active')
  })
}

for (const active of spanArrow) {
  active.addEventListener('click', () => {
    clearActiveClasses()
    active.classList.add('stock-active')
  })
}

function clearActiveClasses() {
  spanArrow.forEach((active) => {
    active.classList.remove('stock-active')
  })
}