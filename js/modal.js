"use strict";

const modal = {
  openingButton: document.querySelector(".contacts-feedback-button"),
  closingButton: document.querySelector(".modal-button-close"),
  modalElem: document.querySelector(".modal-write-us"),
  bodyElem: document.querySelector(".page-body"),
  hidingClass: "modal-closed",
  modalBgClass: "modal-bg",
  modalBg: null,

  init(){
      this.openingButton.addEventListener("click", () => this.openingButtonHandler());
     
      this.closingButton.addEventListener("click", () => this.closingButtonHandler());
      
  },

  openingButtonHandler(){
      this.modalElem.classList.remove(this.hidingClass);
      this.bodyElem.appendChild(this.createBg());
  },

  closingButtonHandler(){
    this.modalElem.classList.add(this.hidingClass);
    this.modalBg.remove();
  },
  
  createBg(){
     let background = document.createElement("div");
     background.classList.add(this.modalBgClass);
     this.modalBg = background;
     return background;
  },

};

window.addEventListener("load", () => modal.init());