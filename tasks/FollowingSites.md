# Task
## Following Sites

## Problem
Right now, we are able to update to update the followers field on the appropriate site Collection but we are not able to add the siteID to the User's followedSites array.

We need to have an array of FollowedSites for each users for their profiles. This will allow users to click follow on a site, the sites Followers field with incrememnt by one, and the users followedSites array will push the site_id to this array.

When a user goes to their profile, we can pull all site Id's from their followedSites array and use this to show them what sites they are currently following.

In future updates, we will use this ID to show them Tips for the sites they are following on their profile page.


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


