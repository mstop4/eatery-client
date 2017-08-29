**[Eatery Server](https://github.com/mstop4/eatery-server)**


!["Main page"](https://github.com/mstop4/eatery-client/blob/master/screenshots/Login.png?raw=true)
!["Feed](https://github.com/mstop4/eatery-client/blob/master/screenshots/Feed.png?raw=true)

## Developed by

* Jonathan Lam
* Arnold Chan
* Victor Festa
* John Tolentino

## User Stories

```
As a user, I want to have nearby restaurants recommended to me because I don't know what to eat.
```
```
As a user that found a restaurant I like,
I can see the details of the restaurants and how to order.
```
```
As a user trying to pick a restaurant for a group,
I narrow down the searches myself and share with my friends to vote.
```
1. Eatery gets a list of restuarants
2. List of restaurants are based on proximity and location (distance and time)
3. If the user is alone, Eatery decides for you based on randomization if none selected
4. If user is in a group a voting system is invoked
    * The host picks top 2-5 picks of restuarants and sends them to other users
    * Resuarant choices are sent to friends via friend list
    * Users vote on the restuarants given and majority decides which restuarant the group will go
5. The group of user(s) will be taken to a detail page. Page will have options like Ritual etc...

## Tech Stack

- React
- Material UI
- NodeJS
- Facebook SDK
- Google Maps API
- Google Places API
