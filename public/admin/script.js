var hobby={
  "project":"myVolleyball",
  "owner": "Arman Miskaryan",
  "fullname": "",
  "country": "",
  "gender": "",
  "prefferedteam" : "", 
  "player" : "",
  "colorw" : "",
  "years" : "",
}
function Validatecurrentvalue(){
  var currentvalue=document.getElementById("fullname").value;
  console.log("Eventcall;", currentvalue.length)
  if (currentvalue.length > 10){
   document.getElementById("fullnameerror").innerHTML="Bad";
  } else{
    document.getElementById("fullnameerror").innerHTML="Good";
  }
}

function handleFullNameChange(){
  hobby.fullname=document.getElementById("fullname").value;
}
function handleCountryChange(){
 hobby.country=document.getElementById("country").value;
}

 function handleGenderChange(){
   hobby.gender=document.getElementById("gender").value;
 }
function handlePrefferedteamChange () {
  hobby.color=document.getElementById("prefferedteam").value;
 }
function handlePlayerChange () {
  hobby.player=document.getElementById("player").value;
 } 
 function handleColorwChange () {
  hobby.colorw=document.getElementById("colorw").value;
 }

function handleYearsChange(){
 hobby.years=document.getElementById("years").value;

}
function handleCheckboxChange(e) {
  var value = e.target.id;
  if (e.target.value == "on") {
    hobby.colorw = hobby.colorw + "," + value;
  }
}
var mycode={
  "project":"mybook",
  "owner":"Arman Miskaryan",
  "name": "",
  "title": "",
  "author": "",
  "colour": "",
  "covertype" : "", 
  "pagenumber": "",
  "price": "",
  "currency": "",
  "othercurrency": "",
  "language" : "",
  "otherlanguage": "",
  "orglanguage" : "",
  "otherorglanguage" : "",
  "edition": "",
  "dimensions": "",
  "publisher": "",
  "pubdate":"", 
  "age" : "",
  "orgpubdate" : "",
  "genre": "",

}
function Validatecurrentvalue(){
  var currentvalue=document.getElementById("name").value;
  console.log("Eventcall;", currentvalue.length)
  if (currentvalue.length > 10){
   document.getElementById("fullnameerror").innerHTML="Bad";
  } else{
    document.getElementById("fullnameerror").innerHTML="Good";
  }
}

function handleNameChange(){
 mycode.name=document.getElementById("name").value;

}

function handleTitleChange(){
 mycode.title=document.getElementById("title").value;
}

function handleAuthorChange(){
  mycode.author=document.getElementById("author").value;
}

function handleColorChange(){
  mycode.colour=document.getElementById("colour").value;
}

function handleCoverTypeChange(e){
 mycode.covertype= e.target.value; 
 if (mycode.covertype !="other"){
   mycode.othercovertype="";
   document.getElementById("othertext").style.display="none";
 } else{
   document.getElementById("othertext").style.display="block";
 }
}

function handleCustomTypeChange(){
if(mycode.covertype=="other"){
  mycode.othercovertype=document.getElementById("othertext").value;
}
}

function handleNumberofPagesChange(){
  mycode.pagenumber=document.getElementById("pagenumber").value;
}

function handlePriceChange(){
 mycode.price=document.getElementById("price").value;
}

function handleCurrencyChange(){
 mycode.currency=document.getElementById("currency").value;
}
function handleCurrencyChange(event){
  mycode.currency= event.target.value;
  if (mycode.currency != "other"){
    mycode.othercurrency="";
    document.getElementById("othercurrtext").style.display="none";
  } else{
    document.getElementById("othercurrtext").style.display="block";
  }
}
function handleCustomCurrChange(){
  if (mycode.language=="other") {
    document.getElementById("othercurrency").value;
  }
}
function handleLanguageChange(event){
  mycode.language= event.target.value;
  if (mycode.language != "other"){
    mycode.otherlanguage="";
    document.getElementById("otherlangtext").style.display="none";
  } else{
    document.getElementById("otherlangtext").style.display="block";
  }
}
function handleCustomLangChange(){
  if (mycode.language=="other") {
    document.getElementById("otherlanguage").value;
  }
}
function handleOriginalLanguageChange(event){
  mycode.language= event.target.value;
  if (mycode.language != "other"){
    mycode.otherlanguage="";
    document.getElementById("otherlangtext1").style.display="none";
  } else{
    document.getElementById("otherlangtext1").style.display="block";
  }
}
function handleCustomLangChange(){
  if (mycode.language=="other") {
    document.getElementById("otherorglanguage").value;
  }
}

function handleEditionChange(){
  mycode.edition=document.getElementById("edition").value;
}
function handleDimensionsChange(){
  mycode.dimensions=document.getElementById("dimensions").value;
}
function handlePublisherChange(){
  mycode.publisher=document.getElementById("publisher").value;
}

