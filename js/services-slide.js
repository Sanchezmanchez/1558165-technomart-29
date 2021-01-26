"use strict";

const slider = {
    deliveryButton: document.querySelector(".delivery-button"),
    garantyButton: document.querySelector(".garanty-button"),
    creditButton: document.querySelector(".credit-button"),
    deliverySlide: document.querySelector(".services-slide-delivery"),
    garantySlide: document.querySelector(".services-slide-garanty"),
    creditSlide: document.querySelector(".services-slide-credit"),
    allSlides: document.querySelectorAll(".services-slide"),
    hiddingClass: "services-slide-hidden" ,
    
    init(){
        
        this.garantyButton.addEventListener("click", () => this.garantyButtonHandler());
        this.deliveryButton.addEventListener("click", () => this.deliveryButtonHandler());
        this.creditButton.addEventListener("click", () => this.creditButtonHandler());
    },

    deliveryButtonHandler(){
        this.deliverySlide.classList.remove(this.hiddingClass);
        this.garantySlide.classList.add(this.hiddingClass);
        this.creditSlide.classList.add(this.hiddingClass);
    },
    garantyButtonHandler(){
        this.garantySlide.classList.remove(this.hiddingClass);
        this.deliverySlide.classList.add(this.hiddingClass);
        this.creditSlide.classList.add(this.hiddingClass);

    },
    creditButtonHandler(){
        this.creditSlide.classList.remove(this.hiddingClass);
        this.deliverySlide.classList.add(this.hiddingClass);
        this.garantySlide.classList.add(this.hiddingClass);
    },

};

window.addEventListener('load', () => slider.init())
window.addEventListener('load', () => slider.deliveryButton.focus())


// мне нужно чтобы при нажатии на кнопку у меня убирался класс, скрывающий элемент, а у двух других слайдов, он появлялся 