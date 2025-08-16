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


// 3rd Question

let loan = 1000000;
let creditScore = 700;
let isGovtEmployee = true; 
let interestRate = 0; 
let loanMonth = "december"; 

if (loan>1000000 && creditScore>800){
    interestRate = 7;
    console.log("7%")
    if(isGovtEmployee){
    interestRate -= 0.5;
    console.log("Govt Employee benefit applied (-0.5%)");
}
} else if (loan>50000 && creditScore>=650 && creditScore<=800){
    interestRate = 9;
    console.log("9%");
    if (isGovtEmployee){
         interestRate -= 0.5;
        console.log("Govt Employee benefit applied (-0.5%)");
}
} else if (loanMonth === "december"){
    interestRate = 10 - 1;
    console.log("9%");
}else {
     interestRate = 10; 
    console.log("10%");
}

//4th Question 

let orderValue = 8000;
let destination = "same city";
let isPriority = true;
let isPremiumMember1 = false;
let isWeekend = false;
let shippingCharge = 0;

if (destination === "same city") {
    if (isPriority && orderValue > 2000) {
        shippingCharge = 0;
        console.log("Free Delivery");
    } else if (isPriority && orderValue <= 2000) {
        shippingCharge = 50;
        console.log("₹50 Shipping");
    } else {
        shippingCharge = 50;
        console.log("₹50 Shipping");
    }

} else if (destination === "same state") {
    if (orderValue > 5000) {
        shippingCharge = 0;
        console.log("Free Delivery");
    } else {
        shippingCharge = 100;
        console.log("₹100 Shipping");
    }

} else if (destination === "other state") {
    if (isPremiumMember1 && isWeekend) {
        shippingCharge = 100;
        console.log("₹100 Shipping");
    } else {
        shippingCharge = 200;
        console.log("₹200 Shipping");
    }
}else{
    console.log("Enter Correct Destination")
}

// 5th Question 

let gymFee = 7000;
let isMembershipType = "gold";
let days = 30;
let paymentMethod = "UPI";

let totalFee = gymFee;
let cashback = 0;

if(isMembershipType === "gold" && days>20 && paymentMethod==="UPI"){
    cashback = 500;
    totalFee = gymFee - cashback;
    console.log(totalFee);
}else if(isMembershipType === "silver" && days>15 && paymentMethod==="UPI"){
    cashback = 300;
    totalFee = gymFee - cashback;
    console.log(totalFee);
}else if(isMembershipType === "bronze" && days>10 && paymentMethod==="Debit card"){
    cashback = 100;
    totalFee = gymFee - cashback;
    console.log(totalFee);
}else{
    cashback = 0;
    totalFee = gymFee;
    console.log("Total Amount")
}

  







