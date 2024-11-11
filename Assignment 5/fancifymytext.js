function sendAlert(){
    document.getElementById("text").style.fontSize = "24pt";
}

function setFancy(){
    const text = document.getElementById("text");
    const radio = document.getElementById("fancy");

    if(radio.checked){
        text.style.fontWeight = "bold"
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    }
}

function setBoring(){
    const text = document.getElementById("text");
    const radio = document.getElementById("boring");
    if(radio.checked){
        text.style.fontWeight = "normal"
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}

function setMOO(){
    const text = document.getElementById("text");
    text.value = document.getElementById("text").value.toUpperCase();
    
    let temp = text.value.split(" ");
    text.value = temp.map(word => word + "-MOO").join(" ");
}