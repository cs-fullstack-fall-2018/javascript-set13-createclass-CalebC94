class Movie{
    constructor(movieName, rating, yearReleased){
        this.movieName = movieName;
        this.rating = rating;
        this. yearReleased = yearReleased;

    }
    printAllAttributes(){
        return (this.movieName + ", rating: " + this.rating + " stars, " + this.yearReleased);
    }

}

function main(){
    var horrorMovie = new Movie("It Follows", 4, 2014);
    var actionMovie = new Movie("Logan", 4, 2017);

    alert(horrorMovie.printAllAttributes());
    alert(actionMovie.printAllAttributes());

    console.log(horrorMovie.printAllAttributes());
    console.log(actionMovie.printAllAttributes());


}

main();