// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

start 'Split the nota'

let summa = användarinput (heltal)
let friends = användarinput (heltal)
let dricks = användariput (decimaltal)

function kontrollera värden
    if (summa <= 0) || (friends < 1) || (dricks < 0)
        then print "kontrollera värden" och starta om
    end if     

    if "dricks" > 0.2
        print "Mycket generös dricks! Är du säker?" JA/NEJ
    end if
end function        

function omräkningsfaktor
    set variabel "dricksfaktor" = 1
    if "dricks" > 0
        then låt "dricksfaktor" = "dricksfaktor" + "dricks"
    
    
end function

function räkna ut
    set "totalsumma" = (multiplicera "summa" med "dricksfaktor") 
    set "andel" = ("totalsumma" dividerat med "antal vänner")
    print "Varje person ska betala 'andel' kr"
end funcion


*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

function play()
    SET variabel ordbok = [..., ..., ...]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till "FOUR";
    SET variabel slutOrd till "FIVE";
    SET variabel antalOrd till 0;
    SET variabel wordOne, wordTwo
end function

while (wordOne!== slutOrd)
    wordTwo = användarinput()
    if (spellcheck(wordTwo))
        antalOrd ++
        slutcheck(wordTwo   )

    print "GRATTIS du klarade spelet på [antalOrd] ord"

function isOneLetterApart(wordOne, wordTwo)
    SET variabel diffCount till 0;

    loop kolla [wordOne bokstav n] === [wordTwo bokstav n]
        if bokstav n !=== bokstav n
            diffcount ++
    end loop
            return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
end function

//RUNDA ETT
set wordOne = startOrd
set wordTwo = användarinput (foul)

//RUNDA TVÅ
set wordTwo = användarinput (fool)

//RUNDA TRE
set wordTwo = användarinput (foot)

//RUNDA FYRA

set wordTwo = användarinput (fort)

//RUNDA FEM

set wordTwo = användarinput (fore)

//RUNDA SEX

set wordTwo = användarinput (fire)

//RUNDA SJU

set wordTwo = användarinput (five)

*/