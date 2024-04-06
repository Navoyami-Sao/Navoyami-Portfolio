'use strict'


// Slides


const slides = document.querySelectorAll(".main__section__projects__div__work"),
    next = document.querySelector(".main__section__projects__div__arrovs__forvard"),
    prev = document.querySelector(".main__section__projects__div__arrovs__back"),
    current = document.querySelector(".main__section__projects__div__arrovs__span"),
    total = document.querySelector(".main__section__projects__div__arrovs__spann")


    let indexSlide = 1

    showSlide(indexSlide)

    function showSlide(idx){
        if(slides.length < 10){
            total.textContent = `0${slides.length}`
        }
        else{
            total.textContent = slides.length
        }


        if(idx > slides.length){
            indexSlide = 1
        }
        if(idx < 1){
            indexSlide = slides.length
        }

        slides.forEach((item)=>item.style.display = "none")
        slides[indexSlide - 1].style.display = "block"
        if(slides.length < 10){
            current.textContent = `0${indexSlide}`
        }
        else{
            current.textContent = indexSlide
        }
    }

    function addSlider(idx){
        showSlide(indexSlide += idx)
    }


    next.addEventListener("click" , ()=>{
        addSlider(+1)
    })
    prev.addEventListener("click", ()=>{
        addSlider(-1)
    })




    // Modal


    let modal = document.querySelector(".main__modal"),
    close = document.querySelector(".main__modal__dialog__content__close"),
    openModal = document.querySelectorAll("[data-btn]")


    function showModal(){
        modal.classList.add("show")
        modal.classList.remove("hide")
        document.body.style.overflow = "hidden"
        clearInterval(modalTimer)
    }

    function closeModal(){
        modal.classList.add("hide")
        modal.classList.remove("show")
        document.body.style.overflow = ""
    }
    
    openModal.forEach((item)=>{
        item.addEventListener("click" , (e)=>{
            e.preventDefault()
            showModal()
        })
    })

    close.addEventListener("click" , closeModal)


    modal.addEventListener("click" , (e)=>{
        if(e.target === modal){
            closeModal()
        }
    })


    document.addEventListener("keydown" , (e)=>{
        if(e.code == ["Escape"]){
            closeModal()
        }
    })


    const modalTimer = setTimeout(showModal, 3000)

    function showModalscroll(){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            showModal()
            window.removeEventListener("scroll",showModalscroll)
        }
    }
    window.addEventListener("scroll", showModalscroll)



    // Navigation menu


    let menuList = document.getElementById("menuList")

    menuList.style.maxHeight = "0px"


    function toggleMenu(){
        if(menuList.style.maxHeight == "0px")
        {
            menuList.style.maxHeight = "300px"

        }
        else{
            menuList.style.maxHeight = "0px"
        }
    }






























// const menuBtn = document.querySelector('.menu-btn')
// const navigation = document.querySelector('.navigation')
// const navigationItems = document.querySelectorAll('.navigation a')

// menuBtn.addEventListener('click', () => {
//   menuBtn.classList.toggle('active')
//   navigation.classList.toggle('active')
// })

// navigationItems.forEach(navItem => {
//   navItem.addEventListener('click', () => {
//     menuBtn.classList.remove('active')
//     navigation.classList.remove('active')
//   })
// })