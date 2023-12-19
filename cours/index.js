// Selector
// document.querySelector('h4') .style.color ="red"; et
// document.querySelector('h4') .style.background ="green";

// ======>
// const h4 = document.querySelector('h4');
// console.log(h4);
// h4.style.background ="green";
// h4.style.color ="red";

// -----------------------------------------------------------------

//  click event dans selector = css si class html mettre le  ** point **
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
// --------------- ou ------------------=>
const btn2 = document.getElementById("btn-2");
const answer = document.getElementById("answer")
const error = document.getElementById("error")


// console.log(questionContainer); à faire pour visualiser si OK =>

// questionContainer.style.borderRadius = "120px";

// questionContainer.addEventListener('click', ()=> {/* evenement + fonction */
//     console.log("Click !");
// })
questionContainer.addEventListener('click', ()=> {
    questionContainer.classList.toggle("question-click")
});
// add = ajout  toggle = aller et retour

btn1.addEventListener("click", () => {
    answer.classList.add("show-answer");
    answer.style.background = "green";
});
btn2.addEventListener("click", () => {
    error.classList.add("show-error");
    error.style.background = "red";
});

//  priorité =>  < div => #id => .class => baliseHTML exemple= <P>**

// ------------------------------------------------------------------------

//  mousse Events **

const  mousemove = document.querySelector(".mousemove");
// le "e" dans la parenthese = recup données de l'événements **

window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
    // mousemove.style.;
});
questionContainer.addEventListener("mouseenter", () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
})
questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "rgba(0,0,0,1)";
})

// --------------------------------------------------------------

// ----keyPress  events----------------

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key")
const ring = (key) => {
    const audio = new Audio();
    audio.src = key + ".mp3";
    audio.play();
};
// --si z enfoncé => le son est joué --------

document.addEventListener("keypress", (e) => {
    key.textContent= e.key;
    
    if (e.key === "p") {
        keypressContainer.style.background ="red";
    } else if (e.key === "k") {
        keypressContainer.style.background ="green";
    } else {
            keypressContainer.style.background ="blue";
        }
        if (e.key === "z")
        ring(e.key);
    });

    // --------------------------------------------------------------

    // ---------------scroll events -----------------

    const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        nav.style.top= 0 ;
    } else {
        nav.style.top = "-60px";
    }
    });

    // -----------------------------------------------------

    // ------------------Formulaire--------------

    const inputName = document.querySelector('input[type="text"');
    const select = document.querySelector("select")
    const form = document.querySelector("form")

    let pseudo = "";
    let language = "";

    inputName.addEventListener('input', (e) => {
        pseudo = e.target.value;
    });

    // ---------let pseudo e.target.value = recup du pseudo par console.log-----

    select.addEventListener("input", (e) => {
        language = e.target.value;
        
    })

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        if (cgv.checked) {
            document.querySelector('form > div').innerHTML = `
            <h3>Pseudo : ${pseudo}</h3>
            <h4>Langage préféré : ${language}</h4>
            `;
        } else {
            alert("Veuillez accepter les CGV");
        }
    });

    //  --------- innerHTML injecte des balises dans le HTML -----------

    // ----------------------------------------------------------

    // ----------------- load event -----------------------

    window.addEventListener("load", () => {
        console.log("document chargé !!");
    });
    //  load = pour un evenement après le chargement de la page----

    // ---selection plusieurs elements m^eme nom ou type ou classe---
    //  ----------   + forEach  --------

    const boxes = document.querySelectorAll(".box");
    console.log(boxes);

    boxes.forEach((box) => {
        box.addEventListener('click', (e) => {
            e.target.style.transform = "scale(0.6)";
        })
    });

    // -------------------------------------------------------------

    // ---  addEventListener Vs onclick --- non recommandé-----------

    // document.body.onclick = () => {
    //     console.log("click !!");
    // }

    document.body.addEventListener("click", () => {
        // console.log("click 1");
    });

    document.body.addEventListener("click", () => {
        // console.log("click 2");
    },true);

    // -------------- Stop propagation ---------------

    // questionContainer.addEventListener("click", (e) => {
    //     alert("test !");
    //     e.stopPropagation();
    // });
    // --voir aussi removeEventLister ==> pour enlever un events --------

    // -------------------------------------------------------------------

    // ---------- BOM  ou Browser Object Model ----------
    // ---------- voir video ( window + confirm+ prompt) ----------
    btn2.addEventListener("click", ()=> {
        confirm("voulez vous quitter !!"); /* ok + annuler */
    });

    btn1.addEventListener("click", () => {
        let answer = prompt("Entrez votre pseudo !!");
        questionContainer.innerHTML += "<h3>Bravo " + answer ;
    });

    // --------------- timer , compte à rebours --------

    // setTimeout(() => {
    //     // logique à executer ex= ??
    //     questionContainer.style.borderRadius = "300px";
    //     questionContainer.style.background = "red";
    // }, 3000);



    // let interval = setInterval(() => {
    //     document.body.innerHTML += "<div class='box is-link'><h2> nouvelle boite";
    // }, 1000);

    // document.body.addEventListener("keypress", (e) => {
    //     if (e.key === "z") {
    //         clearInterval(interval)
    //     };
    // });
//  pour info e.target.remove() = elimination de l'element 

// -------------- Location--------

    // console.log(location.href);
    // console.log(location.host);
    // console.log(location.pathname);
    // console.log(location.search);
    // location.replace("http://minecraft.fr");

    // window.onload = () => {
    //     location.href = "https://github.com/public-api-lists/public-api-lists";
    // };


    // https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

    // -------------- history --------
    // console.log(history);
    // window.history.back();
    // history.go(-2);


    // ---------- set property --------------
    window.addEventListener("mousemove", (e) => {
        nav.style.setProperty("--x", e.layerX + "px");
        nav.style.setProperty("--y", e.layerY + "px");
    });