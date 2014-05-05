# Web Tips and Tricks
## Aka WebTNT

**Website created by Danny Francken.**

Ever have trouble understanding how to use the in's and out's of a new page?

Curious what little tricks you can do to enhance your browsing experience?

Want to watch a particular YouTube video, but it is blocked in your country?


Before you would have to go digging through the deep web to find any tips on websites. You could waste hours before you discover that you can add a simple string to your URL to bypass restrictions or how to properly style a Readme on Github.

Now, you can join WebTNT, select your favorite site and receive great, new and popular tips for all the web's best websites.


But websites aren't the only Usecases of WebTNT. Have you had to Google how to take a screenshot on your Mac or Windows more than once? Have you been curious how to use Command Line?

All these things and more lay within WebTNT, so what are you still waiting for, go ahead and starting trickin'!


### This website is still in development. Due to exams, work and a life, progress has been slow, but stay positive, a full release is near!


## To Do:

* ~~Able to post, get, delete and update Sites~~
* ~~Follow/Unfollow Sites for Particular User~~
* Prevent Followers from Going to Negative!
* User Profiles
* Homepage
* Submitting Tips
* Displaying tips
* ~~Search for Sites~~
* Make it look sexy!
* ~~Feature for Users to Add Sites they don't find~~
* Anoymous Browsing so people don't have to register for site
* Stylize Each Page for Each site
* Unique Usernames for each user. Can implement similar to how the emails are implemented and checked. If a username is taken, then it will throw an error just like Email already registered.
* Facebook, Github, Twitter, and Google Login/registration
* Filtering Sites by followedSites


### Future Ideas

* Featured Tip on Front Page
* Submit questions or help tickets


## Putting it all together

Right now, I am able to have users login with email, They can add sites, follow sites and search for sites.

Going forward, I need to start implementing filters for followedSites. Once we are able to filter the sites they are following, the next big thing to accomplish will be adding tips. This should be similar to adding Sites but I need to figure out a good way to add in Tips.

I'm thinking of a separate collection of tips. When they add a tip, they also specify which site to add it to. When they add it, the sites Tips array gets this tip.id. When we want to show tips, we will iterate through all these ids, retriveing their respective documents from the collection.

Once users are able to add tips, the next steps will be rigorous testing of all the features of the site, integrating Facebook, github, twitter and Gmail logins. Then making it look nice. I'm making a lot of progress with this website and should not discount any of it. I've learned a ton during the entire process and while I still have a lot to do, I am making small progress every day.

I aim to have a soft launch by June 1st. This is very obtainable. I really need to get on filtering sites, adding tips and then logging in users.