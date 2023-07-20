# Vroomu : A Vehicle Service Guide


## Description
Vroomu the app that helps you find out why your car may not go vroom! It was designed to help consumers stay up to day on their vehicle's **Service Maintenances** and **Recall Repairs**.


**Service Maintenances:** Service Maintenances include Oil Changes, Tire Rotations, Brake Fluid Flush, Coolant Flushes, Replacement of Spark Plugs, Transmission Fluid Drain and Fill, Differential Drain and Fill, Changing the Serpentine Belt, Etc.  
 
**Background:** Every vehicle manufacturer has a recommended time interval for these maintenance services to be completed. It is important to have these manufacturer recommended services completed at their due mileage to ensure your vehicle is up to date. This may prevent **unnecessary and costly** visits to your dealership for repairs that may have been avoided with preventative maintenance.


**Solution:** This app will make it easy for you to find out what maintenance is due on your vehicle. Simply choose your vehicle and enter the current mileage. Press on "Get Maintenance" and you will be presented with all the manufacturer recommended maintenance for that mileage. It will also show you the most recent due maintenance and the upcoming due maintenance.


**Vehicle Recalls:** Recalls are released when National Highway Traffic Safety Administration (NHTSA) determines a vehicle's component poses a safety risk or fails certain safety standards.


**Background:** It is dangerous to ignore vehicle recalls. It is highly recommended and very important to have all your vehicle's safety recalls completed as soon as possible to avoid any potential risks.


**Solution:** This app allows you to easily check if there are any open recalls on your vehicles. Simply choose your vehicle and press on "Get Recalls". You will have a list of recalls, the date of the recall, and the recall ID number displayed on the page.


The importance of staying up to date with vehicle service maintenance and recalls is to ensure your vehicle is running at optimum condition. Benefits include longer vehicle life, increased performance, ensuring vehicle safety standards are kept and peace of mind.


**Awesome Points:**  
**1. Application is mobile friendly. It will adapt to Desktop mode and Mobile mode.**  
**2. Application saves history. History is easily accessed and cleared.**  
**3. Application has instructions. If incorrect values are imputed Error Message is displayed providing user's guide**

## Technologies Used
HTML: Started building HTML to create layout.
Linked Bulma, jQuery, jQuery Ui, Google Fonts, JavaScript and CSS  

Bulma CSS Framework: Used to structure  and style page.
Made page Responsive to Mobile Devices.
Used to create Modal (Alert Message).

CSS: Used Custom CSS to add specific and unique styling to certain elements.

JavaScript: Used to iterate over API’s data using for loops.
Used conditional statements.
Used to create elements.

jQuery: Used aJax method to fetch API data.
Used to target classes and id’s.

jQueryUi: Used to create a drop down in the nav using the “accordion” function.

Google Fonts: Used to style fonts in the webpage.

Third Party API's: Decode Vin API: Obtained from vPIC NHTSA Website.
Year Dropdown, Make Dropdown, Model Dropdown and Recall List API: Obtained from NHTSA Website. Vehicle Maintenance List API: Obtained from carMD's Website.



## Installation


N/A


## Usage


Navagate to the Webpage using the following link: [https://gera1313.github.io/Vroomu-A-Vehicle-Service-Guide/](https://gera1313.github.io/Vroomu-A-Vehicle-Service-Guide/)


Presentation Slide Includes more Information about the Webpage: [https://docs.google.com/presentation/d/1YVu2qAdMW9xAm5TcOtdjgyRo9R-Mqvp2GSEeAZbZSt4/edit#slide=id.p](https://docs.google.com/presentation/d/1YVu2qAdMW9xAm5TcOtdjgyRo9R-Mqvp2GSEeAZbZSt4/edit#slide=id.p)


**To start follow these steps:**  
Note: There is more than one way to operate this application.


1. Navigate to the webpage.  


2. Fill out the form. There are two ways to fill it out:  
a. You can choose your vehicle by using the drop down selector. First: Select the Year. That will then generate another drop down with the makes for that year. Second: Select the Make. That will generate another drop down with the models for that make.Third: Select the Model.  
b. You can also fill out the form easily by inputting your vehicle's VIN number. Once you input your vin number press on "Decode Vin". When you decode the VIN the form will be automatically filled out for you. As a bonus you will get some additional information about that vehicles specifications.  


3. To get Recalls for that vehicle press on the "Get Recalls" button. A list of recalls will be generated for that vehicle at the bottom of the page.  


4. To get Maintenances due for that vehicle make sure the form is filled out and the Mileage is also filled out. Make sure you use the current mileage of your vehicle. Once filled out presson the "Get Maintenance" button. A list of maintenance and due mileage will be generated at the bottom of the page.  


5. Your search will be saved and will display in the webpage's search history tab. To auto fill the form with your most recent search press on the "Search History" tab. It will display your recent history. Click on the button with the vehicle information you wish to auto fill. The form will be autofilled with that chosen vehicle's information.


6. To clear the form and your search history click on the "Clear" button.


>Screenshot of Homepage in Desktop Mode:
![Screenshot of Homepage](./Assets/Images/Application%20Screenshots/Screenshot%20Fill%20Form.png)  


>Screenshot of Homepage in Mobile Mode:
![Screenshot of Homepage](./Assets/Images/Application%20Screenshots/Screenshot%20Mobile%20Version.png)


>Screenshot of Generated Maintenance:
![Screenshot of Homepage](./Assets/Images/Application%20Screenshots/Screenshot%20Maintenance%20Rendered.png)  


>Screenshot of Generated Recalls:
![Screenshot of Homepage](./Assets/Images/Application%20Screenshots/Screenshot%20Render%20Recalls.png)  


## Credits
API's Used:
1. Decode Vin API: Obtained from vPIC NHTSA Website.  
Link: https://vpic.nhtsa.dot.gov/api/
2. Year Dropdown, Make Dropdown, Model Dropdown and Recall List API: Obtained from NHTSA Website.  
Link: https://www.nhtsa.gov/nhtsa-datasets-and-apis
3. Vehicle Maintenance List API: Obtained from carMD's Website.  
Link: https://www.carmd.com/api/vehicle-maintenance-carmd-api/
4. Background Gif Image Source: Obtained car Gif from  gifer.com.
Link: https://gifer.com/en/3dof


Note: Images created using Sable Diffusion: Recall List Background Image, Title Background Image, Vehicle Spec Image, Vehicle Icon, and Vehicle Maintenance Card Image.


**We do not take credit for the Tint, Glass, Frost style used in the CSS:** The yellow tint transparent style was obtained from Link: https://css.glass/. They have an awesome demo on using a glass type CSS style.


## License


Please refer to the LICENSE in the repo.

