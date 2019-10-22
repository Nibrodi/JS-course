const categories = ["Драма", "Комедия", "Фантастика", "Хоррор", "Детективы"];
const films = [];

class Comment {
    constructor(text, author, stars) {
        this.text = text;
        this.author = author;
        this.stars = stars;
    }
}

class Film {
    constructor(name, cat) {
        this.name = name;
        this.category = categories[cat];
        this.budget = 0;
        this.expertStars = 0;
        this.comments = [];
        this.cover = `img/${this.name}.jpg`;
    }
    addComment(text, author, stars) {
        this.comments.push(new Comment(text, author, stars));
    }
    getAvarageStars() {
        let sumStars = 0;
        this.comments.forEach( comment => sumStars = sumStars + comment.stars);
        return (this.comments.length > 0) ? sumStars / this.comments.length : 0;
    }
}

films.push(new Film("Титаник", 0));
films[0].addComment("Наконец-то нашелся предлог обнять девушку ;D", "Анон", 10);
films[0].addComment("Ох! Пою с душе саундтрек из этого фильма", "Лизонька", 8);

films.push(new Film("Джокер", 0));
films[1].addComment("Я бы посоветовал этот фильм друзьям", "Анон", 9);

films.push(new Film("Криминальное чтиво", 4));
films[2].addComment("Этот фильм нужно включить в образовательную школьную программу", "Знаток", 10);
films[2].addComment("Тарантино в наших сердцах <3", "Кинолюб", 10);

films.push(new Film("Смерть Сталина", 1));
films[3].addComment("И смешно и грустно", "Знаток", 10);
films[3].addComment("Хорошо переданное ощущение абсурдности", "ИМХО", 10);
films[3].addComment("Хахаха! 10 из 10", "Анон", 10);

films.push(new Film("Третий лишний", 1));
films[4].addComment("Очень пОшло, а потом как пошлО", "Анон", 4);
films[4].addComment("Под пиво и не такое можно смотреть", "Сталкер", 3);
films[4].addComment("Мама прости, но я это посмотрел", "Школьник", 9);

films.push(new Film("Интерстеллар", 2));
films[5].addComment("Просто космос", "Космос", 10);
films[5].addComment("Музыка Ханса Циммера всегда на высоте", "Меломан", 10);
films[5].addComment("Не зашло", "Аноним", 1);
films[5].addComment("Обязательно к просмотру каждому уважающему себя современному человеку", "Знаток", 10);

films.push(new Film("Пила", 3));
films[6].addComment("Старье конечно, но посмеялся", "Уважаемый", 7);
films[6].addComment("Купил сыну такой же велосипед, теперь сам пугаюсь по ночам, когда иду в туалет", "Борис", 10);


function getFilmsByCategory(cat) {
    const newFilms = [];
    for (let film of films) {
        if (film.category === cat) {
            newFilms.push(film);
        }
    }
    return newFilms;
}
