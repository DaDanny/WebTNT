# Task
## Properly Understanding the Architecture of the Site

The site is laid out in basically 2 parts. We have the Node.js backend(lib) and an Angular.js frontend(app).

The backend should handle any incoming requests, talk with the database(MongoDB) and properly manage any incoming/outgoing data.

We want to make sure the backend is running quickly and efficently. 

The backend is laid out in 3 folders:
###Config
* Config -> Configures our database
	* Environment determines if we are running our app in production/development/testing and loads the correct Database for this.
	* Config.js sets up all the environments.
	* Dummydata loads up the Things collection with what Yeoman comes preinstalled with. Eventually we can remove this once I have a better grasp.
	* Express setups our Express framework for the site. This is where we initalize passport, set the views.
	* Passport.js serializes the currentuser and allows people to login. Right now people can only login with Emails but eventually we will configure this to allow Facebook, Github, Gmail, and Twitter logins.

###Controllers
* Controllers is the folder that maps out what happens when a particular request is made to the site. We have 4 files in here currently:
	* Api.js which just grabs the Things model from mongo and has a function awesomethings which returns the awesomethings of our site.
	* Index.js handles any requests for a partial view of the webpage. This is what handles sending the actual html pages which are located in the app/views folder.
	* Session.js handles sessionize our site so we know who is logged in and what they have been doing.
		* It has 2 functions for logging in and logging out.
	* Sites.js is what happens when a request is made for a particular site in our website. We have functions in here for creating a new site, deleting, and updating site information
	* users.js handles requests for users such as creating, updating and deleting users from our DB.

###Models
* Models sets up all the Schemas to be used within our MongoDB. This helps generalize all our Documents so we know what information is stored within each one.

###More to come (April 12th at 0:22).


## Sources
### Reading on Angular Services and Resources. Could be a great read and save time on development process.
http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
http://www.bennadel.com/blog/2433-Using-RESTful-Controllers-In-An-AngularJS-Resource.htm