function handlePubDateChange(){
  mycode.pubdate=document.getElementById("pubdate").value;
}

function handleOriginalPubYearChange(){
  mycode.orgpubdate=document.getElementById("orgpubdate").value;
}

function handleGenreChange(){
  mycode.genre=document.getElementById("genre").value;
}

function handleAgeResChange (){
  mycode.age=document.getElementById("age").value;
}
function SaveData(e){
  e.preventDefault();
  console.log(mycode)

  $.ajax({
    type: 'POST',
    url: "https://cse120-2021api-arman .herokuapp.com/data",
    data: mycode,
    cache: false,
    dataType : 'json',
    success: function (data) {
      console.log("success");
    },
    error: function (xhr) {
      console.error("Error in post", xhr);
    },
    complete: function () {
      console.log("Complete");  
    }
  });  
}
function displayData(existingData) {
  document.getElementById("existingData").innerHTML = "<ul>";
  for (var i = 0; i < existingData.length; i++) {
    currentBook = existingData[i];
    document.getElementById("existingData").innerHTML += "<li><i>" + currentBook.fullname + "</li> : <b>" + currentBook.title + "</b></li>";
  }
  document.getElementById("existingData").innerHTML += "</ul>"
}
    

function SaveData(e) {
  e.preventDefault();
  console.log("The current value is",hobby)
  
  $.ajax({
    type: 'POST',
    url: "https://cse120-2021-api-arman.herokuapp.com/data",
    data: hobby,
    cache: false,
    dataType : 'json',
    success: function (data) {
      console.log("success");
    },
    error: function (xhr) {
      console.error("Error in post", xhr);
    },
    complete: function () {
      console.log("Complete");  
    }
  });
}

function loadExistingData() {
	var existingData = [];
  $.ajax({
    type : "GET",
    url : "https://cse120-2021-api-arman.herokuapp.com/data",
    dataType : "json",
    success : function(data) {
      console.log("success", data);
      existingData = data;
      displayData(existingData.data);
    },
    error : function(data) {
        console.log("Error")
    }
  });
}

function displayData(existingData) {
  document.getElementById("existingData").innerHTML = "<ul>";
  for (var i = 0; i < existingData.length; i++) {
    currentBook = existingData[i];
    document.getElementById("existingData").innerHTML += "<li><i>" + currentBook.fullname + "</li> : <b>" + currentBook.title + "</b></li>";
  }
  document.getElementById("existingData").innerHTML += "</ul>"
}
    
function deleteData(id) {

    var r = confirm("Are you sure you want to delete the item with the following ID? " + id);
    if (r == true) {
      
    } else {
      return;
    }

    var tmp = {
        "id": id
    }

    $.ajax({
        type: 'POST',
        url: "https://cse120-2021-api-arman.herokuapp.com/data/delete",
        data: tmp,
        cache: false,
        dataType : 'json',
        success: function (data) {
            console.log("success");
            document.getElementById("div" + id).style.display = "none";
        },
        error: function (xhr) {
            console.error("Error in post", xhr);
        },
        complete: function () {
            console.log("Complete");  
        }
    });
}

function saveData() {
	var tmp = {
		"test": "Data"
	}

    $.ajax({
        type: 'POST',
        url: "https://cse120-2021-api-arman.herokuapp.com/data",
        data: tmp,
        cache: false,
        dataType : 'json',
        success: function (data) {
        	console.log("success");
        },
        error: function (xhr) {
            console.error("Error in post", xhr);
        },
        complete: function () {
            console.log("Complete");  
        }
    });
}

function loadExistingData() {
    $.ajax({
        type : "GET",
        url : "https://cse120-2021-api-arman.herokuapp.com/data",
        dataType : "json",
        success : function(data) {
        	console.log("success", data);
            displayData(data.data);
        },
        error : function(data) {
            console.log("Error")
        }
    });
}

function displayData(data) {
    document.getElementById("dataContainer").innerHTML = "";
    data.forEach(elem => {

    var item = document.createElement("div");
        item.id = "div" + elem["_id"];
        item.className = "item";
    if (Object.keys(elem).length == 1) {
    var span = document.createElement("span");
        span.innerHTML = "<i>Empty Element with autogenerated ID: </i>" + elem["_id"];
        item.appendChild(span);
        }
    Object.keys(elem).forEach(key => {
      if (key != "_id") {
      var span = document.createElement("span");

      var b = document.createElement("b");
          b.innerHTML = key + ": ";
          span.appendChild(b);
                
          span.className = "item";
      if (elem[key]) {
          span.innerHTML += elem[key];
      } else {
        
      var span1 = document.createElement("span");
          span1.className = "undefined";
          span1.innerHTML = "N/A";
          span.appendChild(span1)
                }
          item.appendChild(span);

      var br = document.createElement("br");
          item.appendChild(br);
            }
        })
      var button = document.createElement("button");
        button.innerHTML = "Delete";
        button.id = elem["_id"];
        button.addEventListener("click", function(e){
          deleteData(e.target.id);
        }, false);
        item.appendChild(button);
        document.getElementById("dataContainer").appendChild(item);
    })

}
var loadedData = [];

