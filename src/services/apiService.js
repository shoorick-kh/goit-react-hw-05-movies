const KEY = '23a6887a211ddc55a1dd6d751fafcbf6';
const baseUrl = 'https://api.themoviedb.org/3';

function getTrendingMovies() {
  return fetch(`${baseUrl}/trending/movie/day?api_key=${KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`There is no data!`));
    }
  );
}

function getMovieDetails(id) {
  return fetch(`${baseUrl}/movie/${id}?api_key=${KEY}&language=en-US`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`There is no data!`));
    }
  );
}

function getCast(id) {
  return fetch(
    `${baseUrl}/movie/${id}/credits?api_key=${KEY}&language=en-US`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`There is no data!`));
  });
}

function getReviews(id) {
  return fetch(
    `${baseUrl}/movie/${id}/reviews?api_key=${KEY}&language=en-US`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`There is no data!`));
  });
}

function getMovieByQuery(query) {
  return fetch(
    `${baseUrl}/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`There is no data!`));
  });
}

export {
  getTrendingMovies,
  getMovieDetails,
  getCast,
  getReviews,
  getMovieByQuery,
};
