# Task
## Following Sites

## Problem

In future updates, we will use this ID to show them Tips for the sites they are following on their profile page.

Now that we are able to add siteID's to the followedSites array for each user, we need to get information about each of these id's. 

I made a function that can take in an iD from the followedSites array and it returns a JSON object of that site info. 

I have the get request returning these siteInfos, but then it changes the scope of the site to the last one returned. I need to come up with a way that it either adds these site infos to an array with their information or I can access the information before the scope changes. 

It sets the $scope.followedsites variable to the last site returned, which we don't want. We want the one returned, to get that information then use this information.


## Possible Solutions
This process is an example of a transaction since we are going to be updating two collections simultaneously. A dirty approach (unsafe) would be to:
	* Have a Siteservice function that update the site's followed number by one
	* Have a userservice function that will update the user's followedSites array with the SiteID they wish to follow
	* Have a siteservice function that will decrement the site's followed number by one
	* Have a userservice function that will remove the Site's id from their followedSites array.

The issues with this approach is Mongo doesn't support triggers so we can't simply do one query (Site follow ftn) then do the next query (User follow function). This is an issue with concurrencent transactions that we will have to address.

## Sources
http://stackoverflow.com/questions/6090212/is-there-any-way-to-atomically-update-two-collections-in-mongodb

http://docs.mongodb.org/manual/tutorial/perform-two-phase-commits/

http://docs.mongodb.org/manual/reference/operator/update/push/


