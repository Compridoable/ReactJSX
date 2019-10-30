var movies = [
    {
        id: 0,
        title: "Mission: Impossible - Fallout",
        desc: "Konsekwencje zakończonej niepowodzeniem misji IMF może odczuć cały świat. Aby zapobiec katastrofie, Ethan Hunt i jego zespół muszą stanąć do wyścigu z czasem.",
        picture: "https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg"
    },
    {
        id: 1,
        title: "Król Lew",
        desc: "Targany niesłusznymi wyrzutami sumienia po śmierci ojca mały lew Simba skazuje się na wygnanie, rezygnując z przynależnego mu miejsca na czele stada.",
        picture: "https://ssl-gfx.filmweb.pl/po/68/78/6878/7389475.6.jpg"
    },
    {
        id: 2,
        title: "Gra o wszystko",
        desc: "Była narciarka Molly Bloom zakłada najbardziej ekskluzywny, nielegalny klub pokerowy w USA. Pewnego dnia do drzwi bohaterki pukają agenci FBI.",
        picture: "https://images-na.ssl-images-amazon.com/images/I/91QIcXonmyL._SY445_.jpg"
    },
    {
        id: 3,
        title: "The Place",
        desc: "Tajemniczy mężczyzna pomaga nieznajomym w spełnieniu ich najskrytszych marzeń.",
        picture: "https://ssl-gfx.filmweb.pl/po/68/31/796831/7819952.6.jpg"
    }
];

var moviesElements = movies.map(function(movie){
    return(
        <li key={'movie.idReact'}>
            <h2>
                {movie.title}
            </h2>
            <p>
                {movie.disc}
            </p>
            <img src={movie.picture} />
        </li>
    );
});
var element2 = 

<div>
    <h1>
        Lista filmów
    </h1>
    <ul>
        {moviesElement}
    </ul>
</div>


ReactDOM.render(element2, document.getElementById('app2'));