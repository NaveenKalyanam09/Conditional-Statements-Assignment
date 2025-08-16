//First Question

let price = 1000;
let finalPrice = price;
let age = 22;
let day = "monday";
let isFestival = "no";
let isStudent = "yes";
let hasId = "yes";
let month = "july";

if(age>60 && day !== "sunday" && isFestival === "no"){
       console.log(finalPrice = price - (price * 0.3));
} else if(age<25 && isStudent === "yes" && hasId === "yes" && month !== "december"){
        console.log(finalPrice = price - (price * 0.2));
} else if (day === "sunday"){
    console.log(finalPrice = price - (price * 0.1));
} else {
    console.log("Final Ticket Price: ₹" + finalPrice);
}



