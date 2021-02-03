

// https://github.com/Rony696-dotcom/assignment.js




function kilometerToMeter(kilometer){

    if( kilometer >0){
     var meter = kilometer * 1000;
    }
    else{
        meter = "Minius Value not exiest";
    }
     return meter;
 }
 console.log(kilometerToMeter(5));









 function budgetCalculator(watch,phone,laptop){

    if(watch>=0 && phone>=0 && laptop>=0){
        var watchPrice=watch*50;
        var phonePrice = phone*100;
        var laptopPrice = laptop*500;
        var budget= watchPrice+phonePrice+laptopPrice;      

    }
    else{
        budget="Minius value not exist";
    }

    return budget;
}
console.log(budgetCalculator(5,3,2));









function hotelCost(sit){
    var cost = 0;
    if(sit <=10 && sit >=0){
        cost = sit * 100;
    }
    else if(sit <= 20 && sit >=11){
        var reservations1 = 10 * 100;
        var remaining = sit - 10;
        var reservations2 = remaining * 80;
        cost = reservations1 + reservations2;
    }
    else if (sit>=21){
        var reservations1 = 10 * 100;
        var reservations2 = 10 * 80;
        var remaining = sit - 20;
        var reservationsUnlimited = remaining * 50;
        cost = reservations1 + reservations2 + reservationsUnlimited;
    }


    else{
       cost= "Don't Exist"

    }

    
    return cost;

}

var count = hotelCost(22);
console.log(count);









function megaFriend(friends){
    var largestName=[];

    for (let i = 0; i < friends.length; i++) {
        var size = friends[i].length;

        if(size>largestName.length){
            largestName = friends[i];
        }
        
    }

    return largestName;
} 

console.log(megaFriend(["Rony","Munna","Jubayer","Jhanker Mahabub"]));