# Project REST-Rant

REST-Rant is an app where users can review restaurants.


# PART TWO
----------------------------------------------
As a resturant I need pictures so I can show the menu

As a resturant I need Section Headers so I can seperate different things in my menu

Color Scheme : Baby / Pastel colors such as pink ,purple , blue or sage green

----------------------------------------------

| Method | Path | Purpose |
| :--- | :---: | --------: |
| GET | / | Home page |
| GET | /places | Places index page |
| POST | /places | Create new place |
| GET | /places/new | Form page for creating a new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing an existing place |
| DELETE | /places/:id | Delete a particular place |
| POST | /places/:id/rant | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET | * | 404 page (matches any route not defined above) |

----------------------------------------------

Database

| Field | Type |
| ----- | ---- |
| _id | Object ID |
| name | string |
| city | string |
| state | string |
| cuisine | string |
| pic | string |