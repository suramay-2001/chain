## Questionarre
1. I could have improved the Design of the website better and improved the backend
2. I have not over designed any component and stuck to the description of the project

3. I would make my backend use more logging techniques and error handling techniques. I would also subscribe to the premium version of the API's to create more requests.

4. One of the things that I will change is to store the data states of api data in backend so that if the user asks for the same data an extra request is not made.

### API sources
1. Polygon.io

2. Kraken API

### Run Instructions
1. Clone the repository and then install the files
2. 'npm install'
3. to run the backend, 'npm start' from '/chainanalysis'
4. to prepare for running the reactapp, 'cd my-app' and 'npm install'
5. to run the app 'npx start' or 'npm start'

## Possible errors
1. The api is in the limited tier so the server might crash if the api limit is exceeded

2. The limited API requests are also cause the recommendations to set the values of buy/sell to 'no show', you can fix that by going to the componentDidMOUNT() commenting the 2 lines in it, refreshing your react app run, uncommenting the lines. Your app should now show the recommendations.