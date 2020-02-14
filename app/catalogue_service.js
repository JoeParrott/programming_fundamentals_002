// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];

function countBooks() {
  return catalogue.length // Your code here
}

function checkBook(book) {
  for(let i = 0; i < catalogue.length; i++) {
    const titles = catalogue[i];
    if (titles === book) {
      return true
      }
    }
    return false;
  }

function countBooksByFirstLetter(letter) {
  let total = 0;                                      // established a count
      for (let i = 0; i < catalogue.length; i++) {    // started the loop
       const titles = (catalogue[i].charAt(0));       // defined titles as the returned looping variables and looking at first letter only
        if (letter === titles){                       // if conditional leading to count
          total++;                                    // adding to total
        }                                 
      }
  return total;                                       // return count (has to be outside of the function*!!!!)
}

function countBooksByKeyword(keyword) {
  let totalKeywords = 0;
    for (let i = 0; i <catalogue.length; i++) {
                                         // loop is going to execute all of this block for every entry in catalogue, lets point it to catalogue / do we need a loop if the .match() method is working and how do we return this value
      if (catalogue[i].toLowerCase().match(keyword.toLowerCase())) {
        totalKeywords++;
      }
        // is this a legal way of doing such a statement? how do methods work in terms of output??
                                       // is this if statement even needed? is a loop + count cycle required? could it be done with other methods, .find .filter or other string methods
                                        // will this have returned number values for both objects? it should have!
        }
        return totalKeywords
  }


function getBooksByAuthor(authName) {
  let biblio = [];
  for (i=0; i <catalogue.length; i++) {
    // search for includes authName
    if (catalogue[i].includes(authName)) {
    //push catalogue entry to our bibliography
      biblio.push(catalogue[i]);
    }

  }
  return biblio
}

module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};
