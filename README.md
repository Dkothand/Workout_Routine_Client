# Workout Routine Builder

This project was created with the idea of having a centralized place to view and create workout routines. The user is able to add routines then fill them with exercises picked from a list. It was built in two days as a mini-project during my attendance at General Assembly's Software Engineering Immersive bootcamp.

## Technologies

The front end was bootstrapped with [Create-React-App](https://github.com/facebook/create-react-app).

Styling was a combination of [Skeleton CSS](http://getskeleton.com/) as well as a small amount of custom CSS. 

## Future Goals

There is a good amount left I would like to do with this project and it's something that I would like to return to after the course is over to continue building out as two days wasn't enough time to implement everything I wanted.

- Currently the functions to add exercises to routines and to delete an entire routine rerender the state of all the routines, which I believe is not the ideal way. I would like to come back and move state to different components so that when an exercise is added to a routine, that routine component will have a state change rather than the entire list of routines. Same goes for deleting a routine.

- Additionally there are only options to add an exercise to a routine or to delete an entire routine. I would like to implement the ability to delete individual exercises from a routine.

- Building out from here, possibly add pictures or videos of the different workouts if the user is unsure of how to do a particular exercise. 

- Improve overall appearence and styling
