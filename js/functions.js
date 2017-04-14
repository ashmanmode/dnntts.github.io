//Get the filenames and call function to draw a table
function drawTable() {

//Set page name
var logo = document.getElementById('logo-container');
logo.innerHTML = data.toUpperCase() + " MOS Test";
//Set SheetName 
var sheetName = document.getElementById('sheetName');
sheetName.setAttribute("value",data+"_"+type);

//drawTable
$.get('wavFileIds.txt', function(data){
      fileNames = data.split('\n');
      // console.log(fileNames);
      var numFiles = document.getElementById('numFiles');
      numFiles.setAttribute("value",fileNames.length);
      createTable(fileNames);
});
}


//Function to create a table
function createTable(fileNames) {

console.log('tableCreate');
console.log('fles'+fileNames);

var tbdy = document.getElementById('tableBody');
for (var i = 0; i < fileNames.length ; i++) {
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    
    //Add content to td's
    td1.innerHTML = i+1;
    td2.innerHTML = "<audio controls><source src=\"wav\\"+data+"\\"+type+"\\"+fileNames[i]+".wav\" type=\"audio/wav\">Your browser does not support the audio element.</audio>"; 
    td3.innerHTML = "<audio controls><source src=\"wav\\"+data+"\\target\\"+fileNames[i]+".wav\" type=\"audio/wav\">Your browser does not support the audio element.</audio>";
    td4.innerHTML = "<div class=\"row\"><p class=\"col s2\">Bad</p><p class=\"col s1\"><input name=\"g"+(i+1)+"\" value=\"1\" type=\"radio\" id=\"test"+i+"1\" /required><label for=\"test"+i+"1\"></label></p><p class=\"col s1\"><input name=\"g"+(i+1)+"\" value=\"2\" type=\"radio\" id=\"test"+i+"2\" /required><label for=\"test"+i+"2\"></label></p><p class=\"col s1\"><input name=\"g"+(i+1)+"\" value=\"3\" type=\"radio\" id=\"test"+i+"3\"/required><label for=\"test"+i+"3\"></label></p><p class=\"col s1\"><input name=\"g"+(i+1)+"\" value=\"4\" type=\"radio\" id=\"test"+i+"4\" /required><label for=\"test"+i+"4\"></label></p><p class=\"col s2\"><input name=\"g"+(i+1)+"\" value=\"5\" type=\"radio\" id=\"test"+i+"5\"/><label for=\"test"+i+"5\"required></label></p><p class=\"col s2\">Excellent</p></div>"; 

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tbdy.appendChild(tr);
}
}

//Shuffle function
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
