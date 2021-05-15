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
  console.log(mycode);

  $.ajax({
    type: 'POST',
    url: "https://cse120-2021api-arman.herokuapp.com/data",
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
    
