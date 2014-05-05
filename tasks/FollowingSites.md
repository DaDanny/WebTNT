# Task
## Following Sites

## Problem

Instead of saving individual ID's for each site in an array, we are now saving entire JSON objects in the array. This allows us to avoid having to perform a get request with each individual ID and now we have all the information right away. A lot cleaner.

I do see an issue arising once we start to have tips being added to the Site Model. If we get a lot of tips, this might make it huge and if we are storing all this information, it might be a larger load each time. But I'm not sure. Will come back once we implement saving tips.

Ok. This approach is actually a problem. Now if we have someone update a site, the site Object is stored and not updated. One example: If we store a site with 31 followers, then someone else follows it, we still have 31 followers stored. Maybe we do have to make the GET request each time to get the updated information.

Instead of completely abandoning what we already have which works. We can implement a feature that will pull new information from the FollowedSites so when we have new tips, we will get new tips for each site in the FollowedSites array. In the followed sites array, we are just going to store static information (url, name, id). 

In the future, figure out a way to reduce what we are saving. We will still have a lot of information stored which won't be necessary if we are then using the ID's to pull fresh tips each time.



## Sources
http://stackoverflow.com/questions/6090212/is-there-any-way-to-atomically-update-two-collections-in-mongodb

http://docs.mongodb.org/manual/tutorial/perform-two-phase-commits/

http://docs.mongodb.org/manual/reference/operator/update/push/


