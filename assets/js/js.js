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
}

function Statisztika() {
    document.getElementById("tablazat").style.display = "block"
    var benzin = 0;
    var disel = 0;
    var elektromos = 0;
    var elsotulajdonosarany = 0;
    var arany= 0;
    var regi = 0;
    var uj = 0;
    var ajto3 = 0;
    var ajto5 = 0;
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
        
        if (adatok[i].elsotulajdonos) {
            elsotulajdonosarany++
        }
        arany = (elsotulajdonosarany/adatok.length)*100

        document.getElementById("szazalek").innerHTML = arany

        if(adatok[i].ajtok3)
        {
            ajto3++
        }
        else
        {
            ajto5++
        }
        if (ajto3 < ajto5) {
            document.getElementById("nepszerubb").innerHTML = "Az 5 ajtós modell "
        }
        else{
            document.getElementById("nepszerubb").innerHTML = "Az 3 ajtós modell "
        }
        
        if (adatok[i].rendszam.length > 6) 
        {
            uj++
        }
        else
        {
            regi++
        }
        document.getElementById("regirendszam").innerHTML = regi
        document.getElementById("ujrendszam").innerHTML = uj
    }
}