Note:

1. 
API Endpoint [https:api-v3.mbta.com/schedules?filter[route]=CR-Fitchburg&filter[stop]=place-north]

2.
Initially, I was trying to use https:api-v3.mbta.com/schedules?filter[stop]=place-north but it was not bring out any meaning full data. I was only returning the Arrival time and departure time with no other usefull information so I have to filter it with[route] just to get a name of a destination.

3. 
I could not get the name of the Carrier , Track# and The Status so I have to hard code it just to have thing there for presentation. If this is commercial project, I would have chat the developer for assistance.

4.

The API returns over 30 Thousand data. I trying to limit the reponds before query the API by setting a limit parameter with the API Call but it was not working. So I Filter some of the invalid before i mount to the DOM.

