const popupBtns = [...document.querySelectorAll(".btn-popup")];
const cardTitles = [...document.querySelectorAll(".card-title")];
const cardText = [...document.querySelectorAll(".card-text")];
const cardImages = [...document.querySelectorAll(".card-img-top")];
   popupBtns.forEach((item, i, arr) => {
      let popupTitle = document.querySelector(".popup-title");
      let popupText = document.querySelector(".popup-about");
      let popupImage = document.querySelector(".img-popup");
      item.addEventListener("click", () => {
         let imgSource = cardImages[i].attributes.src.value;
         popupTitle.innerText=`${cardTitles[i].outerText}`;
         popupText.innerText=`${cardText[i].outerText}`;
         popupImage.setAttribute("src", `${imgSource}`);
      });
   });
  
  
