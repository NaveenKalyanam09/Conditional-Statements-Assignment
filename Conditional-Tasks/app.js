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

// Second Question
let amount = 200;
let finalAmount = amount;
let isPremiumMember = true;
let isWeekdayBetweenEvining = true;
let isSundayMorning = false;
let hasUsedCoupon = false; 

if(amount>1000 && isPremiumMember === true){
    finalAmount = amount - (amount * 15/100)
    console.log("Final Amount: ₹" + finalAmount)
    console.log("Benefit: 15% off + Free Delivery");
} else if (amount>=500 && amount<=1000 && isWeekdayBetweenEvining === true){
    finalAmount = amount - 100;
    console.log("Final Amount: ₹" + finalAmount);
    console.log("Benefit: ₹100 off");
} else if (amount<500 && isSundayMorning === true){
    console.log("Final Amount: ₹" + finalAmount);
    console.log("Benefit: Free Delivery only");
} else {
      console.log("Final Amount: ₹" + finalAmount);
      console.log("No extra benefit available");
}




