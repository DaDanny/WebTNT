# Task
## Filtering Sites

## Problem

Right now, we have no way of filtering sites based on what the user is already following. I'd like to have a feature so when they go to their settings page, they can see what sites they are currently following, and have an option to unfollow these sites. Then I'd like to present to the user a list of all the sites in the webapp that they currently are not following. They have an option to then follow these sites. This will prevent users from continously clicking follow since a 'follow' and 'unfollow' button will only be present in the respective cases.


## Solution

Using Angular's filter, we will create a custom filter which takes in an array of sites and an array of followedsites. It will then return true or false if the site is in the followedsites array.

Pass into the filter followedSites and allSites. This will give us access to all of the sites, both followed and unfollowed. Iterate through sites, and check if it is in the followedSites array. If it is, return true/false and then it will not output that site. 

Read up on filters this week. This is the next big task to do.

A big benefit of this is I will have to implement filtering into the CTT tool. Once I finish what I need to for CTT, I'll start diving into filtering.

## Sources

* http://sarahbranon.com/post/69604997957/fun-with-angularjs-filters-part-1-the-filter

* http://jsfiddle.net/bmleite/5VbCJ/

* https://docs.angularjs.org/api/ng/filter/filter