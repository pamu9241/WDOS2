 document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("currentBookingCost").innerText = "0.00";
    document.getElementById("overallBookingCost").innerText = "0.00";
});



//Hotel prices save as const
const kidCost = 5000.00;
const bedCost = 8000.00;
const singleRoomCost = 25000.00;
const doubleRoomCost = 35000.00;
const tripleRoomCost = 40000.00;
const promoCodeDiscountPercentage = 5;



function bookRoomNow() {
    
    const names= document.getElementById("name").value;
    const beds = parseInt(document.getElementById("beds").value) || 0;
    const adults = parseInt(document.getElementById("adultsInput").value) || 0;
    const kids = parseInt(document.getElementById("childrenInput").value) || 0;

    const singleRooms = parseInt(document.getElementById("singleRooms").value) || 0;
    const doubleRooms = parseInt(document.getElementById("doubleRooms").value) || 0;
    const tripleRooms = parseInt(document.getElementById("tripleRooms").value) || 0;
  
    const bed = document.getElementById("bed").checked;
    const wifi = document.getElementById("wifi").checked;
    const pool = document.getElementById("pool").checked;
    const garden = document.getElementById("garden").checked;    
    var currentBookingCost = calculateCurrentBookingCost(singleRooms, doubleRooms, tripleRooms);
    
    
    // Update current booking cost
    document.getElementById('currentBookingCost').innerText = totalCost.toFixed(2);

    // Update overall booking cost
    const overallBookingCost = parseFloat(document.getElementById('overallBookingCost').innerText) + totalCost;
    document.getElementById('overallBookingCost').innerText = overallBookingCost.toFixed(2);



    // Reset the form
    document.getElementById("bookingForm").reset();
}

function calculateCurrentBookingCost(singleRooms, doubleRooms, tripleRooms) {
    const beds = parseInt(document.getElementById("beds").value) || 0;
    const kids = parseInt(document.getElementById("childrenInput").value) || 0;
    const promoCodes = document.getElementById("promoCode").value;
    const dates = parseInt(document.getElementById("date").value) || 0;

    let currentBookingCost = (((singleRooms * singleRoomCost) + (doubleRooms * doubleRoomCost) + (tripleRooms * tripleRoomCost) + (kids * kidCost) + (beds * bedCost))*(dates));

    if (promoCodes === 'Promo123') {
        const discountAmount = (promoCodeDiscountPercentage / 100) * currentBookingCost;
        currentBookingCost -= discountAmount;
    }
    return currentBookingCost;

}


//Execution of the add to favurite button

function roomsaddToFavorites(){
    const beds = parseInt(document.getElementById("beds").value) || 0;
    const adults = parseInt(document.getElementById("adultsInput").value) || 0;
    const kids = parseInt(document.getElementById("childrenInput").value) || 0;

    const singleRooms = parseInt(document.getElementById("singleRooms").value) || 0;
    const doubleRooms = parseInt(document.getElementById("doubleRooms").value) || 0;
    const tripleRooms = parseInt(document.getElementById("tripleRooms").value) || 0;
    const totalRooms = singleRooms + doubleRooms + tripleRooms;

    const names= document.getElementById("name").value;
    const bed = document.getElementById("bed").checked;
    const wifi = document.getElementById("wifi").checked;
    const pool = document.getElementById("pool").checked;
    const garden = document.getElementById("garden").checked;



    const currentBookingCost = calculateCurrentBookingCost(singleRooms, doubleRooms, tripleRooms);
    document.getElementById("currentBookingCost").innerText = currentBookingCost.toFixed(2);

    const overallBookingCost = parseFloat(document.getElementById("overallBookingCost").innerText) + currentBookingCost;
    document.getElementById("overallBookingCost").innerText = overallBookingCost.toFixed(2);

    const lastMessage = `Thank you ${names} for booking!\n\nDetails:  Single Rooms: ${singleRooms}  Double Rooms: ${doubleRooms}  Triple Rooms: ${tripleRooms}  Extra Requirements:    Wi-Fi: ${wifi ? 'Yes' : 'No'}, Pool: ${pool ? 'Yes' : 'No'}, Garden View ${garden ? 'Yes' : 'No'}, Extra beds: ${bed ? 'Yes' : 'No'}, No of beds: ${beds}  Adults:${adults} Kids(Above 5 years): ${kids} Total Cost: ${currentBookingCost.toFixed(2)}`;

    //Set local storage
    let lastMessage_serialized=JSON.stringify(lastMessage);
    localStorage.setItem("lastMessage",lastMessage_serialized);
    console.log(lastMessage_serialized);

    alert("Added to favorites")
}




