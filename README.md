# Weather-47

## Live site: https://weather-47.netlify.app/

## Overview
This was the second project during the Software Engineering Immersive at General Assembley. My aim was to create an app using React that consumes 2 APIs and dynamically displays weather information and background pictures based on user input.

## Setup

- Will need to add node modules
  - yarn / npm install  
- If api key has expired: aquire new api token from Accuweather --> create account --> create new app --> key is generated.
    - This is needed if the current key has expired (after 50 calls). 
    - 'lib' folder
     - 'accuWeatherApi.js' --> key  
- yarn start / npm start to run the app in your browser.

## Tech used

- HTML
- CSS
- SASS
- JavaScript
- React
- Figma

## APIs used

  - AccuWeather - https://developer.accuweather.com/?gclid=CjwKCAjwvuGJBhB1EiwACU1Aibm6DSrKPpmw1heAuA-sD0-umT1WPeeDO5h8X0wgNX5IyYW_MmJSQhoCy5sQAvD_BwE
  - Pexels - https://www.pexels.com/api/

### Planning
I used Figma for brainstorming, user story design, feature planning and UI concepts. 

## Main Functionality Design
- The users location query is taken from gathered form state. 
- This is then used to obtain a unique ‘city key’ from the accuweatherAPI. 
- This ‘city key’ is used an ID to then send another request to a separate API to gather the current weather for the given city. 
- The returned data is then used to asynchronously feed the ‘weatherInfo’ state. 
- This ‘weatherInfo’ state data is then used to construct the dynamic card that is produced in the UI.
![code](https://user-images.githubusercontent.com/83312425/148699515-658f0a01-9c16-45f4-9069-9f70ab51a4c2.png)


## Issues
- This was my first experience with manipulating data sent and fetched from an API. This was a challenge at first but after careful reading of the relevant documentation I had the app communicating as intended.
- There was an issue with the very short use of the AccuWeather api token which expires and causes http errors.
- Finding the right weather icons to fit with the UI was a challenge and went through several iterations before landing on what I think are the highest quality SVGs I could find. 

## Wins
- Gained valuable experience with API workflow.
- Pushed my understanding of the React framework further. My first exposure to React was shortly before the start of this project and so this was a great oppurtunity to solidify some of the core principles of React to implement and grow in future projects.

## Key Learnings
- This was my first opportunity to explore the core concepts that shape React. I learned a lot about the flow of data within react hooks, particularly, useState and useEffect. 
- I learned a lot on the process of API calls and data fetching.  

## Future Features

### Focus on Performance and Accessibility 
- App must be fully accessible for all users.
- Squeeze every last FPS from the code. 

### Minify
- Condense this project into a widget that can be used within a dashboard in a future project.

## Screenshots

### Landing page / Search UI

![Screenshot 2021-09-08 at 15 45 58](https://user-images.githubusercontent.com/83312425/132531721-3d9d41dc-d490-4d52-ba3f-61553dd7f554.png)

### Search results card and dynamic background

![Screenshot 2021-09-08 at 15 46 28](https://user-images.githubusercontent.com/83312425/132531826-4f2454bd-871b-4ff7-8071-7baa7a666ec8.png)

![Screenshot 2021-09-08 at 15 47 33](https://user-images.githubusercontent.com/83312425/132532018-065f55b3-e9e1-42f2-b0a4-887f0ce3288e.png)

![Screenshot 2021-09-08 at 15 48 14](https://user-images.githubusercontent.com/83312425/132532141-221f306d-b039-4711-bf98-06454ffd3b6a.png)

## Bugs
- There is an issue on the request to the Pexels API. When the user’s location input data is used as the keyword for the image search, there is no way for the API to know that the user is requesting a picture of a given city and not an object with the same name as the city. 
For example, if you search for the weather in Bath Spa, England, you will receive the current weather in Bath and also a background image from the pixels API of a bath. 




