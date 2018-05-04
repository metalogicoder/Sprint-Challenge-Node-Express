# Review Questions

## What is Node.js?
Node.js is a server side Javascript environment.

## What is Express?
Express is a framework for Node.js that is use to help build APIs.

## Mention two parts of Express that you learned about this week.
I enjoyed learning how calling 'express()' to build our servers was actually returning a function that we could work from while if we used something like 'express.json()' it acts as a body parser to help translate our code inso JSON.

## What is Middleware?
Middleware is software that add functionality to our server. Our data usually passes through them in the order that they are called while traveling through the server.

## What is a Resource?
A resource is any data that will pertain to a specific category such as users, posts, and tags.

## What can the API return to help clients know if a request was successful?
Http statuses are a great way to return success or error messages back to the user.

## How can we partition our application into sub-applications?
I believe the main way of partitioning our application would be to use routes such as the one used in the last few days of class. Especially when you have to manage data differently whe dealing with seperate resources. Creating seperate route files for processes unique to each resource is always a great way yo stay organized.

## What is CORS and why do we need it?
Cors is a middleware that lets us bypass some of the errors that are thrown when trying to pull from our api when making apps in our local environment. I believe that is has to do with it not liking the localhost port that we try to connect to.
