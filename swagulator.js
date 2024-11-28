var n1 = "naur"
var n1s = 0
var n2 = "naur"
var n2s = 0
var select = "naur"
var kalk = 0
var result = "naur"
var kalkdisplay = "naur"

function select1() {
    select = 1
    numberadd()
}
function select2() {
    select = 2
    numberadd()
}
function select3() {
    select = 3
    numberadd()
}
function select4() {
    select = 4
    numberadd()
}
function select5() {
    select = 5
    numberadd()
}
function select6() {
    select = 6
    numberadd()
}
function select7() {
    select = 7
    numberadd()
}
function select8() {
    select = 8
    numberadd()
}
function select9() {
    select = 9
    numberadd()
}
function select0() {
    select = 0
    numberadd()
}

function numberadd() {
    if (n1s == 0) {
        if (n1 == "naur") {
            n1 = select;
            document.getElementById("displaytext").innerHTML = n1.toString()
        }
        else {
            n1 = n1 + select.toString() ;
            
            document.getElementById("displaytext").innerHTML = n1.toString()
            
        }           
    }
    else if (n2s == 0) {
        if (n2 == "naur") {
            n2 = select;
            document.getElementById("displaytext").innerHTML = n1.toString() + kalkdisplay + n2.toString()
        }
        else {
            n2 = n2 + select.toString() ;
            
            document.getElementById("displaytext").innerHTML = n1.toString() + kalkdisplay + n2.toString()
            
        }    
    }
}

function addition() {
    if (n1s == 0 && n1 != "naur") {
        kalk = 1
        n1s = 1
        kalkdisplay = "+"
        document.getElementById("displaytext").innerHTML = n1.toString() + kalkdisplay
    }
    else if (n1s == 0 && result != "naur") {
        n1 = result
        kalk = 1
        n1s = 1
        kalkdisplay = "+"
        document.getElementById("displaytext").innerHTML = n1.toString() + kalkdisplay
    }
}
function subtraction() {
    if (n1s == 0 && n1 != "naur") {
        kalk = 2
        n1s = 1
        kalkdisplay = "-"
        document.getElementById("displaytext").innerHTML = n1.toString() + kalkdisplay
    }
    else if (n1s == 0 && result != "naur") {
        n1 = result
        kalk = 2
        n1s = 1
        kalkdisplay = "-"
        document.getElementById("displaytext").innerHTML = n1.toString() + kalkdisplay
    }       
}
function multiplication() {
    if (n1s == 0 && n1 != "naur") {
        kalk = 3
        n1s = 1
        kalkdisplay = "*"
        document.getElementById("displaytext").innerHTML = n1.toString() + kalkdisplay
    }
    else if (n1s == 0 && result != "naur") {
        n1 = result
        kalk = 3
        n1s = 1
        kalkdisplay = "*"
        document.getElementById("displaytext").innerHTML = n1.toString() + kalkdisplay
    }    
}
function division() {
    if (n1s == 0 && n1 != "naur") {
        kalk = 4
        n1s = 1
        kalkdisplay = "/"
        document.getElementById("displaytext").innerHTML = n1.toString() + kalkdisplay
    }
    else if (n1s == 0 && result != "naur") {
        n1 = result
        kalk = 4
        n1s = 1
        kalkdisplay = "/"
        document.getElementById("displaytext").innerHTML = n1.toString() + kalkdisplay
    }       
}

