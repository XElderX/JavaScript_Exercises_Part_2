// #1 UŽDUOTIS: Sukurkite funkciją leftPad, kuri padavus stringą ir plotį, kuriame jis turi išsitekti išspausdina stringą dešinėje tarkim: leftPad(text, width) 
// :  leftPad(‘ab’, 4) → |__ab| 

/* function leftPad (text,width){
    if (text.length>=width){
        return `${text}`
    }
    else {
        return `_${leftPad(text,width-1)}`
    }
}
console.log(leftPad("labas",7)) */

// #2.Uždaviniai:
// faktorialas neigiamiems skaičiams matematiškai nėra apibrėžtas, bet google kalkuliatorius suskaičiuoja! 5! ⇒ -120 ⇒ -(5)! (triukas!). Pamofikuokite klasėje matytą
//  factorial funkciją, kad veiktų taip kaip google kalkuliatorius.


/* let factorial = (number) => {
    if(number<0){
        for(i=number+1; i<0; i++){
            number*=(i)
        }
        return number
    }
    for(i=number-1; i>0; i--){
        number*=(i)
    }
    return number
    }
console.log(factorial(-5))
 */
// #3 užduotis padarykite tyrimą - internete raskite rekursyvios funkcijos pavyzdį, kuris jums aiškiausias.  Parašykite kodą, kuris jums geriausiai pailiustruotų jos veikimą - 
//parenkite pavyzdį sau pačiam. Nepamirškite, jog pavyzdys, turi būti taip parašytas, jog po mėnesio sugrįžus būtų visiškai aišku kaip, kas, kam ir kodėl. sužinokite ar galima
// parašyti arraySum() rekursyviai? Ir jei taip - parašykite, jei ne, pasakykite kodėl.

/* let sumFactorial = function(number){
   if (number<=1){
       return number 
   }
  return number + sumFactorial(number-1)
    

}
console.log(sumFactorial(7)) */