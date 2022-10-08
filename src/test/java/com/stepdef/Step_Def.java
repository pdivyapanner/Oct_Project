package com.stepdef;

import static org.junit.Assert.assertArrayEquals;
import static org.testng.Assert.assertEquals;

import org.openqa.selenium.WebDriver;

import com.page.manager.Page_Object_Manager;
import com.runner.Adactin_Runner;
import com.utility.UtilityFiles;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Step_Def extends UtilityFiles{
	
	public static WebDriver driver = Adactin_Runner.driver;
	public static Page_Object_Manager manager = new Page_Object_Manager(driver);
	@Given("^user Launch The Application$")
	public void user_Launch_The_Application() throws Throwable {
		geturl("https://adactinhotelapp.com/");
	}

	@When("^user Enter The \"([^\"]*)\" In UserName Field$")
	public void user_Enter_The_In_UserName_Field(String UserName) throws Throwable {
	send_Text(manager.getReservehotel().getEmail(), UserName);
	}

	@When("^user Enter the \"([^\"]*)\" in Password Field$")
	public void user_Enter_the_in_Password_Field(String Password) throws Throwable {
	send_Text(manager.getReservehotel().getPassword(), Password);
	}

	@Then("^user Click On The Login Button It Navigate To \"([^\"]*)\"$")
	public void user_Click_On_The_Login_Button_It_Navigate_To(String title) throws Throwable {
	
	click_On_Element(manager.getReservehotel().getLogin());
	Thread.sleep(3000);
	String str = driver.getTitle();
	Assert.assertEquals(str,title);
	Thread.sleep(3000);
	}

	@When("^user Select The Location \"([^\"]*)\" in location field$")
	public void user_Select_The_Location_in_location_field(String location) throws Throwable {
	selectbyvalue(manager.getHotel().getLocation(), location);
	}

	@When("^user Select The Hotel \"([^\"]*)\"$")
	public void user_Select_The_Hotel(String hotel) throws Throwable {
		selectbyvalue(manager.getHotel().getHotel(), hotel);
	}

	@When("^user Select the roomType \"([^\"]*)\"$")
	public void user_Select_the_roomType(String roomtype) throws Throwable {
		selectbyvalue(manager.getHotel().getRoom_Type(), roomtype);
	}

	@When("^user Select The NoOfRooms \"([^\"]*)\"$")
	public void user_Select_The_NoOfRooms(String noofrooms) throws Throwable {
	
		selectbyvalue(manager.getHotel().getRoom_Nos(), noofrooms);
		}

	@When("^user Enter The CheckInDate \"([^\"]*)\"$")
	public void user_Enter_The_CheckInDate(String date1) throws Throwable {
		clear_element(manager.getHotel().getDatepick_In());
		Thread.sleep(2000);
		send_Text(manager.getHotel().getDatepick_In(), date1);
	}

	@When("^user Enter The CheckOutDate \"([^\"]*)\"$")
	public void user_Enter_The_CheckOutDate(String date2) throws Throwable {
		clear_element(manager.getHotel().getDatepick_Out());
		Thread.sleep(2000);
		send_Text(manager.getHotel().getDatepick_Out(), date2);
	
	}

	@When("^user Select The NoOfAdultRoom \"([^\"]*)\"$")
	public void user_Select_The_NoOfAdultRoom(String adultroom) throws Throwable {
	selectbyvalue(manager.getHotel().getAdult_Room(), adultroom);
	}

	@When("^user Select the NoOfChildRoom \"([^\"]*)\"$")
	public void user_Select_the_NoOfChildRoom(String childroom) throws Throwable {
		selectbyvalue(manager.getHotel().getChild_Room(), childroom);
	}

	@Then("^user Click On The Submit Button And It Navigate To \"([^\"]*)\"$")
	public void user_Click_On_The_Submit_Button_And_It_Navigate_To(String title2) throws Throwable {
	
	click_On_Element(manager.getHotel().getSubmit());
	Thread.sleep(2000);
	String title = driver.getTitle();
	Assert.assertEquals(title,title2);
	Thread.sleep(3000);
	}

	@When("^user Click On The RadioButton$")
	public void user_Click_On_The_RadioButton() throws Throwable {
		click_On_Element(manager.getSelectHotel().getRadio_Button());
	}

	@Then("^user Click On The Continue Button And It Navigate To \"([^\"]*)\"$")
	public void user_Click_On_The_Continue_Button_And_It_Navigate_To(String title3) throws Throwable {
		click_On_Element(manager.getSelectHotel().getContinue_Button());
		Thread.sleep(2000);
	}

	@When("^user Enter the First Name \"([^\"]*)\"$")
	public void user_Enter_the_First_Name(String firstName) throws Throwable {
		send_Text(manager.getBook().getFirst_name(), firstName);
	}

	@When("^user Enter the Password \"([^\"]*)\"$")
	public void user_Enter_the_Password(String password) throws Throwable {
		send_Text(manager.getBook().getLast_Name(),password);
	}

	@When("^user Enter the Address \"([^\"]*)\"$")
	public void user_Enter_the_Address(String address) throws Throwable {
		send_Text(manager.getBook().getAddress(),address);
	}

	@When("^enter The Credit Card Number \"([^\"]*)\"$")
	public void enter_The_Credit_Card_Number(String cardNo) throws Throwable {
		send_Text(manager.getBook().getCredit_card(),cardNo);
	}
	@When("^user Select The CreditCard Type \"([^\"]*)\"$")
	public void user_Select_The_CreditCard_Type(String cardtype) throws Throwable {
	
	selectbyvalue(manager.getBook().getCard_type(), cardtype);
	}

	@When("^user Select The Expiry Month Of CreditCard \"([^\"]*)\"$")
	public void user_Select_The_Expiry_Month_Of_CreditCard(String expirymonth) throws Throwable {
	selectbyvalue(manager.getBook().getExpiry_Month(), expirymonth);
	}

	@When("^user Select The Expiry Year Of CreditCard \"([^\"]*)\"$")
	public void user_Select_The_Expiry_Year_Of_CreditCard(String expiryyear) throws Throwable {
	selectbyvalue(manager.getBook().getExpiry_year(), expiryyear);
	}


	
	@When("^user Enter The CVV Number \"([^\"]*)\"$")
	public void user_Enter_The_CVV_Number(String cvvNo) throws Throwable {
		send_Text(manager.getBook().getCvv_Number(), cvvNo);
	}

	@Then("^user Click On The BookNow Button It Navigate To \"([^\"]*)\"$")
	public void user_Click_On_The_BookNow_Button_It_Navigate_To(String title4) throws Throwable {
	click_On_Element(manager.getBook().getBook_Now());
	Thread.sleep(15000);
	String booktitle = driver.getTitle();
	Thread.sleep(3000);
	Assert.assertEquals(booktitle,title4);
	
	}
	@Then("^user Click On The LogOut Button to exit from the application$")
	public void user_Click_On_The_LogOut_Button_to_exit_from_the_application() throws Throwable {
		click_On_Element(manager.getHotel2().getSerchanotherHotel());

	}



	}
