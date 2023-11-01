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
  }
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
nav.classList.toggle('opened');

setTimeout(() => nav.classList.toggle('opened'), 3000);