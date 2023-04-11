
var results = searchImagesByTags(searchTags);
var results2 = searchImagesByTags(searchTags);
var results3 = searchImagesByTags(searchTags);
var results4 = searchImagesByTags(searchTags);

const matchingFilenames = results.matchingFilenames;
const matchingImageNames = results.matchingImageNames;
console.log(matchingFilenames);
console.log(matchingImageNames);

// for whatever reason, the function must be called individually for each list variable. Calling it just once and then assigning that call to all variables does not work; countryList2 and length 2 will be sliced when doing that which causes the game to not work properly anymore once there are less than 3 items in each list. I don't know why, but this way, it works.
const list1 = results.matchingFilenames;
const list2 = results2.matchingImageNames;
const list3 = results3.matchingImageNames;
const list4 = results4.matchingImageNames;

var flagList = list1 //flagList is the List that contains the image file names. Will be spliced

var countryList = list2 // countryList is the list that contains the Names for each image file. Name for the correct button is gotten from this list. Will be spliced

var countryList2 = list3 // countryList2 also contains the names for the image files. The text for the three wrong buttons is gotten from here. Will not be spliced because the pool for the wrong answers should always be the same. If not, the wrong buttons will eventually be filled with "undefined" because there would be nothin to choose left in the list. It would also reduce the variety of answers and therefore make the game less fun and exciting. Will not be spliced

var length2 = list4 //length2 also contains the names for the image files. length2 is only used to get the original length/amount of flags that is being played with (e.g. to display the finish image). Will not be spliced

console.log("flagList", flagList)
console.log("countryList", countryList)
console.log("countryList2", countryList2)
console.log("length2", length2)


var currentFlag = 0;
var score = 0;
var progress = 0;