<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/event1(wedding).css">
    <link rel="stylesheet" href="../css/event2(workshops).css">
    <script src="../script/script.js" defer></script>
    <title>Bookings</title>
</head>

<body>
    <section>
        <!--Navigation Bar-->
        <nav class="nav1"> 
            <div>
                <ul class="h_ul">
                    <li class="nav_li"> <h2 class="nav_h"> <a class="nav_a" href="../html/home.html">Home </a> </h2> </li>
                    <li class="nav_li"> <h2 class="nav_h"> <a class="nav_a" href="../html/branches.html">Branches </a> </h2> </li>
                    <li class="nav_li"> <h2 class="nav_h"> <a class="nav_a" href="../html/Adventures.html">Adventures </a> </h2> </li>
                    <li class="nav_li"> <h2 class="nav_h"> <a class="nav_a" href="./Restaurants.html">Restaurants </a> </h2> </li>
                    <li class="nav_li"> <h2 class="nav_h"> <a class="nav_a" href="../html/Weddings.html">Weddings </a> </h2> </li><!--Event_1-->
                    <li class="nav_li"> <h2 class="nav_h"> <a class="nav_a" href="../html/Workshops.html">Workshops </a> </h2> </li><!--Event_2-->
                    <li class="nav_li"> <h2 class="nav_h"> <a class="nav_a" href="../html/bookings.html">Bookings </a> </h2> </li>
                </ul>
            </div>
            <div> <img class="logo" src="../img/logo.png" alt="Kylie logo"> </div>
        </nav>
    </section>


            <!--Rooms Booking-->


    <form id="bookingForm"> 
        <br><h2 class="roombooking">Room Bookings</h2>
        <div class="formCon">

            <div class="formDivs">
                &nbsp; Name :
                <br> &nbsp; &emsp;<input id="name" type="text" name="Fname" size="25"   required="required" placeholder="Type Here"> <br> <br>
            </div>
            
            <div class="formDivs" >       
                &nbsp; NIC:
                <br> &nbsp; &emsp;<input id="nic" type="text" name="nic" size="25" maxlength="12" required="required" placeholder="Type Here"> <br> <br>
            </div>

            <div class="formDivs">
                &nbsp; Address:
                <br> &nbsp; &emsp;<input id="address" type="text" name="address" size="25"  required="required" placeholder="Type Here"> <br>
            </div>
           
            <div class="formDivs">
                &nbsp; Checkin Date :
                <br> &nbsp; &emsp;<input id="checkindate" type="date" name="checkindate"  required="required"> <br> <BR>
            </div>  

            <div class="formDivs">
                &nbsp; Checkout Date :
                <br>&emsp;<input id="checkoutdate" type="date" name="checkoutdate"  required="required"> <br> <BR>
            </div>  
 
            <div class="formDivs">
                &nbsp; How many days in here :
                <br>&nbsp; &emsp;<input id="date" type="number" name="date" min="0" placeholder="Type Here"> <br> <BR>
            </div> 

            <div class="formDivs">
                &nbsp; Contact Number :
                <br>&nbsp;&emsp;<input id="phone" type="tel" name="tel" size="25" maxlength="10"  required="required" pattern="[0-9]{10}" placeholder="Type Here"> <br> <BR>
            </div>
            
            <div class="formDivs">
                &nbsp; E mail : 
                <br>&nbsp; &emsp;<input id="email" type="email" size="25" name="email" placeholder="Type Here"> <br> <BR>
            </div>
            
            <div class="formDivs">
                &nbsp; Promo Code :
                <br>&nbsp;&emsp;<input id="promoCode" type="text" name="prom" placeholder="Type Here">
            </div>
            
            <div class="formDivs">
                &nbsp; Number of rooms:<br> &emsp;&nbsp;
                <input type="checkbox" value="single" name="single">Single: <input type="number" id="singleRooms" min="0" > <br> &emsp;&nbsp;
                <input type="checkbox" value="double" name="double">Double: <input type="number" id="doubleRooms" min="0" > <br> &emsp;&nbsp;
                <input type="checkbox" value="triple" name="triple">Triple: <input type="number" id="tripleRooms" min="0" > <br> <br>
            </div>
            
            <div class="formDivs">
                &nbsp; Extra Requirements :
                <br> &emsp;&nbsp;
                <input id="wifi" type="checkbox" name="wifi">Wifi <br> &emsp;&nbsp;
                <input id="pool" type="checkbox" name="pool">Pool View <br> &emsp;&nbsp;
                <input id="garden" type="checkbox" name="garden">Garden View <br> &emsp;&nbsp;
                <input id="bed" type="checkbox" value="extrabed" name="extrabed">Extra Bed <br> &emsp;&nbsp;
                &nbsp;<input type="number" id="beds"><br><br>
            </div>

            <div class="formDivs"> 
                &nbsp; No of people
                <ul class="">
                    <li>Adults: <input type="number" id="adultsInput" min="0" value="0"  required="required"> </li>
                    <li>Children:
                        <ul>
                            <li>Above 5 years<input type="number" id="childrenInput" min="0" value="0"  required="required"></li>
                       </ul>
                    </li>
               </ul>           
            </div>
        </div>

        <div>
            <div id="currentBooking">
                <h2 class="perInfo">Current Booking</h2>
                <p>Total Cost: <span id="currentBookingCost">0.00</span></p>
            </div>

            <div id="overallBooking">
                <h2 class="perInfo"></h2>
               <p><span id="overallBookingCost"></span></p>
            </div>
        </div>

        <div class="RoomBtnDiv">
            <!-- Button in Rooms Bookings-->
            <button id="addToFavoritesBtn" onclick="roomsaddToFavorites()">Add to Favorites</button>
            <button type="button" id="checkLoyaltyPointsBtn" onclick="checkLoyaltyPoints()">Check Loyalty Points</button>
            <button id="roomBtn" onclick="bookRoomNow()">Book Now</button> 
        </div>
    </form>





                <!--Adventure Booking (diving)-->
    <form id="adventureBookingForm">
        <h2 class="diving">Diving Booking</h2>
        <div class="formCon1">        
            <div class="formDivs">
                &nbsp; Name:<br>
                &nbsp;&emsp;<input type="text" id="username" name="name" required="required" placeholder="Type Here"> <br> <br>
            </div>

            <div class="formDivs">
                &nbsp; Phone Number:<br>
                &nbsp;&emsp;<input type="tel" id="userphoneNumber" name="phoneNumber" pattern="[0-9]{10}" placeholder="Type Here"> <br> <br>
            </div>

            <div class="formDivs">
                &nbsp;Date:<br>
                &nbsp;&emsp;<input type="date" id="bookingdate" name="date" required="required" placeholder="Type Here"> <br> <br>     
            </div>

            <div class="formDivs">     
                &nbsp; E - Mail:<br>
                &nbsp;&emsp;<input type="email" id="usermail" name="mail" placeholder="Type Here"> <br> <br>
            </div>
  
            <div class="formDivs">
                &nbsp; Local Adults:<br>
                &nbsp;&emsp;<input type="number" id="localAdults" name="localAdults" min="0" value="0" placeholder="Type Here"> <br> <br>
            </div>
  
            <div class="formDivs">
                &nbsp; Local Kids:<br>
                &nbsp;&emsp;<input type="number" id="localKids" name="localKids" min="0" value="0" placeholder="Type Here"> <br> <br>
            </div>
  
            <div class="formDivs">
                &nbsp; Foreign Adults:<br>
                &nbsp;&emsp;<input type="number" id="foreignAdults" name="foreignAdults" min="0" value="0"> <br> <br>
            </div>
  
            <div class="formDivs">
                &nbsp; Foreign Kids:<br>
                &nbsp;&emsp;<input type="number" id="foreignKids" name="foreignKids" min="0" value="0"><br>  <br>
            </div>
        </div><br><br>
        
        <div class="formCon2">
            <div class="formDivs">
                &nbsp; &spades;Guide during the diving session, <br>
                
                &nbsp; &emsp;<input type="checkbox" id="extraChargeAdult" name="extraChargeAdult">
                Adult – 1000LKR extra will be charged <br>
                
                &nbsp; &emsp;<input type="checkbox" id="extraChargeKids" name="extraChargeKids">
                Kid – 500LKR extra will be charged 
            </div>
        </div><br>

        <div class="AdvBtnDiv">
            <button id="addToFavoritesBtnAdv" onclick="adventureAddToFavorites()">Add to Favorites</button>
            <button id="costAdvnetureBtn" onclick="calculateAdventureCost()">Book Adventure</button>
            <br> <br>
        </div>
        </form>
</body>
</html>

