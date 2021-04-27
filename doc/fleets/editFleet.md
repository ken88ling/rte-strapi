## Steps for Edit Fleet:

### 1. Go to List of Fleets:
http://143.198.214.24:2337/admin/plugins/content-manager/collectionType/application::fleet.fleet

### 2. Click on Fleet that need to edit:

It should open the fleet detail, Confirm all the details and make sure:

<img width="1440" alt="Screen Shot 2021-04-27 at 12 29 40 PM" src="https://user-images.githubusercontent.com/59637626/116197476-88413b80-a754-11eb-91b0-eaa17e3f330e.png">

### 3. Edit the details for fleet:

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

### 4. Click on save button on top right to edit the fleet.
