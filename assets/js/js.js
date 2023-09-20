var adatok = []

function Tarol() {
    var obj = {
        rendszam: document.getElementById("rendszam").value,
        uzemanyag: document.getElementById("uzemanyag").value,
        elsotulajdonos: document.getElementById("elsotulajdonos").checked,
        ajtok3: document.getElementById("3ajtos").checked,
        ajtok5: document.getElementById("5ajtos").checked,
    }
    adatok.push(obj)
/*     document.getElementById("").value;
    document.getElementById("").value;
    document.getElementById("elsotulajdonos").checked = false;
    document.getElementById("rendszam").focus()   */  
}

function Statisztika() {
    document.getElementById("tablazat").style.display = "block"
    var benzin = 0;
    var disel = 0;
    var elektromos = 0;
    var elsotulajdonosarany = 0;
    for (let i = 0; i < adatok.length; i++) {
        if (adatok[i].uzemanyag == "benzin") {
            benzin++
        }
        else if (adatok[i].uzemanyag == "disel") 
        {
            disel++
        }
        else{
            elektromos++
        }
        document.getElementById("benzinszam").innerHTML = benzin
        document.getElementById("diselszam").innerHTML = disel
        document.getElementById("elektromosszam").innerHTML = elektromos
        
        


    }
}