// TODO
//exo1
const elm = document.querySelector("#a-metrre-en-rouge").style.color="red";
//exo2
const elm = document.querySelector("#a-mettre-en-rouge");
const button = document.querySelector("#en-rouge-suite-a-click");
button.addEventListener("click",function(){elm.style.color ="red"});
//exo3
const coll = document.querySelectorAll("h2");

  coll.forEach((elm) => {
    elm.addEventListener("click", (evt) => {
      console.log("Événement :", evt.type);
      console.log("Ciblé :", evt.target.textContent);
      evt.target.style.color = "red";
    });
  });