//Javascript fo r Adventure Booking
function calculateAdventureCost() {
    // Diving costs fot lacal & foreign
    const LOCAL_ADULT_COST = 5000;
    const LOCAL_KID_COST = 2000;
    const FOREIGN_ADULT_COST = 10000;
    const FOREIGN_KID_COST = 5000;
    const GUIDE_ADULT_COST = 1000;
    const GUIDE_KID_COST = 500;

    const advname =document.getElementById('username').value;
    const localAdults = parseInt(document.getElementById('localAdults').value);
    const localKids = parseInt(document.getElementById('localKids').value);
    const foreignAdults = parseInt(document.getElementById('foreignAdults').value);
    const foreignKids = parseInt(document.getElementById('foreignKids').value);
    const extraChargeAdult = document.getElementById('extraChargeAdult').checked;
    const extraChargeKids = document.getElementById('extraChargeKids').checked;

    // Calculate individual costs
    const totalLocalAdultCost = localAdults * LOCAL_ADULT_COST;
    const totalLocalKidCost = localKids * LOCAL_KID_COST;
    const totalForeignAdultCost = foreignAdults * FOREIGN_ADULT_COST;
    const totalForeignKidCost = foreignKids * FOREIGN_KID_COST;

    // Calculate guide costs if selected
    const guideCost = (extraChargeAdult ? GUIDE_ADULT_COST : 0) + (extraChargeKids ? GUIDE_KID_COST : 0);

    // Calculate total cost
    const totalCost = totalLocalAdultCost + totalLocalKidCost + totalForeignAdultCost + totalForeignKidCost + guideCost;


    // Update current booking cost
    document.getElementById('currentBookingCost').innerText = totalCost.toFixed(2);

    // Update overall booking cost
    const overallBookingCost = parseFloat(document.getElementById('overallBookingCost').innerText) + totalCost;
    document.getElementById('overallBookingCost').innerText = overallBookingCost.toFixed(2);

    // Display adventure details in confirmation message
    const confirmationMessage = `Thank you for booking the diving adventure!\n\nDetails:\nLocal Adults: ${localAdults}\nLocal Kids: ${localKids}\nForeign Adults: ${foreignAdults}\nForeign Kids: ${foreignKids}\nGuide: ${extraChargeAdult ? 'Yes (Adult)' : 'No'}, ${extraChargeKids ? 'Yes (Kid)' : 'No'}\nTotal Cost: ${totalCost.toFixed(2)} LKR`;

    // Display confirmation message
    alert(confirmationMessage);

    // Reset form and booking details
    document.getElementById('adventureBookingForm').reset();
    document.getElementById('currentBookingCost').innerText = '0.00';
}




//Execution of add to favorite adventure button
function adventureAddToFavorites(){
    const LOCAL_ADULT_COST = 5000;
    const LOCAL_KID_COST = 2000;
    const FOREIGN_ADULT_COST = 10000;
    const FOREIGN_KID_COST = 5000;
    const GUIDE_ADULT_COST = 1000;
    const GUIDE_KID_COST = 500;

    const localAdults = parseInt(document.getElementById('localAdults').value);
    const localKids = parseInt(document.getElementById('localKids').value);
    const foreignAdults = parseInt(document.getElementById('foreignAdults').value);
    const foreignKids = parseInt(document.getElementById('foreignKids').value);
    const extraChargeAdult = document.getElementById('extraChargeAdult').checked;
    const extraChargeKids = document.getElementById('extraChargeKids').checked;

    const totalLocalAdultCost = localAdults * LOCAL_ADULT_COST;
    const totalLocalKidCost = localKids * LOCAL_KID_COST;
    const totalForeignAdultCost = foreignAdults * FOREIGN_ADULT_COST;
    const totalForeignKidCost = foreignKids * FOREIGN_KID_COST;

    const guideCost = (extraChargeAdult ? GUIDE_ADULT_COST : 0) + (extraChargeKids ? GUIDE_KID_COST : 0);

    const totalCost = totalLocalAdultCost + totalLocalKidCost + totalForeignAdultCost + totalForeignKidCost + guideCost;

    document.getElementById('currentBookingCost').innerText = totalCost.toFixed(2);

    const overallBookingCost = parseFloat(document.getElementById('overallBookingCost').innerText) + totalCost;
    document.getElementById('overallBookingCost').innerText = overallBookingCost.toFixed(2);

    const adventureComfirm = `Thank you for booking the diving adventure! Details:Local Adults: ${localAdults}\nLocal Kids: ${localKids}\nForeign Adults: ${foreignAdults}\nForeign Kids: ${foreignKids}\nGuide: ${extraChargeAdult ? 'Yes (Adult)' : 'No'}, ${extraChargeKids ? 'Yes (Kid)' : 'No'}\nTotal Cost: ${totalCost.toFixed(2)} LKR`;
    

    let adventureComfirm_serialized=JSON.stringify(adventureComfirm);
    
    localStorage.setItem("adventureComfirm",adventureComfirm_serialized);
    console.log(adventureComfirm_serialized);


    alert("Added to favorites")
}