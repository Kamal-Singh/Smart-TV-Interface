- Smart TV Web Interface

- Made By: Kamal Singh Yadav
- Email: <Hidden>

Note: Demonstration.mp4 shows the demo of the project just in case you are facing issues with setting up the project.

Note: The react code is also build but the development code is left for you to check the coding structure and style.

- How to set up

- MongoDB is online on mlab and React is built so no need to install them
- Just go to backend folder and install dependency using npm install.
- After that type node index.js to start the server
- For Frontend either you can run it using serve for the build or you can install the dependency.

- For the react development server.
- Go to the frontend folder type npm install for installing dependancy.
- Then type npm run wait for it the start the server.
- Then open browser and go to http://localhost:8000 to see the working project.

- For the react build one
- open terminal and type npm install -g serve let it finish.
- go to the frontend folder and simply type serve -g build and that's it.
- go to the link which the terminal shows and checkout the app.

- Username=admin password=admin12345
- There is api in the project for regestering user but didn't make it due to the time constraint and no mentioned in the project so left it.


- Implementation Details
- Backend is written in nodejs and written modularily.
- Routes provide the get and post routes and is broken down in mulitple file for ease of managing and modularity.
- Middleware folder is for setting up middleware such as jwt verification (authentication) between requests.
- Models folder is for setting the database schema and methods for those databases.
- controllers define functions which are general and used by routes such as login and signup.
- config.js file is for enviornment variables as this project is to be run on your system so setting up a file is a necessaity.
- mock_data folder contains the scraped data from the internet in javascript files.

- Frontend is written in reactJS and redux.
- build folder contains the build if you want you can run it.
- .env file contains enviornment variable.
- the code uses action creators and reducers for redux
- /src/hoc folder is for higher order components which wrap other components.
- /src/components folder is for components
- /src/reducers/ is for reducers used for manipulating the redux centeral store.
- /src/actions/ is for actions creators used for writing clean and modular code for redux.


