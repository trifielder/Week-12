function test() {
    document.getElementById("paragraph").innerHTML = "Hello";
    document.getElementById("paragraph").style.backgroundColor = "blue"
    document.getElementById("paragraph").style.color = "white"
    document.getElementById("paragraph").style.padding = "20px"
    randomnum();
    usernum();
    compareNm();
}

function randomnum() {
    var ran = Math.floor(Math.random()* 10);
    var x =document.getElementById("random") 
    x.innerHTML = ran;
    x.style.backgroundColor = "purple"
    x.style.color = "pink"
    x.style.padding = "20px"
    x.style.textAlign = "center"
    return ran;

}

function usernum() {
    var u = document.getElementById("getnum").value;
    var w = document.getElementById("userNm");
    w.innerHTML = u;
    w.style.color = "grey";
    w.style.backgroundColor = "orange";
    w.style.padding = "20px";
    w.style.textAlign = "center";
    return u;
    
}

function compareNm() {
    var a = usernum();
    var b = randomnum();
    var c = document.getElementById("compare") 

    if (a != b) {
        c.innerHTML = "These numbers are not equal. The computer got " + b + ", the user got " + a;
        c.style.color = "white";
        c.style.backgroundColor = "cyan";
        c.style.padding = "20px";
        c.style.textAlign = "center";
    } else if (a == b) {
        c.innerHTML = "These numbers are the same. The computer and user got " + a;
        c.style.color = "white";
        c.style.backgroundColor = "cyan";
        c.style.padding = "20px";
        c.style.textAlign = "center";
    }
} 
