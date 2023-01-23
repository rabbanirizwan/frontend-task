# Frontend task 

## Description

Frontend task is the user interface for fetching data from jsonplaceholder.We are using following API for this purpose.
 - `https://jsonplaceholder.typicode.com/albums`
 - `https://jsonplaceholder.typicode.com/users`
 - `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`

## Dependencies

Node version 14.15.x

## Installation And Run Locally

- `git clone frontend-task`
- `npm install`
- `npm start`

## Run Project via Docker
   Build the image
- `docker build -t my-react-app .` 
   
    Run the container
- `docker run -p 3000:3000 my-react-app`
    
# To run unit test

- `npm test`