function loadBookEditItem() {
    localStorage = window.localStorage;
    editItem = JSON.parse(localStorage.getItem("editItem"));
    console.log(editItem);
    document.getElementById("_id").innerHTML = editItem["_id"];
    document.getElementById("fullname").value = editItem["fullName"];
    document.getElementById("title").value = editItem["title"]; 
    document.getElementById("author").value = editItem["author"];   
    document.getElementById("colour").value = editItem["colour"];
    document.getElementById("covertype").value = editItem["covertype"];
    document.getElementById("pagenumber").value = editItem["pagenumber"];
    document.getElementById("price").value = editItem["price"];
    document.getElementById("currency").value = editItem["currency"];
    document.getElementById("language").value = editItem["language"];
    document.getElementById("orglanguage").value = editItem["orglanguage"];
    document.getElementById("otherlanguage").value = editItem["otherlanguage"];
    document.getElementById("edition").value = editItem["edition"];
    document.getElementById("dimensions").value = editItem["dimensions"];
    document.getElementById("publisher").value = editItem["publisher"];
    document.getElementById("pubdate").value = editItem["pubdate"];
    document.getElementById("age").value = editItem["age"];
    document.getElementById("orgpubdate").value = editItem["orgpubdate"];
    document.getElementById("genre").value = editItem["genre"];
}
function loadVolleyballEditItem() {
    localStorage = window.localStorage;
    editItem = JSON.parse(localStorage.getItem("editItem"));
    console.log(editItem);
    document.getElementById("_id").value = editItem["_id"];
    document.getElementById("fullname").value = editItem["fullname"];
    document.getElementById("country").value = editItem["country"]; 
    document.getElementById("gender").value = editItem["gender"];
    document.getElementById("prefferedteam").value = editItem["prefferedteam"];
    document.getElementById("player").value = editItem["player"];      
    document.getElementById("colorw").value = editItem["colorw"];
    document.getElementById("years").value = editItem["years"];
}

function editData(id) {
    var tmp = id.split("edit_");
    var item_id = tmp[1];

    loadedData.forEach(item => {
        if ( item._id == item_id) {
            console.log(item); 
            localStorage = window.localStorage;
            localStorage.setItem('editItem', JSON.stringify(item));
            if (item["project"] == "myVolleyball") {
            document.location  = "volleyball.html"; 
            } else {
            document.location  = "book.html"; 
            }
        }
    })
}

function deleteData(id) {

    var r = confirm("Are you sure you want to delete the item with the following ID? " + id);
    if (r == false) {
        return;
    }

    var tmp = {
        "id": id
    }

    $.ajax({
        type: 'POST',
        url: "https://cse120-2021-api-arman.herokuapp.com/data/delete",
        data: tmp,
        cache: false,
        dataType : 'json',
        success: function (data) {
            console.log("success");
            document.getElementById("div" + id).style.display = "none";
        },
        error: function (xhr) {
            console.error("Error in post", xhr);
        },
        complete: function () {
            console.log("Complete");  
        }
    });
}

function saveData() {
	var tmp = {
		"test": "Data"
	}

  $.ajax({
      type: 'POST',
      url: "https://cse120-2021-api-arman.herokuapp.com/data",
      data: tmp,
      cache: false,
      dataType : 'json',
      success: function (data) {
        console.log("success");
      },
      error: function (xhr) {
          console.error("Error in post", xhr);
      },
      complete: function () {
          console.log("Complete");  
      }
  });
}

function loadExistingData() {
  myVolleyballData = [];
  myBookData = [];
  otherData = [];
  $.ajax({
      type : "GET",
      url : "https://cse120-2021-api-arman.herokuapp.com/data",
      dataType : "json",
      success : function(data) {
        loadedData = data.data;
        data.data.forEach(elem => {
          if (elem["owner"] == "Arman Miskaryan") {
            if (elem["project"] == "myVolleyball") {
              myVolleyballData.push(elem);
            } else {
              myBookData.push(elem);
            }
          } else {
            otherData.push(elem);
          }
        })
        displayData(myVolleyballData, "volleyballDataContainer");
        displayData(myBookData, "bookDataContainer");
     
      },
      error : function(data) {
          console.log("Error")
      }
  });
}

