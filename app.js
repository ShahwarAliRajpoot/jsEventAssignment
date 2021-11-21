
function colorBg() {
    var changeColor = document.getElementById("changeColor")

    var userColor = prompt("Please Enter Background color")

    changeColor.style.backgroundColor = userColor;
}

function txColor() {
    var textColor = document.getElementById("h1")

    var userColor = prompt("Please Enter Text color")
    textColor.style.color = userColor;
}

function showImg() {
    var developer = document.getElementById("developer")

    developer.style.display = "block";
}
function bigImg() {
    var developer = document.getElementById("developer")

    developer.style.width = "600px";
}
function smImg() {
    var developer = document.getElementById("developer")

    developer.style.width = "50%";
}
function hideImg() {
    var developer = document.getElementById("developer")

    developer.style.display = "none";
}

function bulb(id, element) {
    if (id == 1) {
        element.src = "./images/on-_1.jpg"
    }
    else {
        element.src = "./images/off_1.jpg"

    }
}

function para() {
    var paragraph = document.getElementsByTagName("p")

    for (var i = 0; i < paragraph.length; i++) {
        var userColor = prompt("You Can Change Paragraph Color")
        paragraph[i].style.color = userColor;
    }

}


