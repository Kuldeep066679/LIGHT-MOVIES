document.addEventListener("DOMContentLoaded", function () {
    fetch("movies.json")
        .then(response => response.json())
        .then(data => {
            const movieList = document.getElementById("movie-list");
            data.movies.forEach(movie => {
                let movieItem = document.createElement("div");
                movieItem.innerHTML = `
                    <img src="${movie.poster}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <a href="${movie.stream_url}" target="_blank">Watch Now</a>
                `;
                movieList.appendChild(movieItem);
            });
        });
});
