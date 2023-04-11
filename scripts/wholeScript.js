//initialize some variables that are needed later on in the code
var files;
var names;
var tags;

function openPopup() {
  document.getElementById("popup").style.display = "block";
  setTimeout(() => {
    document.getElementById("popup-content").classList.add("show");
    var customContent = document.getElementById("popup-content");
    if (searchTags == "usa") {
      customContent.innerHTML = "  <div class='flexEnd2'> <span onclick='closePopup()' class='material-symbols-outlined' style='color: black;'> close </span> </div> <h1 style='color: black;'>The American state flags</h1> <p class='infoText'>The United States has 50 first- level subdivisions, the states that make up the country. Each of them has its own flag.</p class='infoText'> <img class='map' src='info_media/us_map.png'> <div class='grid-container'> <div class='grid-item'><img class='imgGrid' src='info_media/utah.png'></div> <div class='grid-item'><img class='imgGrid' src='info_media/montana.png'></div> <div class='grid-item'><img class='imgGrid' src='info_media/oregon.png'></div> <div class='grid-item'><img class='imgGrid' src='info_media/new_hampshire.png'></div> </div> <p class='infoText'>The US states are infamous for their 'seal on a bedsheet' flags which are flags that only consist of a monochrome banner with the state seal in the center. You can see four examples above. This is not regarded as a good flag design practice since it's really uncreative and they are not easy to distinguish. However, there are also some really well- made flags like these ones: </p class='infoText'> <div class='grid-container'> <div class='grid-item'><img class='imgGrid' src='info_media/california.png'></div> <div class='grid-item'><img class='imgGrid' src='info_media/south_carolina.png'></div> <div class='grid-item'><img class='imgGrid' src='info_media/new_mexico.png'></div> <div class='grid-item'><img class='imgGrid' src='info_media/texas.png'></div> </div> <p class='infoText'>Not all state flags always looked the way they do today. These flags changed in the recent years: </p> <img src='info_media/ms_change.JPG'><br><img src='info_media/ut_change.JPG'><br><img src='info_media/ga_change.JPG'> <p class='infoTextDescription'>Mississippi flag: By Rocky Vaughn, Sue Anna Joe, Dominique Pugh, Clay Moss, Kara Giles, and the Mississippi Department of Archives and History - Own work using: https://www.mdah.ms.gov/msflag, Copyrighted free use, <a href='https://commons.wikimedia.org/w/index.php?curid=93776737'>https://commons.wikimedia.org/w/index.php?curid=93776737</a></p> ";
    } else if (searchTags == "korea") {
      customContent.innerHTML = " <div class='flexEnd2'> <span onclick='closePopup()' class='material-symbols-outlined' style='color: black;'> close </span> </div><h1 style='color: black;'>The Korean province flags</h1> <img class='map' src='info_media/kr_map.png'> <p class='infoText'>The republic of Korea (commonly referred to as South Korea) is divided into 16 first- level subdivions. They have ... interesting flags that might remind some more of logos than actual flags. That being said, if you know how to read Hangeul, the Korean alphabet, you're gonna have an easy time playing this quiz since most flags have the name of the province they belong to written on them. if you don't, well then probably not so much :D</p class='infoText'> <p class='infoText'>Map by Sofiasean560 wiki - Own work, CC BY-SA 4.0, <a href='https://commons.wikimedia.org/w/index.php?curid=83797170'>https://commons.wikimedia.org/w/index.php?curid=83797170</a></p class='infoText'>";
    } 

    else if (searchTags == 'canada'){
      customContent.innerHTML = "<div class='flexEnd2'> <span onclick='closePopup()' class='material-symbols-outlined' style='color: black;'> close </span> </div><h1 style='color: black'>The Canadian flags</h1> <img class='map' src='info_media/canada_map.png'> <p class='infoText'>Canada is divided into ten provinces and three territories. Their flags resemble the vivid history of the country and the different cultural influences the regions were subject to and even though they are right next to the US, their style is vastly different from the state flags of their neighbor. </p class='infoText'>"
    }
    
    else if (searchTags == 'germany'){
      customContent.innerHTML = "<div class='flexEnd2'> <span onclick='closePopup()' class='material-symbols-outlined' style='color: black;'> close </span> </div> <h1 style='color: black'>The German state flags</h1> <img class='map' src='info_media/germany_map.png'> <p class='infoText'>Germany is comprised of 16 states, 3 of which (Berlin, Bremen and Hamburg) are city states. Until 1990, there were two German countries, East and West Germany. After the socialist regime in the East collapsed, Germany was reunified and the new states that had joined Western Germany received new flags, so some of these flags are actually quite young. The others however, can also not be considered particulary old since most of them got adopted after WWII. This quiz shows all flags in the 'state version', meaning with the coat of arms of their respective state on them but most flags also have a 'civil version' without a coat of arms. </p class='infoText'> <img class='map' src='info_media/german_state_flags.jpg'> <p class='infoTextDescription'>German state flags flying</p> <p class='infoText'>Map by Escondites - Image:Karte Bundesrepublik Deutschland.svg, CC BY-SA 2.0 de, <a href='https://commons.wikimedia.org/w/index.php?curid=3300714'>https://commons.wikimedia.org/w/index.php?curid=3300714</a></p class='infoText'>"
    }

    else if (searchTags == 'australia'){
      customContent.innerHTML = "<div class='flexEnd2'> <span onclick='closePopup()' class='material-symbols-outlined' style='color: black;'> close </span> </div> <h1 style='color: black'>The Australian flags</h1> <img class='map' src='info_media/australia_map.png'> <p class='infoTextDescription'>By DavidEye - Own work, CC BY-SA 4.0, <a href='https://commons.wikimedia.org/w/index.php?curid=77368703'>https://commons.wikimedia.org/w/index.php?curid=77368703</a></p> <p class='infoText'>Australia consists of 6 states and 2 territories. It also owns several offshore territories like the Cocos Islands for example, but these are not included here since they are not proper incorporated subdivisions of Australia. The Most Australian state and territory flags are similar to the national flag, which features a UK flag in the canton and the <a href='https://en.wikipedia.org/wiki/Crux#Flags_and_symbols'>Southern Cross</a> in the field. </p class='infoText'> <img class='infoImage' src='info_media/australia.jpg'> <p class='infoTextDescription'>Flag of Australia</p> <p class='infoText'>Most Australian subdivision flags got adopted towards the end of the 19th century, but some are from the mid- 20th century.</p class='infoText'>"
    }

    else if (searchTags == 'japan'){
      customContent.innerHTML = " <div class='flexEnd2'> <span onclick='closePopup()' class='material-symbols-outlined' style='color: black;'> close </span> </div> <h1 style='color: black'>The Japanese prefecture flags</h1> <img class='map' src='info_media/japan_map.png'> <p class='infoText'>Japan is divided into 47 first- level administrative divsions called '都道府県' which is usually translated as 'prefecture'. Most of their flags got adopted in the 1960s and have a relatively consistent design philosophy: A symbol, a <a href='https://en.wikipedia.org/wiki/Mon_(emblem)'>Mon</a> (a Japanese emblem) or a stylized character of the Japanese writing system (sometimes everything at once) on a monochrome banner. I can't give you examples here because that would reveal the answers to the flags (and therefore give you free points :D), but <a href='https://second.wiki/wiki/liste_japanischer_prc3a4fektursymbole'>here</a> is an overview of all flags and their hidden meanings. The symbols are unique in the sense that they are a lot more simplistic than Western emblems and coats of arms; some might even say that they resemble company logo design.</p> "
    }

    else if (searchTags == 'soviet'){
      customContent.innerHTML = " <div class='flexEnd2'> <span onclick='closePopup()' class='material-symbols-outlined' style='color: black;'> close </span> </div> <h1 style='color: black'>The Soviet SSR flags</h1> <img class='map' src='info_media/ussr_map.png'><p class='infoTextDescription'>By Hellerick - Own work, based on Natural Earth data., CC BY-SA 3.0, <a href='https://commons.wikimedia.org/w/index.php?curid=28521990'>https://commons.wikimedia.org/w/index.php?curid=28521990</a></p> <p class='infoText'>The Soviet Union was a union of so- called 'Soviet Socialist Republics' which nominally were all equal but de facto ruled by the Russian SSR. Their flags are jokingly called 'copy & paste' flags because they are all a modified version of the national flag of the Soviet Union: </p> <img src='info_media/ussr.webp'> <p class='infoText'>After the collapse of the Soviet Union, all post- soviet countries changed their flag to a completely different design than what their SSR flag had been, except for one (and after plaing this quiz, you will probably know whihc one). <p class='infoText'>Note: The Karelo-Finnish SSR, a lesser known SSR, only existed from 1940–1956 and its flag was in use from 1953–1956</p> </p>"
    }
    else {
      customContent.innerHTML = "There was an error. Please try refreshing the page!";
    }
  }, 10);
}

  
    function closePopup() {
      document.getElementById("popup").style.display = "none";
      document.getElementById("popup-content").classList.remove("show");
    }

    function openPopup2() {
      document.getElementById("popup2").style.display = "block";
      setTimeout(() => {
        document.getElementById("popup-content2").classList.add("show");
      }, 10);
    }
  
    function closePopup2() {
      document.getElementById("popup2").style.display = "none";
      document.getElementById("popup-content2").classList.remove("show");
    }


