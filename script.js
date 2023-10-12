const span = document.querySelector(".span");

const span2 = document.querySelector(".span2")

const span3 = document.querySelector(".span3")

const span4 = document.querySelector(".span4")

const span5 = document.querySelector(".span5")

const subp = document.querySelector(".subp");

const subp2 = document.querySelector(".subp2")

const subp3 = document.querySelector(".subp3")

const subp4 = document.querySelector(".subp4")

const subp5 = document.querySelector(".subp5")


span.addEventListener("click", () => {
    span.classList.toggle("active")

    subp.classList.toggle("active")
})


span2.addEventListener("click", () => {
    span2.classList.toggle("active")

    subp2.classList.toggle("active")
})

span3.addEventListener("click", () => {
    span3.classList.toggle("active")

    subp3.classList.toggle("active")
})

span4.addEventListener("click", () => {
    span4.classList.toggle("active")

    subp4.classList.toggle("active")
})

span5.addEventListener("click", () => {
    span5.classList.toggle("active")

    subp5.classList.toggle("active")
})