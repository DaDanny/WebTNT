# Task
## Following Sites

## Problem

Instead of saving individual ID's for each site in an array, we are now saving entire JSON objects in the array. This allows us to avoid having to perform a get request with each individual ID and now we have all the information right away. A lot cleaner.

I do see an issue arising once we start to have tips being added to the Site Model. If we get a lot of tips, this might make it huge and if we are storing all this information, it might be a larger load each time. But I'm not sure. Will come back once we implement saving tips.


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