//get the game mode which was stored in the cache so that the script knows which filenames it needs to get from the database
var searchTags = [sessionStorage.getItem("myStringKey")];
console.log(searchTags)

//set folders where files should be gotten from in the "emblems" game mode (some emblems are too large as svgs so there are png versions in different sizes)
if (searchTags == 'emblem' && window.innerHeight < 2000){
  var sourceFolder = "imageFiles/emblemFiles900/"
}

else if (searchTags == 'emblem' && window.innerHeight > 2000){
  var sourceFolder = "imageFiles/emblemFiles600/"
}

// if the game mode is not "eemblems", then the 'normal' folder is picked
else if(searchTags != 'emblem'){
var sourceFolder = "imageFiles/flagsFiles/"
}

//if an error with the search tag occurs (might occur due to cache errors), the user is prompted to go back to the start page
else{
  alert("An error occurred. Please return to the start page and try again.")
}

//this function gets the data from the CSV file, but I have no idea how it works :D (ChatGPT wrote it)
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

//startGame function
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


//the createListfromCSV function is being executed. Because it uses asynchronous parsing, its variables cannot be accessed outside of the functions. So I just put them all into one ^^. This is probably not the best idea, but it was the only way to make this work
createListFromCSV( //get filenames
  "https://what-the-flag-csv.pages.dev/FilesNamesTags.csv",
  ["file"],
  function (list) {
    var files = list;

    createListFromCSV( //get names
      "https://what-the-flag-csv.pages.dev/FilesNamesTags.csv",
      ["name"],
      function (list) {
        var names = list;

        
        createListFromCSV( //get copyright links
          "https://what-the-flag-csv.pages.dev/FilesNamesTags.csv",
          [
          "copyrightLink"
          ],
          function (list) {
            var attribution1 = list;

        createListFromCSV( //get tags
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
            "include"
          ],
          function (list) {
            var tags = list;

            //put all the information (filenames, names, links and tags) that belongs together into one array element to order everything. This creates a database from the CSV file that JavaScript can use
            var imageArray = [];
            for (var i = 0; i < files.length; i++) {
              imageArray.push({
                filename: files[i],
                name: names[i],
                tags: tags[i],
                attribution2: attribution1[i]
              });
            }


            //search the database for the specified tags
            function searchImagesByTags(searchTags) {
              var matchingFilenames = [];
              var matchingImageNames = [];
              var matchingAttr = []
              imageArray.forEach(function (image) {
                var matchFound = true;
                searchTags.forEach(function (searchTag) {
                  if (!image.tags.includes(searchTag) || image.tags.includes('includeNo')) { //if the tags include "includeNo", the file will not be included ("includeNo" will be in the "include" column and can be used to take flags out of the game)
                    matchFound = false;
                  }
                });
                if (matchFound) { //if a file that contains the specified tag is found, its relevant information is added to the "matchingFilenames" list
                  matchingFilenames.push([image.filename]);
                  matchingImageNames.push([image.name]);
                  matchingAttr.push([image.attribution2])
                }
              });
              return { //returning the matches to the function
                matchingFilenames: matchingFilenames,
                matchingImageNames: matchingImageNames,
                matchingAttr: matchingAttr,
              };
            }
            

            //running the function
            var results = searchImagesByTags(searchTags);

            //assign variables to the lists inside the function that store the needed information
            const list1 = results.matchingFilenames;
            const list2 = results.matchingImageNames;
            const list3 = results.matchingImageNames;
            const list4 = results.matchingImageNames;
            const list5 = results.matchingAttr;


            var flagList = list1; //flagList is the List that contains the image file names. Will be spliced

            var countryList = list2; // countryList is the list that contains the Names for each image file. Name for the correct button is gotten from this list. Will be spliced

            var countryList2 = list3; // countryList2 also contains the names for the image files. The text for the three wrong buttons is gotten from here. Will not be spliced because the pool for the wrong answers should always be the same. If not, the wrong buttons will eventually be filled with "undefined" because there would be nothin to choose left in the list. It would also reduce the variety of answers and therefore make the game less fun and exciting. Will not be spliced

            var length2 = list4; //length2 also contains the names for the image files. length2 is only used to get the original length/amount of flags that is being played with (e.g. to display the finish image). Will not be spliced
            
            var attrList = list5

            
            //things needed later on
            let n = sessionStorage.getItem("selectedButton");
            var selectedElements1 = [];
            var selectedElements2 = [];
            var selectedElements3 = []

            
            //this next portion of code shuffles the items inside the list. This is necessary if the user doesn't play with all possible flags but only with 10, 20 or 30/50. The items in the list are being shuffled and then thee first x items are taken from it. And because they are being shuffleed, the flags that are being played with will be different every time
            var indices = Array.from(Array(flagList.length).keys());

            for (let i = indices.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [indices[i], indices[j]] = [indices[j], indices[i]];
            }

            // Take the first n elements from the shuffled indices array
            indices = indices.slice(0, n);

            // Use the indices to select elements from flagList and countryList
            for (let i = 0; i < n; i++) {
              selectedElements1.push(flagList[indices[i]]);
              selectedElements2.push(countryList[indices[i]]);
              selectedElements3.push(attrList[indices[i]]);
            }
            //

            //some game modes start immedeately after selecting it and have no pregame menu (this is the case when there are too few flags for the pregame menu to make sense). In that case, the selection value is set to 1000, so there will be 1000 elements in the list that contains the files to include. But only the actual databse entries will have a defined values and the rest will be undefined. This must be done to get the script to work with all game mdoes regardless whether they offer the possibility to select an amount of flags to play with

            var selectedElements1 = selectedElements1.filter(
              (el) => el !== null && el !== undefined
            );
            var selectedElements2 = selectedElements2.filter(
              (el) => el !== null && el !== undefined
            );
            var selectedElements3 = selectedElements3.filter(
              (el) => el !== null && el !== undefined
            );
            //

            //defining the final variables after shuffling that are needed later on
            var attrListFinal = selectedElements3; //list that contains the attribution links
            var flagList = selectedElements1; //list that contains the filenames
            var countryList = selectedElements2; //list that contains the names (will be spliced)
            var length2 = selectedElements2; //'control list' of names (will not be spliced)
            var total = length2.length; //list used to check the total amount of flags (will not be spliced)
            var currentFlag = 0; //stores the position of the current flag file within its list
            var score = 0; //stores the score (each correct flag earns one point)
            var progress = 1; //stores how many flags have already been guessed
            var clickCount = 0; //stores a value that is needed to determine whether an attribution link has been viewed (explanation in the relevant part of the code)
            var scoreNew = document.getElementById('score') //stores the updated score
            scoreNew.style.color = "white"
            //

            //the next portion of code defines the content of the info button popup
            var div = document.getElementById("popup-content");

            div.addEventListener("mousewheel", function(event) { //no scrolling in the popup
              event.preventDefault();
              div.scrollTop += event.deltaY;
            });
            
            

            //only show the info button in some game modes
            var infoBtn = document.getElementById('infoButton')
if (searchTags == 'usa' || searchTags == 'canada' || searchTags == 'germany' || searchTags == 'australia' || searchTags == 'japan' || searchTags == 'soviet'){
  infoBtn.classList.add('info-show')
}

else {
}

            //run the displayFlag function for the first time to start the game
            displayFlag();

            function checkGuess() {
              var pointsYesNo = localStorage.getItem('noPoints') 
              progress++;

              if (this.innerHTML == countryList[currentFlag]) { //if the innerHTML of the clicked button matches the name that corresponds to the position (random number) that was picked in the "displayFlag" function, this happens:
                
                if (pointsYesNo == 'false'){ //if the attribution link was viewed, the pointsYesNo variable in the cache is set to "true" and no point will be granted
                score++;
                }

                else {
                 
                }

                this.style.backgroundColor = "green"; //button turns green

                //getting the buttons
                const guess1 = document.getElementById("guess1");
                const guess2 = document.getElementById("guess2");
                const guess3 = document.getElementById("guess3");
                const guess4 = document.getElementById("guess4");

                //disabling buttons so that they can only be clicked once for each flag
                guess1.disabled = true;
                guess2.disabled = true;
                guess3.disabled = true;
                guess4.disabled = true;

                //removing the used filename, name and attribution from their list so that they can't be picked again
                flagList.splice(currentFlag, 1);
                countryList.splice(currentFlag, 1);
                attrListFinal.splice(currentFlag, 1);

              } else {
                this.style.backgroundColor = "red"; //button turns red if it was wrong

                const guess1 = document.getElementById("guess1");
                const guess2 = document.getElementById("guess2");
                const guess3 = document.getElementById("guess3");
                const guess4 = document.getElementById("guess4");

                let String = countryList[currentFlag].toString();

                //if the wrong button was clicked, the correct button turns green
                if (guess1.innerHTML == String) {
                  guess1.style.backgroundColor = "green";
                } else if (guess2.innerHTML == String) {
                  guess2.style.backgroundColor = "green";
                } else if (guess3.innerHTML == String) {
                  guess3.style.backgroundColor = "green";
                } else if (guess4.innerHTML == String) {
                  guess4.style.backgroundColor = "green";
                }

                //disabling buttons so that they can only be clicked once for each flag
                guess1.disabled = true;
                guess2.disabled = true;
                guess3.disabled = true;
                guess4.disabled = true;

                //removing the used filename, name and attribution from their list so that they can't be picked again
                flagList.splice(currentFlag, 1);
                countryList.splice(currentFlag, 1);
                attrListFinal.splice(currentFlag, 1);
              }


              //updating score and the pointsYesNo variable
              document.getElementById("score").innerHTML = "Score: " + score;
              let points = document.getElementById("score");
              points.style.color = "white";
              points.style.textDecoration = "underline";
              var noPoints2 = 'false'
              localStorage.setItem('noPoints', noPoints2)


              //execute the displayFlag function with a delay so that the flag and buttons don't update immedeately upon clicking a button so that there is time to see if the answer was correct or not
              setTimeout(() => {

                displayFlag();

              }, 1200);

              
            }

            //function that updates the flag and buttons and therefore starts the next round
            function displayFlag() {
              var clickCount = 0;
              console.log(clickCount)
              const guess1 = document.getElementById("guess1");
              const guess2 = document.getElementById("guess2");
              const guess3 = document.getElementById("guess3");
              const guess4 = document.getElementById("guess4");

              guess1.disabled = false;
              guess2.disabled = false;
              guess3.disabled = false;
              guess4.disabled = false;

              guess1.style.backgroundColor = "white";
              guess2.style.backgroundColor = "white";
              guess3.style.backgroundColor = "white";
              guess4.style.backgroundColor = "white";

              document.getElementById("guess1").onclick = checkGuess;
              document.getElementById("guess2").onclick = checkGuess;
              document.getElementById("guess3").onclick = checkGuess;
              document.getElementById("guess4").onclick = checkGuess;

              if (flagList.length > 0) {
                var flagIndex = Math.floor(Math.random() * flagList.length);
                var file = sourceFolder + flagList[flagIndex];

                

                
                if (searchTags == 'emblem'){
                file = file.replace(".svg", ".png");  //because the files of the emblems are served in png format (to ensure faster loading speeds), the file extension needs to be changed from svg to png (in the file databse, they are registered as svg)
                }
                else{
                  //if the game mode is not 'emblem', then nothing happens and the files are served as svg files
                }

                
                currentFlag = flagIndex; //idk why I did this but better not change it
                
                
                var correctButton = Math.floor(Math.random() * 4) + 1;
              var randomList = countryList2.slice();
              randomList.splice(currentFlag, 1);
              var randomCountries = [];


              var correctAnswer = countryList[flagIndex].toString();
              randomCountries.push(correctAnswer);

              while (randomCountries.length < 4) {
                var countryIndex = Math.floor(
                  Math.random() * randomList.length
                );
                var country = randomList[countryIndex].toString();

                if (!randomCountries.includes(country)) {
                  randomCountries.push(country);
                  randomList.splice(countryIndex, 1);
                }
              }




              for (var i = 1; i <= 4; i++) {
                if (i != correctButton) {
                  document.getElementById("guess" + i).innerHTML =
                    randomCountries.pop();
                }
              }
              document.getElementById("guess" + correctButton).innerHTML =
              countryList[flagIndex];
              document.getElementById("flag").src = file;
              document.getElementById("progress").innerHTML =
              "Flag " + progress + "/" + total;
            let points = document.getElementById("progress");
            points.style.color = "white";
            points.style.textDecoration = "underline";

            var attribution = attrListFinal[flagIndex];


if (window.innerHeight < window.innerWidth){

            if (attribution != "none"){

      
              const clickMe = document.querySelector('#attribution');
              clickMe.classList.add('attrShow')

// Create an array of text options to cycle through
const textOptions = [
  "Click here to view the attribution for this flag",
  "Are you sure? If you proceed, you will not get a point for this flag. Click again to show the attribution",
  attribution
];

// Set the initial text to the first option
let currentTextIndex = 0;
clickMe.innerHTML = textOptions[currentTextIndex];


clickMe.addEventListener("click", () => {
  // Increment the click count
  clickCount++;

  // Only change the text if we haven't reached the maximum number of clicks
  if (clickCount <= 2) {
    // Increment the current text index
    currentTextIndex++;

    // If we've reached the end of the text options, start over
    if (currentTextIndex >= textOptions.length) {
      currentTextIndex = 0;
    }

    // Create a new text node with the next text option
    const newTextNode = document.createTextNode(textOptions[currentTextIndex]);

    // Animate the replacement of the old text node with the new one
    clickMe.animate([
      { opacity: 1, transform: "translateY(0)" },
      { opacity: 0, transform: "translateY(-10px)" }
    ], { duration: 250 }).onfinish = () => {
      // Replace the old text node with the new one
      clickMe.removeChild(clickMe.firstChild);

      if (clickCount < 2){
        clickMe.appendChild(newTextNode);
      }

      else if (clickCount == 2){
        // Insert a line break before the new HTML code

        clickMe.insertAdjacentHTML('beforeend', attribution);
        var noPoints = 'true'
        localStorage.setItem('noPoints', noPoints)
      }

      else {
        clickMe.innerHTML = 'There was an error displaying the attribution'
      }
      

      // Animate the appearance of the new text node
      clickMe.animate([
        { opacity: 0, transform: "translateY(10px)" },
        { opacity: 1, transform: "translateY(0)" }
      ], { duration: 250, fill: "forwards" });
    };

    // Disable the click event listener if we've reached the maximum number of clicks
    if (clickCount === 2) {
      
      clickMe.removeEventListener("click", onClick);
      clickMe.classList.add('cursorDefault')
    }
  }
});







            }
            else{
              const clickMe = document.querySelector('#attribution');
              clickMe.classList.remove('attrShow')
            }
          }


          else if (window.innerHeight > window.innerWidth){

                      if (attribution != "none"){
          
                
                        const clickMe = document.querySelector('#attribution');
                        clickMe.classList.add('attrShow')
          
          // Create an array of text options to cycle through
          const textOptions = [
            "Click here to view the attribution for this flag",
            "Are you sure? If you proceed, you will not get a point for this flag. Click again to show the attribution",
            attribution
          ];
              
              // Set the initial text to the first option
              let currentTextIndex = 0;
              clickMe.innerHTML = textOptions[currentTextIndex];
              
              // Define the target element whose CSS class will be modified
              const attributionPopup = document.getElementById('attribution-popup');
              var attributionOverlay = document.getElementById('attribution-overlay')
              
              // Add a click event listener to the text element

              clickMe.addEventListener("click", () => {
                // Increment the click count
                clickCount++;
              
                // Only change the text if we haven't reached the maximum number of clicks
                if (clickCount <= 2) {
                  // Increment the current text index
                  currentTextIndex++;
              
                  // If we've reached the end of the text options, start over
                  if (currentTextIndex >= textOptions.length) {
                    currentTextIndex = 0;
                  }
              
                  // Create a new text node with the next text option
                  const newTextNode = document.createTextNode(textOptions[currentTextIndex]);
              
                  // Animate the replacement of the old text node with the new one
                  clickMe.animate([
                    { opacity: 1, transform: "translateY(0)" },
                    { opacity: 0, transform: "translateY(-10px)" }
                  ], { duration: 250 }).onfinish = () => {
                    // Replace the old text node with the new one
                    clickMe.removeChild(clickMe.firstChild);
              
                    if (clickCount < 2){
                      clickMe.appendChild(newTextNode);
                    }
              
                    else if (clickCount == 2){
                      // Modify the CSS class of the target element
                      attributionPopup.classList.add('attribution-popup-show');
                      attributionOverlay.classList.add('attribution-overlay-show')
                      attributionPopup.innerHTML = textOptions[currentTextIndex];
                      
                      var noPoints = 'true'
                      localStorage.setItem('noPoints', noPoints)
                      attributionOverlay.addEventListener('click', function() {
                        attributionPopup.classList.remove('attribution-popup-show');
                        attributionOverlay.classList.remove('attribution-overlay-show')
                      });
                    }
              
                    else {
                      clickMe.innerHTML = 'There was an error displaying the text'
                    }
                    
              
                    // Animate the appearance of the new text node
                    clickMe.animate([
                      { opacity: 0, transform: "translateY(10px)" },
                      { opacity: 1, transform: "translateY(0)" }
                    ], { duration: 250, fill: "forwards" });
                  };
              
                  // Disable the click event listener if we've reached the maximum number of clicks
                  if (clickCount === 2) {
                    clickMe.removeEventListener("click", onClick);
                    clickMe.classList.add('cursorDefault')
                  }
                }
              });
              
            }

            else{
              const clickMe = document.querySelector('#attribution');
              clickMe.classList.remove('attrShow')
            }
          }




            let score = document.getElementById("score");
            score.style.color = "white";
            score.style.textDecoration = "underline";
  


              } else {
                const scoreCache = score;
                const amountCache = total;
                sessionStorage.setItem("scoreCache", scoreCache);
                sessionStorage.setItem("amountCache", amountCache);

                window.location.replace("finish.html");

              }
            }


          }
        );
      }
    );
      })
  }
);
