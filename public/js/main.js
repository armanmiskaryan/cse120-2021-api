var loadedData = [];

function loadBookEditItem() {
    localStorage = window.localStorage;
    editItem = JSON.parse(localStorage.getItem("editItem"));
    console.log(editItem);
    document.getElementById("_id").innerHTML = editItem["_id"];
    document.getElementById("title").value = editItem["title"];
    document.getElementById("fullname").value = editItem["fullname"]; 
    document.getElementById("title").value = editItem ["title"];
    document.getElementById("author").value = editItem["author"];   
    document.getElementById("pages").value = editItem["pages"];
    document.getElementById("price").value = editItem["price"];
    document.getElementById("currency").value = editItem["currency"];
    document.getElementById("language").value = editItem["language"];
    document.getElementById("edition").value = editItem["edition"];
    document.getElementById("publisher").value = editItem["publisher"];
    document.getElementById("pubdate").value = editItem["pubdate"];
    document.getElementById("genre").value = editItem["genre"];
}

function editData(id) {
    var tmp = id.split("edit_");
    var item_id = tmp[1];

    loadedData.forEach(item => {
        if (item._id == item_id) {
            console.log(item); 
            localStorage = window.localStorage;
            localStorage.setItem('editItem', JSON.stringify(item));
            document.location  = "book.html"; 
        }
    })
}

function loadhobbyEditItem() {
    localStorage = window.localStorage;
    editItem = JSON.parse(localStorage.getItem("editItem"));
    console.log(editItem);
    document.getElementById("_id").value = editItem["_id"];
    document.getElementById("fullname").value = editItem["fullname"];
    document.getElementById("country").value = editItem["country"]; 
    document.getElementById("date").value = editItem["date"];
    document.getElementById("gender").value = editItem["gender"];
    document.getElementById("player").value = editItem["player"];
    document.getElementById("years").value = editItem["years"];      
}

function editData(id) {
    var tmp = id.split("edit_");
    var item_id = tmp[1];

    loadedData.forEach(item => {
        if (item._id == item_id) {
            console.log(item); 
            localStorage = window.localStorage;
            localStorage.setItem('editItem', JSON.stringify(item));
            if (item.project == "myhobby") {
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
  myhobbyData = [];
  mybookData = [];
  otherData = [];

  $.ajax({
      type : "GET",
      url : "https://cse120-2021-api-arman.herokuapp.com/data",
      dataType : "json",
      success : function(data) {
        console.log("success", data);
        loadedData = data.data;
        data.data.forEach(elem => {
          if (elem["owner"] == "Arman Miskaryan") {
            if (elem["project"] == "myhobby") {
              myhobbyData.push(elem);
            } else {
              mybookData.push(elem);
            }
          } else {
            otherData.push(elem);
          }
        })
        displayData(myhobbyData, "hobbyDataContainer");
        displayData(mybookData, "bookDataContainer");
        displayData(otherData, "otherDataContainer");
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

    document.querySelectorAll("#hobbyDataContainer div.item").forEach(div => {
          div.addEventListener("click", function(e){
          if (this.style.height == "auto") {
          this.style.height = "30px";
        } else {
          this.style.height = "auto";
        }
      })        
    })

}
    document.querySelectorAll("#bookDataContainer div.item").forEach(div => {
          div.addEventListener("click", function(e){
          if (this.style.height == "auto") {
          this.style.height = "30px";
        } else {
          this.style.height = "auto";
        }
      })        
    })


 
 function updatehobbyData(e) {
      e.preventDefault();
      var updatedColoring = {};
  updatedColoring.id = document.getElementById("_id").value;
  updatedColoring.fullname = document.getElementById("fullname").value;
  updatedColoring.country = document.getElementById("country").value;
  updatedColoring.date = document.getElementById("date").value;
  updatedColoring.gender = document.getElementById("gender").value;
  updatedColoring.color = document.getElementById("player").value;
  updatedColoring.colorw = document.getElementById("years").value;
  
      
    	
 $.ajax({
      type: 'POST',
      url: "https://cse120-2021-api-arman.herokuapp.com",
      data: updatedhobby,
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
 
function updateBookDataChenges(e) {
      e.preventDefault();
      var updatedBook = {};
  updatedBook.id = document.getElementById("_id").value;
  updatedBook.fullname = document.getElementById("fullname").value;
  updatedBook.author = document.getElementById("author").value;
  updatedBook.colorr = document.getElementById("color").value;
  updatedBook.covertype = document.getElementById("covertype").value;
  updatedBook.pages = document.getElementById("pages").value;
  updatedBook.price = document.getElementById("price").value;
  updatedBook.currency = document.getElementById("currency").value;
  updatedBook.language = document.getElementById("language").value;
  updatedBook.edition = document.getElementById("edition").value;
  updatedBook.dimensions = document.getElementById("dimensions").value;
  updatedBook.publisher = document.getElementById("publisher").value;
  updatedBook.originalpubdate = document.getElementById("pubdate").value;
  updatedBook.genre = document.getElementById("genre").value;


      $.ajax({
      type: 'POST',
      url: "https://cse120-2021-api-arman.herokuapp.com",
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
