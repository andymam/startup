# startup

see [Notes](https://github.com/andymam/startup/blob/main/notes.md)

## Idea: Weather App

### Elevator Pitch
My startup idea will be a weather app that allows a user to login and check the weather in either their current location, or any location they choose to input. 

### Key Features
This app will have features such as degrees, current weather conditions, and an about page.

I will be using certain technologies such as:

- **Authentication**: by having the user log in, using their name
- **Database data**: my application will display weather data that will come from a database
- **WebSocket data**: real time weather will be shown, so it will update with time, and provide current conditions

### Design

![Login](login_screenshot.png)

![Main](main_screenshot.png)


## HTML deliverable

For this deliverable I built out the structure of my application using HTML.

- **HTML pages** - Two HTML pages, with the main one being the weather page that shows the conditions, and the other being a login page
- **Links** - Provide a link on the main page that directs the user to the login page
- **Text** - included text as placeholders for some of the functions like displaying degrees and city
- **Images** - included an example svg of a weather image
- **Login** - included a login page with an input section and sign in button
- **Database** - The user can auto-locate their location's weather
- **WebSocket** - The user can input a certain city to see the weather there

## CSS deliverable

For this deliverable I properly styled the application.

- **Included header, main, and footer content for both index and login pages**
- **Navigation elements** - edited the a tags and links to change the default link color and get rid of the underlines
- **Resposive to window sizing** - used flex display modes to ensure my site works smoothly on any size window
- **Application Elements** - consistent colors that use good complements/contrasts
- **Application Text** - consistent fonts
- **Application Images** - placeholder for the image that will change depending on the weather

## Javascript deliverable

For this deliverable I implemented Javascript

- **Login** - Stores login name and displays it on main page
- **Database** - Display weather conditions. This is currently hardcoded, but will be using API's and fetch to get info
- **Websocket** - Use of fetch to get info relating to a zip code when a user enters one
- **Application Logic** - The info changes based on what the user enters. I use the provided zip code from input to then find latitude and longitudes, and find the weather for those coordinates.

## Service deliverable

For this deliverable I created service that gets info from API's and uses them properly.

- **Node.js/Express HTTP service** - done.
- **Static middleware for frontend** - done.
- **Calls to third party endpoints** - done.
- **Backend service endpoints** - done.
- **Frontend calls service endpoints** - done. (using fetch)

## DB deliverable

For this deliverable I stored user information in a database.

- **MongoDB Atlas database created** - done.
- **Endpoints for data**  - my code processes data and sends it to mongo
- **Stores data in Mongo** - yes.

## Login Deliverable

For this deliverable I implemented user authentication

- **User Registration** - Either login or create a new account on login attempt.
- **Existing User** - stores login info in db if the user already exists.
- **Use MongoDB to store credentials** - yes.
- **Restricts frontend functionality** - Yes. You can only access the main page and use the service after logging in.

  ## Websocket Deliverable

For this deliverable I used websocket to implement a chat feature

- **Backened listens for ebsocket connection** - done
- **Frontend makes websocket connection** - done
- **Data sent over websocket connection** - yes.
- **websocket data displayed** - Yes. In the form of chats

  ## React Deliverable

For this deliverable I converted the applicaton to use react.

- **Bundled and transpiled** - Vite implemented
- **Components** - 
- **Router** - 
- **Hooks** -

