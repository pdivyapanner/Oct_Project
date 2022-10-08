Feature:  Hotel Booking In Adactin Application
@Ad1
Scenario Outline: Login Functionality

Given user Launch The Application

When user Enter The "<UserName>" In UserName Field

And user Enter the "<Password>" in Password Field

Then user Click On The Login Button It Navigate To "Adactin.com - Search Hotel"

Examples:
|UserName|Password|
|ABC|123|
|divyavin|Kani@123|
@Ad2
Scenario Outline: Search Hotel

When user Select The Location "<location>" in location field

And user Select The Hotel "<hotel>"

And user Select the roomType "<roomtype>"

And user Select The NoOfRooms "<noofrooms>"

And user Enter The CheckInDate "<date1>"

And user Enter The CheckOutDate "<date2>"

And user Select The NoOfAdultRoom "<adultroom>"

And user Select the NoOfChildRoom "<childroom>"

Then user Click On The Submit Button And It Navigate To "Adactin.com - Select Hotel"

Examples:
|location|hotel|roomtype|noofrooms|date1|date2|adultroom|childroom|
|Melbourne|Hotel Sunshine|Deluxe|2|02/10/2022|05/10/2022|3|3|
@Ad1
Scenario: Select Hotel

When user Click On The RadioButton

Then user Click On The Continue Button And It Navigate To "Adactin.com - Book A Hotel"
@Ad3
Scenario Outline: Book A Hotel

When user Enter the First Name "<firstName>"

And user Enter the Password "<password>"

And user Enter the Address "<address>"

And enter The Credit Card Number "<cardNo>"

And user Select The CreditCard Type "<cardtype>"

And user Select The Expiry Month Of CreditCard "<expirymonth>"

And user Select The Expiry Year Of CreditCard "<expiryyear>"

And user Enter The CVV Number "<cvvNo>"

Then user Click On The BookNow Button It Navigate To "Adactin.com - Hotel Booking Confirmation"

Examples:
|firstName|password|address|cardNo|cardtype|expirymonth|expiryyear|cvvNo|
|divya|vinay|gangai amman koil street|1231231231231231|VISA|4|2022|2365|
@Ad2
Scenario: Booking Confirmation

Then user Click On The LogOut Button to exit from the application

















 