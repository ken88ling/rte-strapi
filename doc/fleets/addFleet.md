## Steps for Add new Fleet:

### 1. Visit add fleet link:

http://143.198.214.24:2337/admin/plugins/content-manager/collectionType/application::fleet.fleet/create

This should be the page shown:

<img width="1440" alt="Screen Shot 2021-04-27 at 12 20 49 PM" src="https://user-images.githubusercontent.com/59637626/116196298-0ac8fb80-a753-11eb-9e25-94fef54b740b.png">


### 2. Add the details for new fleet:

```
1. Title : This will be title.
2. Description: This will be the description of fleet
3. Img: This will be the image for fleet , You can add Img by Add More Assets and upload from computer to server.
4. Details: This will be details of the fleet:
      {
        "passengers": "3 passengers",
        "suitcases": "2 x 25” luggage and 2 x hand carry ",
        "airport_arrival": "$45 one-way / $70 return trip",
        "city_transfer": "$30 One-way",
        "departure": "$35 One-way",
        "hourly": "$45 (* Maximum 2 stops) / $40 for 2hrs above",
        "extra_stop": "$10 (Within destination route) / $15 (outside destination route)"
      }
      
      This is structure for the fleet details.
```

### 3. Click on save button on top right to save the new fleet.