function finished() {
    if (n1s == 1 && n2 != "naur") {
        if (kalk == 1) {
            result = Number(n1) + Number(n2)
        }
        else if (kalk == 2) {
            result = Number(n1) - Number(n2)
        }
        else if (kalk == 3) {
            result = Number(n1) * Number(n2)
        }
        else if (kalk == 4) {
            result = Number(n1) / Number(n2)
        }
    document.getElementById("displaytext").innerHTML = result.toString()
    n1 = "naur"
    n1s = 0
    n2 = "naur"
    n2s = 0
    }



}
var red = 0;
var rup = 1;
var green = 0;
var gup = 1;
var blue = 0;
var bup = 1;
var lepick = 0;
var r = document.querySelector(':root');
setInterval (pick, 75);
setInterval (noog, 15);
function pick() {
    lepick = Math.floor(Math.random() * 3) + 1;
}
function noog() {
    if (rup == 1 && lepick == 1) {
        red++;
        if (red >= 255) {
            rup = 0;
        }
    }
    if (gup == 1 && lepick == 2) {
        green++;
        if (green >= 255) {
            gup = 0;
        }
    }
    if (bup == 1 && lepick == 3) {
        blue++;
        if (blue >= 255) {
            bup = 0;
        }
    }
    if (rup == 0 && lepick == 1) {
        red--;
        if (red <= 0) {
            rup = 1;
        }
    }
    if (gup == 0 && lepick == 2) {
        green--;
        if (green <= 0) {
            gup = 1;
        }
    }
    if (bup == 0 && lepick == 3) {
        blue--;
        if (blue <= 0) {
            bup = 1;
        }
    }
    var coolfärg = 'rgb('+ red +','+ green +','+ blue +')'
    r.style.setProperty('--färg', coolfärg);
}
var red3 = 0;
var rup3 = 1;
var green3 = 0;
var gup3 = 1;
var blue3 = 0;
var bup3 = 1;
var lepick3 = 0;
var r3 = document.querySelector(':root');
setInterval (pick3, 75);
setInterval (noog3, 15);
function pick3() {
    lepick3 = Math.floor(Math.random() * 3) + 1;
}
function noog3() {
    if (rup3 == 1 && lepick3 == 1) {
        red3++;
        if (red3 >= 255) {
            rup3 = 0;
        }
    }
    if (gup3 == 1 && lepick3 == 2) {
        green3++;
        if (green3 >= 255) {
            gup3 = 0;
        }
    }
    if (bup3 == 1 && lepick3 == 3) {
        blue3++;
        if (blue3 >= 255) {
            bup3 = 0;
        }
    }
    if (rup3 == 0 && lepick3 == 1) {
        red3--;
        if (red3 <= 0) {
            rup3 = 1;
        }
    }
    if (gup3 == 0 && lepick3 == 2) {
        green3--;
        if (green3 <= 0) {
            gup3 = 1;
        }
    }
    if (bup3 == 0 && lepick3 == 3) {
        blue3--;
        if (blue3 <= 0) {
            bup3 = 1;
        }
    }
    var coolfärg3 = 'rgb('+ red3 +','+ green3 +','+ blue3 +')'
    r2.style.setProperty('--färg3', coolfärg3);
}
var red2 = 0;
var rup2 = 1;
var green2 = 0;
var gup2 = 1;
var blue2 = 0;
var bup2 = 1;
var lepick2 = 0;
var r2 = document.querySelector(':root');
setInterval (pick2, 75);
setInterval (noog2, 15);
function pick2() {
    lepick2 = Math.floor(Math.random() * 3) + 1;
}
function noog2() {
    if (rup2 == 1 && lepick2 == 1) {
        red2++;
        if (red2 >= 255) {
            rup2 = 0;
        }
    }
    if (gup2 == 1 && lepick2 == 2) {
        green2++;
        if (green2 >= 255) {
            gup2 = 0;
        }
    }
    if (bup2 == 1 && lepick2 == 3) {
        blue2++;
        if (blue2 >= 255) {
            bup2 = 0;
        }
    }
    if (rup2 == 0 && lepick2 == 1) {
        red2--;
        if (red2 <= 0) {
            rup2 = 1;
        }
    }
    if (gup2 == 0 && lepick2 == 2) {
        green2--;
        if (green2 <= 0) {
            gup2 = 1;
        }
    }
    if (bup2 == 0 && lepick2 == 3) {
        blue2--;
        if (blue2 <= 0) {
            bup2 = 1;
        }
    }
    var coolfärg2 = 'rgb('+ red2 +','+ green2 +','+ blue2 +')'
    r2.style.setProperty('--färg2', coolfärg2);
}