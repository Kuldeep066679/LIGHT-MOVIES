
const movies = [
  { title: "शेरशाह", video: "movie1.mp4", image: "movie1.jpg" },
  { title: "तान्हाजी", video: "movie2.mp4", image: "movie2.jpg" },
  { title: "उरी", video: "movie3.mp4", image: "movie3.jpg" }
];

const movieGrid = document.getElementById("movieGrid");

movies.forEach(movie => {
  const div = document.createElement("div");
  div.className = "movie";
  div.innerHTML = `<a href="watch.html?video=${movie.video}&title=${encodeURIComponent(movie.title)}">
    <img src="assets/images/${movie.image}" alt="${movie.title}"></a>`;
  movieGrid.appendChild(div);
});
