var fakeNumber = ["112 ½", "565", "1313", "164", "720", "742", "221B"];
var fakeStreet = ["Beacon Street", "N. Clinton Drive", "Mockingbird Lane", "N. Dutton Street",  "Sedgewick Road", "Evergreen Terrace", "Baker Street"];
var fakeCity = ["Boston", "Milwaukee", "Mockingbird Heights", "Shermer", "Cleveland", "Springfield", "Princeton"];
var fakeState = ["MA", "WI", "CA", "IL", "OH", "MA", "NJ" ];
var fakeZip = ["02108", "53202", "94952", "60062", "44115", "01101", "08540"];
var fakeNestedArray = [fakeNumber, fakeStreet, fakeCity, fakeState, fakeZip];

var randomPosition = Math.floor(Math.random());
var arrayLength = "";
var addressPiece = "";
var generatedAddress = "";

for(var i = 0; i <= 4; i++) {
  arrayLength = fakeNestedArray[i].length;
  randomPosition = Math.floor(Math.random() * arrayLength);
  addressPiece = fakeNestedArray[i][randomPosition];
    if (i === 1 || i === 3) {
      generatedAddress += (addressPiece + ', ');
    } else if ( i === 4) {
      generatedAddress += (addressPiece);
    } else {
      generatedAddress += (addressPiece + ' ');
    }
}

console.log(generatedAddress)
