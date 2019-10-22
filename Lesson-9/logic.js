
const opennedFilms = {};

document.addEventListener("DOMContentLoaded", function () {
    for (let category of categories) {
        const newEl = document.createElement("div");
        newEl.classList.add("category");
        newEl.innerText = category;
        newEl.addEventListener("click", function () {
            onCategoryChoice(category);
        });
        document.querySelector(".categories").appendChild(newEl);
    }
});

function onCategoryChoice(categoryName) {
    document.querySelector(".films").innerHTML = ("");
    const films = getFilmsByCategory(categoryName);
    for (let film of films) {
        renderFilm(film);
    }
}

function renderFilm(film) {
    const newEl = document.createElement("div");
    newEl.classList.add("film");
    newEl.innerHTML = `<div class="wrap-for-wrap">
                         <div class="wrap">
                            <div class="film-name">${film.name}</div>
                            <img height="300" width="200" src="${film.cover}" alt="${film.name}">
                         </div>
                         <div>
                            <p>Оценка</p>

                            0 <progress value="${film.getAvarageStars()}" max="10">${film.getAvarageStars()} из 10</progress> 10

                         </div>
                       </div>`;

    newEl.addEventListener("click", function () {
        onFilmClick(film, newEl);
    });

    document.querySelector(".films").appendChild(newEl);
}

function onFilmClick(film, newEl) {
    if (opennedFilms.hasOwnProperty(film.name) && opennedFilms[film.name] === true) {
        newEl.innerHTML = `<div class="wrap-for-wrap">
                         <div class="wrap">
                            <div class="film-name">${film.name}</div>
                            <img height="300" width="200" src="${film.cover}" alt="${film.name}">
                         </div>
                         <div>
                            <p>Оценка</p>

                            0 <progress value="${film.getAvarageStars()}" max="10">${film.getAvarageStars()} из 10</progress> 10

                         </div>
                       </div>`;
        opennedFilms[film.name] = false;
    } else {
        openFilmCard(film, newEl);
        opennedFilms[film.name] = true;
    }
}

function openFilmCard(film, newEl) {
    const comments = getFilmComments(film.name);
    let s = "";
    comments.forEach(c => {
        s += `<div class="comment"><span class="comment-author">${c.author}</span>: ${c.text}. Cтавлю этому фильму <strong>${c.stars} из 10</strong>!</div>`
    });
    newEl.innerHTML += `<div class="film-comments">${s}</div>`;

    const addCommentButton = document.createElement("button");
    addCommentButton.innerText = "Добавить отзыв";
    addCommentButton.addEventListener("click", function (event) {
        event.stopPropagation();
        const commentForm = renderCommentForm(film);
        newEl.appendChild(commentForm);
        newEl.removeChild(addCommentButton);
    });
    newEl.appendChild(addCommentButton);
}

function getFilmComments(filmName) {
    const film = getFilmByName(filmName);
    return film.comments;
}

function renderCommentForm(film) {
    const content = `<div class="form-tiltle">Напишите отзыв для фильма "${film.name}"</div>
                     <div class="form-body">
                        <input id="author-${film.name}" class="form-author" placeholder="Ваше имя">
                        <input id="comment-${film.name}" placeholder="Ваш отзыв" class="form-comment">
                        <input id="stars-${film.name}" placeholder="от 1 до 10">
                        <button onclick="onAddCommentCLick('${film.name}')">Отправить</button>
                     </div>`;
    const form = document.createElement("div");
    form.classList.add("comment-form");

    form.addEventListener("click", function (event) {
        event.stopPropagation();
        form.classList.add("chosen");
    });

    form.innerHTML = content;
    return form;
}

function getFilmByName(filmName) {
    return films.filter(f => f.name === filmName)[0];
}

function onAddCommentCLick(name) {
    const authorValue = document.getElementById(`author-${name}`).value;
    const commentValue = document.getElementById(`comment-${name}`).value;
    const starsValue = parseInt(document.getElementById(`stars-${name}`).value);
    if (starsValue > 0 && starsValue < 11) {
        const film = getFilmByName(name);
        film.addComment(commentValue, authorValue, starsValue);
        onCategoryChoice(film.category);
    } else {
        document.getElementById(`stars-${name}`).value = 'неверно';
    }
}
