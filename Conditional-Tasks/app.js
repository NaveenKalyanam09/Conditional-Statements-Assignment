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


// 6th Question 

let cupSize = "large";
let addOns = "flavored syrup";
let addOnsCost = 0;
let cupSizeCost = 0;
let totalbill = cupSizeCost + addOnsCost;
switch(cupSize+"-"+addOns){
    case "small-extra Shot":
        addOnscost = 30;
        cupSizeCost = 100;
        totalbill = cupSizeCost + addOnscost;
        console.log(totalbill);
    break;
    case "small-flavored syrup":
        addOnscost = 40;
        cupSizeCost = 110;
        totalbill = cupSizeCost + addOnscost;
        console.log(totalbill);
    break;
    case "small-whipped cream":
        addOnscost = 80;
        cupSizeCost = 180;
        totalbill = cupSizeCost + addOnscost;
        console.log(totalbill);
    break;

    case "medium-extra Shot":
        addOnscost = 50;
        cupSizeCost = 170;
        totalbill = cupSizeCost + addOnscost;
        console.log(totalbill);
    break;
    case "medium-flavored syrup":
        addOnscost = 70;
        cupSizeCost = 180;
        totalbill = cupSizeCost + addOnscost;
        console.log(totalbill);
    break;
    case "medium-whipped cream":
        addOnscost = 80;
        cupSizeCost = 190;
        totalbill = cupSizeCost + addOnscost;
        console.log(totalbill);
    break;
    case "large-extra Shot":
        addOnscost = 60;
        cupSizeCost = 180;
        totalbill = cupSizeCost + addOnscost;
        console.log(totalbill);
    break;
    case "large-flavored syrup":
        addOnscost = 90;
        cupSizeCost = 260;
        totalbill = cupSizeCost + addOnscost;
        console.log(totalbill);
    break;
    case "large-whipped cream":
        addOnscost = 90;
        cupSizeCost = 300;
        totalbill = cupSizeCost + addOnscost;
        console.log(totalbill);
    break;

    case "extralarge-extra Shot":
        addOnscost = 200;
        cupSizeCost = 500;
        totalbill = cupSizeCost + addOnscost;
        console.log(totalbill);
    break;
    case "extralarge-flavored syrup":
        addOnscost = 140;
        cupSizeCost = 410;
        totalbill = cupSizeCost + addOnscost;
        console.log(totalbill);
    break;
    case "extralarge-whipped cream":
        addOnscost = 180;
        cupSizeCost = 380;
        totalbill = cupSizeCost + addOnscost;
        console.log(totalbill);
    break;
    default:
        console.log("invalid cup size or invalid addons");
    break;
}


// 7th Question

let plan = "unlimited"; 
let isSpecialWeek = false;

let validityDays = 0;
let cost = 0;

switch (plan.toLowerCase()) {
    case "talktime":
        cost = 100;
        switch(isSpecialWeek){
            case true:
                validityDays = 30;
                break;
            case false:
                validityDays = 28;
                break;
        }
        console.log(`Plan: ${plan}`);
        console.log(`Cost: ₹${cost}`);
        console.log(`Validity: ${validityDays} days`);
        break;

    case "data":
        cost = 200;
        switch(isSpecialWeek){
            case true:
                validityDays = 58;
                break;
            case false:
                validityDays = 56;
                break;
        }
        console.log(`Plan: ${plan}`);
        console.log(`Cost: ₹${cost}`);
        console.log(`Validity: ${validityDays} days`);
        break;

    case "combo":
        cost = 600;
        switch(isSpecialWeek){
            case true:
                validityDays = 86;
                break;
            case false:
                validityDays = 84;
                break;
        }
        console.log(`Plan: ${plan}`);
        console.log(`Cost: ₹${cost}`);
        console.log(`Validity: ${validityDays} days`);
        break;

    case "unlimited":
        cost = 999;
        switch(isSpecialWeek){
            case true:
                validityDays = 367;
                break;
            case false:
                validityDays = 365;
                break;
        }
        console.log(`Plan: ${plan}`);
        console.log(`Cost: ₹${cost}`);
        console.log(`Validity: ${validityDays} days`);
        break;

    default:
        console.log("Invalid plan selected!");
}


  







