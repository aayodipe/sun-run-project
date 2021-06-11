Note:

1. 
API Endpoint [https:api-v3.mbta.com/schedules?filter[route]=CR-Fitchburg&filter[stop]=place-north]

2.
Initially, I was trying to use https:api-v3.mbta.com/schedules?filter[stop]=place-north but it was not bring out any meaning full data. I was only returning the Arrival time and departure time with no other usefull information so I have to filter it with[route] just to get a name of a destination.

3. 
I could not get the name of the Carrier , Track# and The Status so I have to hard code it just to have thing there for presentation. If this is commercial project, I would have chat the developer for assistance.

4.

The API returns over 30 Thousand data. I trying to limit the reponds before query the API by setting a limit parameter with the API Call but it was not working. So I Filter some of the invalid before i mount to the DOM.

5. To calculate the 'On Time ' Status, I will need to subtract the current time (A) minus the Arrival time(B) then compare the difference(D) with the time(D)that it will take the train to get to the North Station from where it is. With that, I will be able to write a function to determine if the train is On time or not. I would not do this because I don't have enough information from the API.