// film bazasi

const filmlerr = [
  {
    ad: "Spider-man",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: "./img/card-9.jpg",
    category: "action",
  },
  {
    ad: "Fast & furious 10",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: "./img/card-10.jpeg",
    category: "comedy",
  },
  {
    ad: "Source Code",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: "./img/card-4.jpeg",
    category: "action",
  },
  {
    ad: "Suzume no tojimari",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: "./img/card-8.webp",
    category: "drama",
  },

  // hamsini gostermey ucun kodd

  {
    ad: "Spider-man",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: "./img/card-9.jpg",
    category: "all",
  },
  {
    ad: "Fast & furious 10",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: "./img/card-10.jpeg",
    category: "all",
  },
  {
    ad: "Source Code",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: "./img/card-4.jpeg",
    category: "all",
  },
  {
    ad: "Suzume no tojimari",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: "./img/card-8.webp",
    category: "all",
  },
];
// film bazasi bitdi

const elaveet = document.querySelector("#elave-et");
const silbtn = document.querySelector("#sil-btn");
const gosteris = document.querySelector(".gosteriss");
//  - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const allBtn = document.querySelector("#all-btn");
const actionBtn = document.querySelector("#action-btn");
const comedyBtn = document.querySelector("#comedy-btn");
const dramaBtn = document.querySelector("#drama-btn");

let kartlarifilteret = [];

function generateCards() {
  let cardsHTML = "";
  kartlarifilteret.forEach((film) => {
    cardsHTML += `
    <div class="card" style="width: 18rem;">
    <div>
        <img src="${film.image}" class="card-img-top" alt="${film.ad}">
      </div>
    <div style="text-align: center;" class="card-body">
      <h5 class="card-title">${film.ad}</h5>
      <p class="card-text">${film.description}</p>
      <a href="#" class="btn btn-primary">Go to IMGB</a>
    </div>
  </div>
    `;
  });
  gosteris.innerHTML = cardsHTML;
}

function filterFilms(category) {
  kartlarifilteret = filmlerr.filter((film) => film.category === category);
  generateCards();
  
  if (category === "all") {
    showButtons();
  } else {
    hideButtons();
  }
}

function hideButtons() {
  elaveet.style.display = "none";
  silbtn.style.display = "none";
  numberEl.style.display = "none";

}

function showButtons() {
  elaveet.style.display = "none";
  silbtn.style.display = "none";
  numberEl.style.display = "none";

}

allBtn.addEventListener("click", () => {
  filterFilms("all");
});

actionBtn.addEventListener("click", () => {
  filterFilms("action");
});

comedyBtn.addEventListener("click", () => {
  filterFilms("comedy");
});

dramaBtn.addEventListener("click", () => {
  filterFilms("drama");
});

elaveet.addEventListener('click', () => {
  if (kartlarifilteret.length >= 6) {
    elaveet.disabled = true;
    return;
  }

  let randomFilm;
  do {
    const randomFilmIndex = Math.floor(Math.random() * filmlerr.length);
    randomFilm = filmlerr[randomFilmIndex];
  } while (kartlarifilteret.includes(randomFilm));

  kartlarifilteret.push(randomFilm);
  generateCards();
  
  if (kartlarifilteret.length >= 6) {
    elaveet.disabled = true;
  }
});

silbtn.addEventListener('click', () => {
  if (kartlarifilteret.length === 0) {
    elaveet.disabled = false;
    return;
  }

  kartlarifilteret.pop();
  generateCards();
  
  if (kartlarifilteret.length < 4) {
    elaveet.disabled = false;
  }
  
  if (number <= minNumber) {
    decreaseBtn.disabled = true;
  }
});

generateCards();

// sayilarin bir bir artmasi

const numberEl = document.querySelector('.number');
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const maxNumber = 6;
const minNumber = 0;

let number = 0;

increaseBtn.addEventListener('click', () => {
  number++;
  numberEl.textContent = number % filmlerr.length;
  decreaseBtn.disabled = false;
});

decreaseBtn.addEventListener('click', () => {
  number--;
  if (number < 0) {
    number = filmlerr.length - 1;
  }
  numberEl.textContent = number % filmlerr.length;
  
  if (number <= minNumber) {
    decreaseBtn.disabled = true;
  }
});




