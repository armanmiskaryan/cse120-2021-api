var mybook={
    "project":"mybook",
    "owner": "Arman Miskaryan",
    "fullname": " ",
    "title": "",
    "author": "",
    "color": "",
    "covertype" : "", 
    "othercovertype": "",
    "other":"",
    "pages": "",
    "price": "",
    "currency": "",
    "language" : "",
    "edition": "",
    "dimensions": "",
    "publisher": "",
    "pubdate":"", 
    "genre": "",
    "othercurr": "",
}
  
  function handleFullNameChange(){
    mybook.fullname=document.getElementById("fullname").value;
   }
   function handleTitleChange(){
    mybook.title=document.getElementById("title").value;
   }
   
   function handleAuthorChange(){
      mybook.author=document.getElementById("author").value;
   }
   function handleColorChange(){
      mybook.colour=document.getElementById("color").value;
   }
   function handleCoverTypeChange(e){
    mybook.covertype= e.target.value; 
   if ( mybook.covertype !="other"){
      mybook.othercovertype="";
     document.getElementById("othertext").style.display="none";
   } else{
     document.getElementById("othertext").style.display="block";
   }
  }
  function handleCustomTypeChange(){
    if( mybook.covertype=="other"){
      mybook.othercovertype=document.getElementById("othertext").value;
    }
    }
    function handleNumberofPagesChange(){
        mybook.pages=document.getElementById("pages").value;
       }
       
    function handlePriceChange(){
         mybook.price=document.getElementById("price").value;
       }
       
    function handleCurrencyChange(event){
        mybook.currency= event.target.value;
       if ( mybook.currency != "other"){
         mybook.othercurrency="";
         document.getElementById("othercurrtext").style.display="none";
       } else{
         document.getElementById("othercurrtext").style.display="block";
       }
     }
    function handleCustomCurrChange(){
       if ( mybook.currency=="other") {
         document.getElementById("othercurr").value;
       }
     }
       
    function handleLanguageChange(event){
          mybook.language= event.target.value;
         if ( mybook.language != "other"){
           mybook.otherlanguage="";
           document.getElementById("otherlangtext").style.display="none";
         } else{
           document.getElementById("otherlangtext").style.display="block";
         }
       }
    function handleCustomLangChange(){
         if ( mybook.language=="other") {
           document.getElementById("otherlanguage").value;
         }
       }
    function handleEditionChange(){
        mybook.edition=document.getElementById("edition").value;
     }
     function handleDimensionsChange(){
       mybook.dimensions=document.getElementById("dimensions").value;
     }
     function handlePublisherChange(){
        mybook.publisher=document.getElementById("publisher").value;
     }
     
     function handlePubDateChange(){
       mybook.pubdate=document.getElementById("pubdate").value;
     }
     
     function handleOriginalPublishingyearChange(){
        mybook.originalpublishingyear=document.getElementById("originalpublishinyear").value;
     }
     
     function handleGenreChange(){
        myBook.genre=document.getElementById("genre").value;
     }
     function showData(e) {
        console.log(mybook);
        e.preventDefault();
     }
       $.ajax({
         type: 'POST',
         url: "https://cse120-2021-api-arman.herokuapp.com/data",
         data: mybook,
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