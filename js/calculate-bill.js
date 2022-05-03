//get a reference to the calculate button
const calculateBillElement = document.querySelector(".calculateBtn")
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");

//get a reference to the billString
const billStringElement = document.querySelector(".billString");

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
function calculateBtnClicked(){
   //get the string enterred in the textArea
    var billString =billStringElement.value;

    //split string
    var billItem = billString.split(",");

    //variable for the total bill.
    var billTotal = 0;

    //loop over all the bill items

    for(var i = 0; i < billItem.lenght; i++){
        var billItem = billItem[i].trim();

        if(billItem === "call"){
            billTotal += 2.75;
        }else if(billItem === "sms"){
            billTotal += 0.75;
        }
        else{
            alert("Please note : You have reach critical level")
            break;
        }

    }
    //round it to two decimal
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;

    billTotalElement.classList.remove("danger");
    billTotalElement.classList.remove("warning");

    //color the total based on the criteria
    if (roundedBillTotal >= 30) {
        // adding the danger class will make the text red
        billTotalElement.classList.add("danger");
    }
    else if (roundedBillTotal >= 20) {
        billTotalElement.classList.add("warning");
    }
}
//link the function to a click event on the calculate button

calculateBtn.addEventListener('click', calculateBtnClicked);
