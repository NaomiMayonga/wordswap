// function startPlugin() {
//   clickHandler();
//   replaceText();
//   // alert("Hurray I am working!!");
// }
// function clickHandler() {
//   // window.webkitNotifications.createNotifications("icon.gif", "Clicked", "It was clicked").show();
// }
function replaceText(){
    /* var theBody = document.body;
    var theText = theBody.innerHTML;


    theText = theText.replace("Guys", "everyone");

    theBody.innerHTML = theText;*/
    //null ist die tab id und heisst dass es undefiniert ist. Und benutzt den aktiven tab
    var OldWord= new RegExp( document.getElementById("OldWord").value,"i") // i ist für case insensitive
    var NewWord= document.getElementById("NewWord").value

    console.log (OldWord)
    console.log(NewWord)
      chrome.tabs.executeScript( null, {code:"document.body.innerHTML= document.body.innerHTML.replace("+OldWord+", '"+NewWord+"');"},
         function(results){ console.log(results); alert("done!")} );


}

document.addEventListener("DOMContentLoaded", function (){
  document.getElementById("Button").addEventListener("click", replaceText)

})
