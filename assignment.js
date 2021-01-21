

//converting kilometer to meter
function kilometerToMeter(kilometer){
    if(typeof(kilometer)!= "number"){
    return 'error: pls Input number';
    }
    if(kilometer<0){
    return 'pls avoid negative number';
    }
    return kilometer*1000;
}   
let meter= kilometerToMeter(5);
console.log(meter);
    


// budget calculator
function budgetCalculator(watch,phone,laptop){
    if(typeof(watch)!= "number" || typeof(phone)!= "number" || typeof(laptop)!= "number"){
    return 'error: pls Input number';
    }
    if(watch<0 || phone<0 || laptop<0){
    return "pls don't input negative number";
    }
    return ((watch*50)+(phone*100)+(laptop*500));
}
let totalCost= budgetCalculator(5,10,1);
console.log(totalCost);
    
    

 // hotel cost calculator
function hotelCost(day){
    if(day<0){
    return 'pls avoid negative number';
    }
    if(day<=10){
    return day*100;
    }
    if(day>10 && day<=20){
    return ((day-10)*80+(10*100));
    }
    if(day>20){
    return day*50;
    }
}
let totalBill= hotelCost(15);
console.log(totalBill);
    


// finding largest friend name
    
function megaFriend(friends){
    let largestName= friends[0];
    for(let i=0; i<friends.length; i++){
    if(typeof(friends[i])!= "string"){
    return 'pls input correct name';
    }
    if(friends[i].length > largestName.length){
    largestName = friends[i];
    }
    
    }
    return largestName;
 }
let largestFriendName= megaFriend(['agun','sadekur','golap','pulok','rahimuddinMiya']);

console.log(largestFriendName);