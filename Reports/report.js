$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login Functionality",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"\u003cUserName\u003e\" In UserName Field",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user Enter the \"\u003cPassword\u003e\" in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user Click On The Login Button It Navigate To \"Adactin.com - Search Hotel\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-functionality;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 14,
      "id": "hotel-booking-in-adactin-application;login-functionality;;1"
    },
    {
      "cells": [
        "ABC",
        "123"
      ],
      "line": 15,
      "id": "hotel-booking-in-adactin-application;login-functionality;;2"
    },
    {
      "cells": [
        "divyavin",
        "Kani@123"
      ],
      "line": 16,
      "id": "hotel-booking-in-adactin-application;login-functionality;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Login Functionality",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"ABC\" In UserName Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user Enter the \"123\" in Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user Click On The Login Button It Navigate To \"Adactin.com - Search Hotel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Launch_The_Application()"
});
formatter.result({
  "duration": 4690396698,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_UserName_Field(String)"
});
formatter.result({
  "duration": 426510240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_the_in_Password_Field(String)"
});
formatter.result({
  "duration": 139173086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adactin.com - Search Hotel",
      "offset": 47
    }
  ],
  "location": "Step_Def.user_Click_On_The_Login_Button_It_Navigate_To(String)"
});
formatter.result({
  "duration": 3626670716,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003cAdactin.com - [Hotel Reservation System]\u003e but was:\u003cAdactin.com - [Search Hotel]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.stepdef.Step_Def.user_Click_On_The_Login_Button_It_Navigate_To(Step_Def.java:42)\r\n\tat ✽.Then user Click On The Login Button It Navigate To \"Adactin.com - Search Hotel\"(adactin.feature:11)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 16,
  "name": "Login Functionality",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"divyavin\" In UserName Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user Enter the \"Kani@123\" in Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user Click On The Login Button It Navigate To \"Adactin.com - Search Hotel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Launch_The_Application()"
});
formatter.result({
  "duration": 357715812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "divyavin",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_UserName_Field(String)"
});
formatter.result({
  "duration": 160095296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kani@123",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_the_in_Password_Field(String)"
});
formatter.result({
  "duration": 135191381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adactin.com - Search Hotel",
      "offset": 47
    }
  ],
  "location": "Step_Def.user_Click_On_The_Login_Button_It_Navigate_To(String)"
});
formatter.result({
  "duration": 6808966955,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Search Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;search-hotel",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Ad2"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user Select The Location \"\u003clocation\u003e\" in location field",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user Select The Hotel \"\u003chotel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Select the roomType \"\u003croomtype\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user Select The NoOfRooms \"\u003cnoofrooms\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Enter The CheckInDate \"\u003cdate1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user Enter The CheckOutDate \"\u003cdate2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Select The NoOfAdultRoom \"\u003cadultroom\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Select the NoOfChildRoom \"\u003cchildroom\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Click On The Submit Button And It Navigate To \"Adactin.com - Select Hotel\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;search-hotel;",
  "rows": [
    {
      "cells": [
        "location",
        "hotel",
        "roomtype",
        "noofrooms",
        "date1",
        "date2",
        "adultroom",
        "childroom"
      ],
      "line": 39,
      "id": "hotel-booking-in-adactin-application;search-hotel;;1"
    },
    {
      "cells": [
        "Melbourne",
        "Hotel Sunshine",
        "Deluxe",
        "2",
        "02/10/2022",
        "05/10/2022",
        "3",
        "3"
      ],
      "line": 40,
      "id": "hotel-booking-in-adactin-application;search-hotel;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 40,
  "name": "Search Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;search-hotel;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Ad2"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user Select The Location \"Melbourne\" in location field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user Select The Hotel \"Hotel Sunshine\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Select the roomType \"Deluxe\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user Select The NoOfRooms \"2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Enter The CheckInDate \"02/10/2022\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user Enter The CheckOutDate \"05/10/2022\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Select The NoOfAdultRoom \"3\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Select the NoOfChildRoom \"3\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Click On The Submit Button And It Navigate To \"Adactin.com - Select Hotel\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne",
      "offset": 26
    }
  ],
  "location": "Step_Def.user_Select_The_Location_in_location_field(String)"
});
formatter.result({
  "duration": 338606651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Sunshine",
      "offset": 23
    }
  ],
  "location": "Step_Def.user_Select_The_Hotel(String)"
});
formatter.result({
  "duration": 253698849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deluxe",
      "offset": 26
    }
  ],
  "location": "Step_Def.user_Select_the_roomType(String)"
});
formatter.result({
  "duration": 207400597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 27
    }
  ],
  "location": "Step_Def.user_Select_The_NoOfRooms(String)"
});
formatter.result({
  "duration": 220321362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02/10/2022",
      "offset": 28
    }
  ],
  "location": "Step_Def.user_Enter_The_CheckInDate(String)"
});
formatter.result({
  "duration": 2340384683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05/10/2022",
      "offset": 29
    }
  ],
  "location": "Step_Def.user_Enter_The_CheckOutDate(String)"
});
formatter.result({
  "duration": 2255686985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    }
  ],
  "location": "Step_Def.user_Select_The_NoOfAdultRoom(String)"
});
formatter.result({
  "duration": 202484897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    }
  ],
  "location": "Step_Def.user_Select_the_NoOfChildRoom(String)"
});
formatter.result({
  "duration": 196676862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adactin.com - Select Hotel",
      "offset": 52
    }
  ],
  "location": "Step_Def.user_Click_On_The_Submit_Button_And_It_Navigate_To(String)"
});
formatter.result({
  "duration": 6270841610,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Select Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;select-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "user Click On The RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "user Click On The Continue Button And It Navigate To \"Adactin.com - Book A Hotel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_RadioButton()"
});
formatter.result({
  "duration": 141486640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adactin.com - Book A Hotel",
      "offset": 54
    }
  ],
  "location": "Step_Def.user_Click_On_The_Continue_Button_And_It_Navigate_To(String)"
});
formatter.result({
  "duration": 2974171148,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 48,
  "name": "Book A Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;book-a-hotel",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@Ad3"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "user Enter the First Name \"\u003cfirstName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "user Enter the Password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "user Enter the Address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "enter The Credit Card Number \"\u003ccardNo\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "user Select The CreditCard Type \"\u003ccardtype\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "user Select The Expiry Month Of CreditCard \"\u003cexpirymonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "user Select The Expiry Year Of CreditCard \"\u003cexpiryyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "user Enter The CVV Number \"\u003ccvvNo\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "user Click On The BookNow Button It Navigate To \"Adactin.com - Hotel Booking Confirmation\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;book-a-hotel;",
  "rows": [
    {
      "cells": [
        "firstName",
        "password",
        "address",
        "cardNo",
        "cardtype",
        "expirymonth",
        "expiryyear",
        "cvvNo"
      ],
      "line": 69,
      "id": "hotel-booking-in-adactin-application;book-a-hotel;;1"
    },
    {
      "cells": [
        "divya",
        "vinay",
        "gangai amman koil street",
        "1231231231231231",
        "VISA",
        "4",
        "2022",
        "2365"
      ],
      "line": 70,
      "id": "hotel-booking-in-adactin-application;book-a-hotel;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 70,
  "name": "Book A Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;book-a-hotel;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@Ad3"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "user Enter the First Name \"divya\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "user Enter the Password \"vinay\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "user Enter the Address \"gangai amman koil street\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "enter The Credit Card Number \"1231231231231231\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "user Select The CreditCard Type \"VISA\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "user Select The Expiry Month Of CreditCard \"4\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "user Select The Expiry Year Of CreditCard \"2022\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "user Enter The CVV Number \"2365\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "user Click On The BookNow Button It Navigate To \"Adactin.com - Hotel Booking Confirmation\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "divya",
      "offset": 27
    }
  ],
  "location": "Step_Def.user_Enter_the_First_Name(String)"
});
formatter.result({
  "duration": 138184149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinay",
      "offset": 25
    }
  ],
  "location": "Step_Def.user_Enter_the_Password(String)"
});
formatter.result({
  "duration": 148281799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gangai amman koil street",
      "offset": 24
    }
  ],
  "location": "Step_Def.user_Enter_the_Address(String)"
});
formatter.result({
  "duration": 193373165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1231231231231231",
      "offset": 30
    }
  ],
  "location": "Step_Def.enter_The_Credit_Card_Number(String)"
});
formatter.result({
  "duration": 156190871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VISA",
      "offset": 33
    }
  ],
  "location": "Step_Def.user_Select_The_CreditCard_Type(String)"
});
formatter.result({
  "duration": 191846895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 44
    }
  ],
  "location": "Step_Def.user_Select_The_Expiry_Month_Of_CreditCard(String)"
});
formatter.result({
  "duration": 194725555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 43
    }
  ],
  "location": "Step_Def.user_Select_The_Expiry_Year_Of_CreditCard(String)"
});
formatter.result({
  "duration": 186844257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2365",
      "offset": 27
    }
  ],
  "location": "Step_Def.user_Enter_The_CVV_Number(String)"
});
formatter.result({
  "duration": 149765807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adactin.com - Hotel Booking Confirmation",
      "offset": 49
    }
  ],
  "location": "Step_Def.user_Click_On_The_BookNow_Button_It_Navigate_To(String)"
});
formatter.result({
  "duration": 18163778145,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "Booking Confirmation",
  "description": "",
  "id": "hotel-booking-in-adactin-application;booking-confirmation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 71,
      "name": "@Ad2"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "user Click On The LogOut Button to exit from the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_LogOut_Button_to_exit_from_the_application()"
});
formatter.result({
  "duration": 504166451,
  "status": "passed"
});
});