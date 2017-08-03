This project is a coding exercise.

```
  npm install
  npm run test-all
  
  #for dev
  npm start
  
  #for production
  npm run heroku
```
#The brief

Please use any choice of technology. We would prefer it to be Node.js or Ruby.
Please use any choice of architecture pattern – either a standard server side rendered web-page or
Web-Api that is used by JavaScript on the page. We would like to see if you can reason your choice.
Please do try to have your code unit-tested or have some form of automated testing in it.

###Story 1: 
As an Account manager at HostMaker I want to be able to view the property details as a list in a
web page.
For this exercise the property details have following fields:

1. Owner (Required)
2. Address
   * Line1 (Required)
   * Line2 (Optional)
   * Line3 (Optional)
   * Line4 (Required)
   * Postcode (Required)
   * City (Required)
   * Country (Required)
3. IncomeGenerated (Required)
Render the details on the browser in the following format
Owner Address IncomeGenerate

Address should only show the details that are present. So if Line3 in the address is empty or null.
Then do not show a blank or empty line.



###Bonus Story:
At hostmaker, we have decided to focus more on central properties. So we have drawn a service area
which gives us an idea of properties we can service and no longer service. Please use the address and
google-maps api to detect the longitude/latitude. Use this latitude/longitude to detect if the property is
within the service area or not. 

Please use the following radius and center point coordinates that defines
the area we can service.
lat: 51.5073835, lng: -0.1277801,
radius: 20000, country: 'gb'

On the UI -> showcase your frontend skills to display this information in the best possible way.

#The Solution.

The backend is a NodeJS + Express + Typescript app and it only has one endpoint. 
It has unit tests that cover the code using Mocha + Chai + Supertest

```$xslt
   /api/properties
```
In development environment it is a stand-alone REST API running on port 4001.
In production (and this is due to Heroku only able to host a single service)
it also host's the static client app and it runs on 4001 if no port has been specified.

The client was created using the create-react-app and then configured to have Redux + Thunk
