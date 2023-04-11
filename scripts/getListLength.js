var files;
var names;
var tags;

var searchTags = [sessionStorage.getItem("myStringKey")];
console.log(searchTags)
function createListFromCSV(file, columns, callback) {
  fetch(file)
    .then((response) => response.text())
    .then((text) => {
      var results = Papa.parse(text, {
        header: true,
      });

      var data = results.data;
      var actualColumns = results.meta.fields;

      var list = [];
      for (var i = 0; i < data.length; i++) {
        var item = [];
        for (var j = 0; j < columns.length; j++) {
          var column = columns[j];
          var actualColumn = actualColumns.find(
            (c) => c.toLowerCase() === column.toLowerCase()
          );
          if (
            actualColumn &&
            data[i].hasOwnProperty(actualColumn) &&
            data[i][actualColumn].trim() !== ""
          ) {
            item.push(data[i][actualColumn]);
          }
        }
        if (item.length > 0) {
          list.push(item);
        }
      }

      callback(list);
    });
}

//startGame
function startGame() {
  progress++;
  document.addEventListener(
    "wheel",
    function (event) {
      event.preventDefault();
    },
    { passive: false }
  );
}

createListFromCSV(
  "https://what-the-flag-csv.pages.dev/FilesNamesTags.csv",
  ["file"],
  function (list) {
    var files = list;
    console.log(files);

    createListFromCSV(
      "https://what-the-flag-csv.pages.dev/FilesNamesTags.csv",   
      ["name"],
      function (list) {
        var names = list;
        console.log(names);

        createListFromCSV(
          "https://what-the-flag-csv.pages.dev/FilesNamesTags.csv",
          [
            "category",
            "disputed",
            "territory",
            "all",
            "canton",
            "star",
            "emblemFlag",
            "red white blue",
            "world",
            "worldDisputed",
            "worldTerritories",
            "worldAll",
            "copyright",
            "style",
            "allFiles",
          "include"          ],
          function (list) {
            var tags = list;
            console.log(tags);

            var imageArray = [];
            for (var i = 0; i < files.length; i++) {
              imageArray.push({
                filename: files[i],
                name: names[i],
                tags: tags[i],
              });
            }

            console.log(imageArray);

            function searchImagesByTags(searchTags) {
              var matchingFilenames = [];
              var matchingImageNames = [];
              imageArray.forEach(function (image) {
                var matchFound = true;
                searchTags.forEach(function (searchTag) {
                  if (!image.tags.includes(searchTag) || image.tags.includes('includeNo')) {
                    matchFound = false;
                  }
                });
                if (matchFound) {
                  matchingFilenames.push([image.filename]);
                  matchingImageNames.push([image.name]);
                }
              });
              return {
                matchingFilenames: matchingFilenames,
                matchingImageNames: matchingImageNames,
              };
            }
            

            

            var results = searchImagesByTags(searchTags);
            var results2 = searchImagesByTags(searchTags);
            var results3 = searchImagesByTags(searchTags);
            var results4 = searchImagesByTags(searchTags);

            console.log(results2)

            const matchingFilenames = results.matchingFilenames;
            const matchingImageNames = results.matchingImageNames;
            console.log(matchingFilenames);
            console.log(matchingImageNames);

            // for whatever reason, the function must be called individually for each list variable. Calling it just once and then assigning that call to all variables does not work; countryList2 and length 2 will be sliced when doing that which causes the game to not work properly anymore once there are less than 3 items in each list. I don't know why, but this way, it works.
            const list1 = results.matchingFilenames;
            const list2 = results2.matchingImageNames;
            const list3 = results3.matchingImageNames;
            const list4 = results4.matchingImageNames;

            

            var flagList = list1; //flagList is the List that contains the image file names. Will be spliced

            var countryList = list2; // countryList is the list that contains the Names for each image file. Name for the correct button is gotten from this list. Will be spliced

            var countryList2 = list3; // countryList2 also contains the names for the image files. The text for the three wrong buttons is gotten from here. Will not be spliced because the pool for the wrong answers should always be the same. If not, the wrong buttons will eventually be filled with "undefined" because there would be nothin to choose left in the list. It would also reduce the variety of answers and therefore make the game less fun and exciting. Will not be spliced

            var length2 = list4; //length2 also contains the names for the image files. length2 is only used to get the original length/amount of flags that is being played with (e.g. to display the finish image). Will not be spliced
            const button4 = document.getElementById('button4')
            var total = length2.length;
            console.log(length2.length)
            
            button4.innerHTML = 'All (' + total + ')'
            console.log('total: ', total)


            console.log("flagList", flagList);
            console.log("countryList", countryList);
            console.log("countryList2", countryList2);
            console.log("length2", length2);


            const buttons2 = document.querySelectorAll('.checkbox');
            for (let button of buttons2) {
          button.addEventListener('change', function() {
            if (this.checked) {
              sessionStorage.setItem('selectedButton', this.value);
              console.log(`Selected value: ${sessionStorage.getItem('selectedButton')}`);
            }
          });
        }
        

            




          }
        );
      }
    );
  }
);
