
function getDayNumber(janFirsDayNumber,yearDayNumber){
    return (janFirsDayNumber+(yearDayNumber-1))%7
}
console.log(getDayNumber(3,60));