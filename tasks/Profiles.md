# Task
## User Profile Page

We will have a controller, service and profile Partial html page for the front End. Backend will have a controller for Profile page requests. 

When a user goes to their profile page, right now, they will see information about that user such as their email, their Username, their followedsites and Id.

Eventually, we will turn the profile page into a page that has updates/tips on their followed sites.

For now (April 12th), lets stick to having just their user information. 

Read about promises. Right now we have an issue where we are not properly returning Profile Information. I believe I am not properly calling a promise object or the backend is not properly returning the data. I don't think we even need to make a get request with this. 

Still cannot properly load User Data after Sites has returned an object. Will keep working on this. This problem deals with promises and 2 get requests. We are able to have the server return the sites and update the site, but the user get request is not updating the user information after it has received it.

* http://blog.brunoscopelliti.com/angularjs-promise-or-dealing-with-asynchronous-requests-in-angularjs

* http://lostechies.com/gabrielschenker/2013/12/12/angularjspart-4-accessing-server-side-resources/

* http://liamkaufman.com/blog/2013/09/09/using-angularjs-promises/

* http://solutionoptimist.com/2013/12/27/javascript-promise-chains-2/