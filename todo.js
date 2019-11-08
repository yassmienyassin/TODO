// Creat a close button and append it to each list item 
    var cc =document.getElementsByTagName("LI");
    var i;
for (i = 0; i < cc.length; i++) {
    var closeSpan= document.createElement("span");
    var spanText = document.createTextNode("\u00D7");
    closeSpan.className =" close";
    closeSpan.appendChild(spanText);
    cc[i].appendChild(closeSpan);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
// Create a new list item when clicking on the "Add" button
function myFunction(){
    var inputValue = document.getElementById("myInput").value;
    var li = document.createElement("li");
    var itemValue = document.createTextNode(inputValue);
    li.appendChild(itemValue);
    if(inputValue === ""){
        alert("you must enter a value");
    }else {
        document.getElementById("ulList").appendChild(li);
    }
    document.getElementById("myInput").value = "";

// Create a "close" button and append it to each list item
    var closeSpan= document.createElement("span");
    var spanText = document.createTextNode("\u00D7");
    closeSpan.appendChild(spanText);
    li.appendChild(closeSpan);
    closeSpan.className = "close";
  // Click on a close button to hide the current list item
    var close = document.getElementsByClassName('close');
    var i;
    for(i = 0 ; i < close.length ; i++){
        close[i].onclick = function(){
            this.parentElement.style.display = "none";
        }
    }

}

    