function horariodenegocios(numerodia,numerohora){
    if((numerodia>=1) && (numerodia<=5) && (numerohora>=9)&& (numerohora<=18)) {
        return true;
    
     }else {
        return false;
     } //if

}


function getDayNumber(janFirsDayNumber,yearDayNumber){
    return (janFirsDayNumber+(yearDayNumber-1))%7
}


function parte3(yearDayNumber,numerohora){
    getDayNumber(0, yearDayNumber);
    return horariodenegocios(day ,numerohora);
}
console.log(
parte3(23,17));