package com.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.utility.UtilityFiles;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = ".\\features", glue = "com.stepdef",monochrome = true,
        strict = true, tags = "@Ad1,@Ad2,@Ad3",
        plugin = {"html:Reports", "json:Reports/rep.json"}                  
		)

public class Adactin_Runner {

	public static WebDriver driver;
	
	@BeforeClass
	public static void set_Up() {

		driver = UtilityFiles.get_browser("chrome");
	}
	
	@AfterClass
	public static void tear_Down() {
	driver.close();
			}
	
	
	

}
