// Question no: 1
console.log("Question no: 1");
var favoriteMovies = ["Inside Out", "The Shawshank Redemption", "Good Will Hunting", "Finding Nemo", "The Great Dictator"];
console.log(favoriteMovies[1]);

// Question no: 3
console.log("Question no: 2");
var favoriteMoviesArray = new Array(5);
favoriteMoviesArray[0] = "Inside Out";
favoriteMoviesArray[1] = "The Shawshank Redemption";
favoriteMoviesArray[2] = "Good Will Hunting";
favoriteMoviesArray[3] = "Finding Nemo";
favoriteMoviesArray[4] = "The Great Dictator";
console.log(favoriteMoviesArray[0])

// Question no: 3
console.log("Question no: 3");
var favoriteMoviesArray = new Array(5);
console.log("The length of the array before adding = ",favoriteMoviesArray.length)
favoriteMoviesArray[0] = "Inside Out";
favoriteMoviesArray[1] = "The Shawshank Redemption";
favoriteMoviesArray[2] = "Good Will Hunting";
favoriteMoviesArray[3] = "Finding Nemo";
favoriteMoviesArray[4] = "The Great Dictator";
favoriteMoviesArray.splice(2,0,"To Be or Not to Be");
console.log(favoriteMoviesArray);
console.log("Movie is added and the length of array after adding = ",favoriteMoviesArray.length);

// Question no: 4
console.log("Question no: 4");
var favoriteMovies = [];
favoriteMovies[0] = "Inside Out";
favoriteMovies[1] = "The Shawshank Redemption";
favoriteMovies[2] = "Good Will Hunting";
favoriteMovies[3] = "Finding Nemo";
favoriteMovies[4] = "The Great Dictator";
delete favoriteMovies[0];
console.log(favoriteMovies);

// Question no: 5
console.log("Question no: 5");
var favoriteMovies = [];
favoriteMovies[0] = "Inside Out";
favoriteMovies[1] = "The Shawshank Redemption";
favoriteMovies[2] = "Good Will Hunting";
favoriteMovies[3] = "Finding Nemo";
favoriteMovies[4] = "The Great Dictator";
favoriteMovies[5] = "Warrior";
favoriteMovies[6] = "The Wolf of Wall Street";
for (var i in favoriteMovies) {
    console.log(favoriteMovies[i]);
}

// Question no: 6
console.log("Question no: 6");
var favoriteMovies = [];
favoriteMovies[0] = "Inside Out";
favoriteMovies[1] = "The Shawshank Redemption";
favoriteMovies[2] = "Good Will Hunting";
favoriteMovies[3] = "Finding Nemo";
favoriteMovies[4] = "The Great Dictator";
favoriteMovies[5] = "Warrior";
favoriteMovies[6] = "The Wolf of Wall Street";
for (var movie of favoriteMovies) {
    console.log(movie);
}

// Question no: 7
console.log("Question no: 7");
var favoriteMovies = [];
favoriteMovies[0] = "Inside Out";
favoriteMovies[1] = "The Shawshank Redemption";
favoriteMovies[2] = "Good Will Hunting";
favoriteMovies[3] = "Finding Nemo";
favoriteMovies[4] = "The Great Dictator";
favoriteMovies[5] = "Warrior";
favoriteMovies[6] = "The Wolf of Wall Street";
for (var movie of favoriteMovies.sort()) {
    console.log(movie);
}

// Question no: 8
console.log("Question no: 8");
var favoriteMovies = [];
var leastfavoriteMovies= [];
favoriteMovies[0] = "Inside Out";
favoriteMovies[1] = "The Shawshank Redemption";
favoriteMovies[2] = "Good Will Hunting";
favoriteMovies[3] = "Finding Nemo";
favoriteMovies[4] = "The Great Dictator";
favoriteMovies[5] = "Warrior";
favoriteMovies[6] = "The Wolf of Wall Street";
leastfavoriteMovies[0] = "Dances with Wolves";
leastfavoriteMovies[1] = "Blood Diamond";
leastfavoriteMovies[2] = "The Terminator";
console.log("Movies I like: \n");
for (var i in favoriteMovies) {
    console.log(favoriteMovies[i]+"\n");
}
console.log("Movies I regret watching: \n");
for (var i in leastfavoriteMovies) {
    console.log(leastfavoriteMovies[i]+"\n");
}

