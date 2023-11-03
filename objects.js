const movies = [
  {
    name: 'Batman Begins',
    imdb: 8.2,
    description: `Batman Begins explores the origins of the Batman legend and the Dark Knight's emergence as a force...`,
    watchUrl: 'url1',
    detailsUrl: 'url2',
    imageSrc: './images/movie1.png',
    tags: ['action', 'adventure'],
  },
  {
    name: 'The Dark Knight',
    imdb: 9.0,
    description: `Christian Bale and director Christopher Nolan reunite following their blockbuster success with...`,
    watchUrl: 'url1',
    detailsUrl: 'url2',
    imageSrc: './images/movie2.png',
    tags: ['action', 'crime', 'drama',]
  },
  {
    name: 'The Dark Knight Rises',
    imdb: 8.4,
    description: `Directing one of the most anticipated films of the year, Christopher Nolan returns to Gotham to complete his...`,
    watchUrl: 'url1',
    detailsUrl: 'url2',
    imageSrc: './images/movie3.png',
    tags: ['action', 'adventure',]
  },
  {
    name: 'Batman Begins 2',
    imdb: 8.2,
    description: `Batman Begins explores the origins of the Batman legend and the Dark Knight's emergence as a force...`,
    watchUrl: 'url1',
    detailsUrl: 'url2',
    imageSrc: './images/movie1.png',
    tags: ['action', 'adventure'],
  },
  {
    name: 'The Dark Knight 2',
    imdb: 9.0,
    description: `Christian Bale and director Christopher Nolan reunite following their blockbuster success with...`,
    watchUrl: 'url1',
    detailsUrl: 'url2',
    imageSrc: './images/movie2.png',
    tags: ['action', 'crime', 'drama',]
  },
];

// DOM - document object model
const moviesContainer = document.querySelector('.movie-cards');
console.log(moviesContainer);

function renderMovieCard(movie) {
  return `
    <div class="movie-card">
      <img src="${movie.imageSrc}" alt="">
      <div class="card-content">
        <div class="movie-details">
          <div class="movie-tags">${movie.tags.join(', ')}</div>
          <div class="title">${movie.name}</div>
          <div class="rating">IMDB:<span>${movie.imdb}</span></div>
          <div class="description">${movie.description}</div>
        </div>
        <div class="movie-links">
          <a href="${movie.watchUrl}" class="link-button small">Watch</a>
          <a href="${movie.detailsUrl}" class="link-button small with-border">Details</a>
        </div>
      </div>
    </div>
  `;
}

for (const movie of movies) {
  const newCard = document.createElement('div');
  moviesContainer.appendChild(newCard);
  newCard.outerHTML = renderMovieCard(movie);
}

const nav = document.querySelector('header nav');

function handleBurgerButtonClick(event) {
  nav.classList.add('opened');
  event.stopPropagation();
  console.log('button');
}

function handleBodyClick() {
  if (nav.classList.contains('opened')) {
    nav.classList.remove('opened');
    console.log('body');
  }
}

const firstMovieCard = moviesContainer.children[0];
const cardWidth = firstMovieCard.offsetWidth;
const gap = 32;
let currentLeftMargin = 0;
let counter = 0;
const maxCounterValue = document.body.clientWidth <= 850 ? 4 : 2;

function handleLeftButtonClick() {
  if (currentLeftMargin === 0) return;

  currentLeftMargin += (cardWidth + gap);
  counter--;
  firstMovieCard.style.marginLeft = `${currentLeftMargin}px`;
  console.log('left');
}

function handleRightButtonClick() {
  if (counter === maxCounterValue) return;

  currentLeftMargin -= (cardWidth + gap);
  counter++;
  firstMovieCard.style.marginLeft = `${currentLeftMargin}px`;
  console.log('right');
}