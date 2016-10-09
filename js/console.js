var former = console.log;
console.log = function(msg){
    former(msg);
    
    if(msg.indexOf("Brackets") >= 0) {
        //break;
    }
    var ul = document.getElementById("log");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(msg));
    ul.appendChild(li)
}
function clearLog() {
    console.log("we are clearing");
    document.getElementById("log").innerHTML = "";
}

function reloadPage() {
    location.reload();
}