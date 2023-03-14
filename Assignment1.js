//Exercise1
function totalPayment(cost){
let total = (cost + 3)+ (cost*0.01);
return total;
}

console.log(totalPayment(200));
//Exercise2
//Part1


function greeting(name1,name2,name3){
console.log(`Welcome ${name1}, ${name2}, ${name3}`);
}
greeting('John','Tom','Jane');



//Part2

function calAge(yearBirth, present){
return age = present-yearBirth;
}
calAge(2000,2023);
console.log(age); 

//Part3
function greetingandAge(name1,name2,name3,age1,age2,age3){
    console.log(`Welcome ${name1} you are ${age1}, Welcome ${name2} you are ${age2}, Welcome ${name3} you are ${age3}`);
    }
    greetingandAge('John','Tom','Jane',12,15,23);


//Challenge Yourself
//Part1
function TrueorFalse(score){
    if(score>=5){
        return true;
    }
    else{return false;}
}
console.log(TrueorFalse(6));
//Part2
function grade(score){
    if(score>8){
        return "Excellent";
    }
    else{return "Try it again";}
}
console.log(grade(6));
//Part3
function grading(score){
    if(score==11){
        return "Perfect";
    }
    else{return "Try it again";}
}
console.log(grading(11));