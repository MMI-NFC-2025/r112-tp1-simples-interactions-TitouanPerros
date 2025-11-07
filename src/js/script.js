// TODO
//exo1
const elm = document.querySelector("#a-mettre-en-rouge");
elm.style.color="red";
//exo2
const button = document.querySelector("#en-rouge-suite-a-click");
button.addEventListener("click",function(){button.style.color ="red"});
//exo3
const coll = document.querySelectorAll("h2");

  coll.forEach((elm) => {
    elm.addEventListener("click", (evt) => {
      console.log("Événement :", evt.type);
      console.log("Ciblé :", evt.target.textContent);
      evt.target.style.color = "red";
    });
  });


