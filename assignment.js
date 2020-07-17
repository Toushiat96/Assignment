
// feetToMile

function feetToMile(feet){
    if(feet<=0){
        console.log("Input is invalid");
    }
    else{
        return feet/5280;
    }
}

// woodcalculator
function woodCalculator(chair,table,bed){
        chair=chair*1;
        table=table*3;
        bed=bed*5;
        totalWood=chair+table+bed;
        return totalWood;
}
totalResult=woodCalculator(3,4,5);
console.log(totalResult);

// Brickcalculator

function brickCalculator(floor){
     let totalBrick;
    if(floor >=1 && floor<=10){
        return totalBrick = floor*15*1000;
    }
    else if( floor >=11 && floor <=20){
        return totalBrick =floor *12 *1000;
    }
    else if( floor > 20){
        return totalBrick = floor *10*1000;
    }
}

var result = brickCalculator(21);
console.log(result);

// tinyfriend

function tinyFriend(name){
    
    smallest=name[0].length ;
    
    for(i=0;i<name.length;i++){
        element=name[i].length;
       if(element<smallest){
           smallest=element;
       }
       if(smallest==name[i].length){
        value=name[i];
        
    }
    }
    
    return value;
}

tinyResult=tinyFriend(["aaaa","aaaaa","aaaaaa","aa  ","aaa"]);
console.log(tinyResult);