// Question no: 9
console.log("Question no: 9");
var favoriteMovies = [];
var leastfavoriteMovies= [];
favoriteMovies[0] = "Inside Out";
favoriteMovies[1] = "The Shawshank Redemption";
favoriteMovies[2] = "Good Will Hunting";
favoriteMovies[3] = "Finding Nemo";
favoriteMovies[4] = "The Great Dictator";
favoriteMovies[5] = "Warrior";
favoriteMovies[6] = "The Wolf of Wall Street";
leastfavoriteMovies[0] = "Dances with Wolves";
leastfavoriteMovies[1] = "Blood Diamond";
leastfavoriteMovies[2] = "The Terminator";
movies = favoriteMovies.concat(leastfavoriteMovies);
console.log(movies.sort().reverse());

// Question no: 10
console.log("Question no: 10");
var favoriteMovies = [];
var leastfavoriteMovies= [];
favoriteMovies[0] = "Inside Out";
favoriteMovies[1] = "The Shawshank Redemption";
favoriteMovies[2] = "Good Will Hunting";
favoriteMovies[3] = "Finding Nemo";
favoriteMovies[4] = "The Great Dictator";
favoriteMovies[5] = "Warrior";
favoriteMovies[6] = "The Wolf of Wall Street";
leastfavoriteMovies[0] = "Dances with Wolves";
leastfavoriteMovies[1] = "Blood Diamond";
leastfavoriteMovies[2] = "The Terminator";
movies = favoriteMovies.concat(leastfavoriteMovies);
movies = movies.sort().reverse();
console.log("Last item of the array = ", movies.slice(-1));


// Question no: 11
console.log("Question no: 11");
var favoriteMovies = [];
var leastfavoriteMovies= [];
favoriteMovies[0] = "Inside Out";
favoriteMovies[1] = "The Shawshank Redemption";
favoriteMovies[2] = "Good Will Hunting";
favoriteMovies[3] = "Finding Nemo";
favoriteMovies[4] = "The Great Dictator";
favoriteMovies[5] = "Warrior";
favoriteMovies[6] = "The Wolf of Wall Street";
leastfavoriteMovies[0] = "Dances with Wolves";
leastfavoriteMovies[1] = "Blood Diamond";
leastfavoriteMovies[2] = "The Terminator";
movies = favoriteMovies.concat(leastfavoriteMovies);
movies = movies.sort().reverse();
console.log("First item of the array = : ", movies.shift());

// Question no: 12
console.log("Question no: 12");
var IndicesOfMoviesIDoNotLike = [];
movies.forEach((movie, i) => {
  if (leastfavoriteMovies.includes(movie)) {
    IndicesOfMoviesIDoNotLike.push(i); }
});
var moviesILike = ["Actual People","The Pale Blue Eye","On the Edge"];
IndicesOfMoviesIDoNotLike.forEach((i) => {
    movies[i] = moviesILike.shift();
});
for (var i = 0; i < movies.length; i++) {
    "use strict";
    console.log(movies[i] );
}

// Question no: 13
console.log("Question no: 13");
var moviesMultiDimensionalArr = [["Inside Out", 1],
                ["The Shawshank Redemption", 2],
                ["Good Will Hunting", 3], 
                ["Finding Nemo", 4], 
                ["The Great Dictator", 5]];
var NamesOfMovies = moviesMultiDimensionalArr.filter(function(movie) {
  return typeof movie[0] === "string";
});
console.log(NamesOfMovies.map(movie => movie[0]));

// Question no: 14
console.log("Question no: 14");
var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
var showEmployee = function(employees) {
  console.log("Employees: \n");
  employees.forEach(function(emp) {
    console.log(emp);
  });
};
showEmployee(employees);

// Question no: 15
console.log("Question no: 15");
var valuesArray = [58, '', 'abcd', true, null, false, 0];
var filterValues = function(valuesArray){
    return valuesArray.filter(function(v) {
  return v !== false && v !== null && v !== 0  && v !== "";
});
};
console.log(filterValues(valuesArray));

// Question no: 16
console.log("Question no: 16");
var GenerateRandomNumber = function(value) {
    return value[Math.floor(Math.random() * value.length)];
  };
var numbersArray = [98, 30, 40, 63, 18, 2, 94, 53, 88, 68];
console.log(GenerateRandomNumber(numbersArray));


// Question no: 17
console.log("Question no: 17");
var GenerateLargestNumber = function(value){
    return Math.max(...value);
}
var numbersArray = [98, 30, 40, 63, 18, 2, 94, 53, 88, 68];
console.log(GenerateLargestNumber(numbersArray));


