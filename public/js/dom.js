const moviesSection = document.querySelector("#movies");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const newsContainer = document.getElementById("news");

getMovies(arr => {
    const movieArr = [];
    arr.some((element, index) => {
        movieArr.push({
            title: element.title,
            poster: element.poster_path,
            lang: element.original_language,
            overview: element.overview,
            releaseDate: element.release_date,
            movieId: element.id
        });
        return index === 11;

    });

    manageRender("movie", movieArr);
});

function manageRender(check, arr) {
    if (check === "movie") {
        arr.forEach(element => {
            createMovie(element);
        });
    } else if (check === "news") {
        arr.forEach(element => {
            showNews(element);
        });
    }
}

getNews(arr => {
    const newsArr = [];
    // This Method for get specific number of element from original array
    arr.some((element, index) => {
        newsArr.push({
            imageLink: element.urlToImage,
            title: element.title,
            description: element.description,
            source: element.url,
            author: element.author,
            published: element.publishedAt
        });

        return index === 5;
    });

    manageRender("news", newsArr);
});
/* getTrialers(arr,key) => {
    
  
}); */

const createMovie = obj => {
    const movieDiv = document.createElement("div");
    const infoDiv = document.createElement("div");
    movieDiv.classList.add("movie-card");
    infoDiv.classList.add("movie-info");
    const movieTitle = element("h2", obj.title);
    const moviePoster = document.createElement("img");
    moviePoster.setAttribute("alt", "moviesImages");
    const movieLang = element("span", obj.lang);
    const langheading = element("p", "Language :  ");
    langheading.appendChild(movieLang);
    const moviePar = element("p", obj.overview);
    const overviewheading = element("p", "Overview :  ");
    overviewheading.appendChild(moviePar);
    const movieDate = element("span", obj.releaseDate);
    const releaseDateheading = element("p", "Release Date:  ");
    releaseDateheading.appendChild(movieDate);

    moviePoster.src = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${obj.poster}`;
    infoDiv.appendChild(movieTitle);
    movieDiv.appendChild(moviePoster);
    infoDiv.appendChild(langheading);
    infoDiv.appendChild(overviewheading);
    infoDiv.appendChild(releaseDateheading);
    movieDiv.appendChild(infoDiv);
    moviesSection.appendChild(movieDiv);
};



// Create element in browser
const element = (e, content) => {
    let x = document.createElement(e);
    x.textContent = content;
    x.className = "movie-content";
    return x;
};

function showNews(obj) {
    const newsbox = document.createElement("div");
    newsbox.classList.add("news-card");
    const newsImag = document.createElement("img");
    const title = document.createElement("h2");
    const desc = document.createElement("p");
    const source = document.createElement("a");

    // Set attributes
    newsImag.setAttribute("src", obj.imageLink);
    newsImag.setAttribute("alt", "NewsImage");
    title.textContent = obj.title;
    desc.textContent = obj.description;
    source.textContent = "Read More";
    source.setAttribute("href", obj.source);
    source.setAttribute("target", "_blank");

    // Append
    newsbox.appendChild(newsImag);
    newsbox.appendChild(title);
    newsbox.appendChild(desc);
    newsbox.appendChild(source);

    newsContainer.appendChild(newsbox);
}