// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];
const anothers1 = [6, 3, 7, 2, 9, 3, 3, 6, 4, 2, 6, 8, 6, 7, 3, 6]
const anothers2 = [3, 6, 8, 5, 3, 6, 8, 3, 9, 8, 1, 0, 3, 9]
const anothers3 = [3, 5, 2, 9, 2, 7, 0, 3, 3, 5, 4, 7, 1, 2, 2, 1, 6, 4, 6]

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
  anothers1,  
  anothers2,  
  anothers3,    
];

/**
 * This function is responsible for iterating the array, 
 * first the check digits and then the other digits doubling each one, 
 * to finish, the function it adds all the values 
 * and divides by ten, returning the rest 
 */
function validateCred(array) {
  let firstHalf = 0;
  let secondHalf = 0;
  for (let i = array.length - 2; i >= 0; i -= 2) {
    let mult = array[i] * 2;
    mult > 9 ? (firstHalf += mult - 9) : (firstHalf += mult);
  }
  for (let a = array.length - 1; a >= 0; a -= 2) {
    secondHalf += array[a];
  }
  let remainder = (firstHalf + secondHalf) % 10;
  return remainder === 0;
}

/**
 * this function is responsible for getting the nested array
 * and separating the invalid cards by creating a new array through they.
 */
function findInvelidCards(nestedArray) {
  let invalidCards = nestedArray.filter(subArray => {
    if (!validateCred(subArray)) return subArray;
  });
  idInvalidCardCompanies(invalidCards);
}

/***
 * This function assigns the kind of card company the invalid cards possuit
 */
function idInvalidCardCompanies(nestedArray) {
  let companies = []
  for (let array of nestedArray) {
    if (array[0] !== 3 && array[0] !== 4 && array[0] !== 5 && array[0] !== 6) {
      console.log('Company not found')
    } else {
      switch (array[0]) {
        case 3:
          companies.push("American Express");
          break;
        case 4:
          companies.push("Visa");
          break;
        case 5:
          companies.push("Mastercard");
          break;
        case 6:
          companies.push("Discover");
          break;
      }
    }
  }
  companies = [...new Set(companies)];
  return companies
}

findInvelidCards(batch);
//  --- I made this project without stackoverflow or either another help --- //