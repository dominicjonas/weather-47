# sei-ga-project-2

## Live site: https://summit-exercise-dashboard.netlify.app

## Project Brief 
Create an app using React that takes 2 APIs and dynamically displays weather information and background pictures based on user input.

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
- JavaScript
- React.js
- Sass
- Figma

## APIs used

  - AccuWeather - https://developer.accuweather.com/?gclid=CjwKCAjwvuGJBhB1EiwACU1Aibm6DSrKPpmw1heAuA-sD0-umT1WPeeDO5h8X0wgNX5IyYW_MmJSQhoCy5sQAvD_BwE
  - Pexels - https://www.pexels.com/api/

### Design 

I used Figma for brainstorming, user story design, feature planning and UI concepts. 

## Issues
- This was my first experience with manipulating data sent and fetched from an API. This was a challenge at first but after careful reading of the relevant documentation I had the app communicating as intended.
- There was an issue with the very short use of the AccuWeather api token which expires and causes http errors.

## Wins
- Gained valuable experience with API workflow.
- Pushed my understanding of the React framework further. My first exposure to React was shortly before the start of this project and so this was a great oppurtunity to solidify some of the core principles of React to implement and grow in future projects.

## Future Features

### Focus on Performance and Accessibility 
- App must be fully accessible for all users.
- Squeeze every last FPS from the code. 

### Minify
- Condense this project into a widget that can be used with a dashboard in a future project.

![Screenshot 2021-09-08 at 15 45 58](https://user-images.githubusercontent.com/83312425/132531721-3d9d41dc-d490-4d52-ba3f-61553dd7f554.png)

![Screenshot 2021-09-08 at 15 46 28](https://user-images.githubusercontent.com/83312425/132531826-4f2454bd-871b-4ff7-8071-7baa7a666ec8.png)

![Screenshot 2021-09-08 at 15 47 33](https://user-images.githubusercontent.com/83312425/132532018-065f55b3-e9e1-42f2-b0a4-887f0ce3288e.png)

![Screenshot 2021-09-08 at 15 48 14](https://user-images.githubusercontent.com/83312425/132532141-221f306d-b039-4711-bf98-06454ffd3b6a.png)