function displayData(data, containerDivName) {
  document.getElementById(containerDivName).innerHTML = "";
  data.forEach(elem => {
    var item = document.createElement("div");
    item.id = "div" + elem["_id"];
    item.className = "item";
    if (Object.keys(elem).length == 1) {
      var span = document.createElement("span");
      span.innerHTML = "<i>Empty Element with autogenerated ID: </i>" + elem["_id"];
      item.appendChild(span);
    }
    Object.keys(elem).forEach(key => {
      if (key != "_id") {
        var span = document.createElement("span");

        var b = document.createElement("b");
        b.innerHTML = key + ": ";
        span.appendChild(b);
        
        span.className = "item";
        if (elem[key]) {
            span.innerHTML += elem[key];
        } else {
            var span1 = document.createElement("span");
            span1.className = "undefined";
            span1.innerHTML = "N/A";
            span.appendChild(span1)
        }
        item.appendChild(span);

        var br = document.createElement("br");
        item.appendChild(br);
      }
    })
    var edit_button = document.createElement("button");
    edit_button.innerHTML = "Edit";
    edit_button.id = "edit_" + elem["_id"];
    edit_button.className = "edit";
    edit_button.addEventListener("click", function(e){
        editData(e.target.id);
    }, false);
    item.appendChild(edit_button);

    var button = document.createElement("button");
    button.innerHTML = "Delete";
    button.id = elem["_id"];
    button.addEventListener("click", function(e){
        deleteData(e.target.id);
    }, false);
    item.appendChild(button);
    document.getElementById(containerDivName).appendChild(item);
  })

}

function toggleOtherData() {
  var otherData = document.getElementById("otherDataContainer");
  if (otherData.style.display == "block") {
    otherData.style.display = "none";
  } else {
    otherData.style.display = "block";
  }
}

function toggleVolleyballData() {
  var myVolleyballData = document.getElementById("volleyballDataContainer");
  if (myvolleyballData.style.display == "block") {
    myVolleyballData.style.display = "none";
  } else {
    myVolleyballData.style.display = "block";
  }
}

function toggleBookData() {
  var bookData = document.getElementById("bookDataContainer");
  if (bookData.style.display == "block") {
    bookData.style.display = "none";
  } else {
    bookData.style.display = "block";
  }
}
function updateData(e) {
  e.preventDefault();
  var updatedBook = {};
  updatedBook.id = document.getElementById("_id").value;
  updatedBook.fullname = document.getElementById("fullname").value;
  updatedBook.author = document.getElementById("author").value;
  updatedBook.colour = document.getElementById("colour").value;
  updatedBook.covertype = document.getElementById("covertype").value;
  updatedBook.numberofpages = document.getElementById("numberofpages").value;
  updatedBook.price = document.getElementById("price").value;
  updatedBook.currency = document.getElementById("currency").value;
  updatedBook.language = document.getElementById("language").value;
  updatedBook.edition = document.getElementById("edition").value;
  updatedBook.dimensions = document.getElementById("dimensions").value;
  updatedBook.publisher = document.getElementById("publisher").value;
  updatedBook.publishingyear = document.getElementById("publishingyear").value;
  updatedBook.originalpubdate = document.getElementById("originalpubdate").value;
  updatedBook.genre = document.getElementById("genre").value;
  
 

      $.ajax({
      type: 'POST',
      url: "https://cse120-2021-api-arman.herokuapp.com/data/update",
      data: updatedBook,
      cache: false,
      dataType : 'json',
      success: function (data) {
        console.log("success");
      },
      error: function (xhr) {
        console.error("Error in post", xhr);
      },
      complete: function () {
        console.log("Complete");  
      }
    });
  }
function updateVolleyballData(e) {
  e.preventDefault();
  var updatedVolleyball = {};
  updatedVolleyball.id = document.getElementById("_id").value;
  updatedVolleyball.fullname = document.getElementById("fullname").value;
  updatedVolleyball.country = document.getElementById("country").value;
  updatedVolleyball.gender = document.getElementById("gender").value;
  updatedVolleyball.prefferedteam = document.getElementById("prefferedteam").value;
   updatedVolleyball.player = document.getElementById("player").value;
  updatedVolleyball.colorw = document.getElementById("colorw").value;
  updatedVolleyball.years = document.getElementById("years").value;
  
      $.ajax({
      type: 'POST',
      url: "/data/update",
      data: updatedVolleyball,
      cache: false,
      dataType : 'json',
      success: function (data) {
        console.log("success");
      },
      error: function (xhr) {
        console.error("Error in post", xhr);
      },
      complete: function () {
        console.log("Complete");  
      }
    });
}
