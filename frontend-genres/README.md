# Front end project for `iam+` candidates

Welcome!

As a front end engineer candidate for our device management services team, we're interested in seeing where you are in your evolution as a developer, and see how you organize your code and solve problems.

We hope this small coding project will be fun, and will give us something to talk about in your next interview round.


## Some background

Users of our smart device love music.  We partner with an external service to create custom music streams based on the user's tastes.

In this exercise, you'll replicate a part of one of our features:  collecting user genre preferences.

## The task

A data file is included in this project, `genres.json`, that describes a list of genres and a selection of ten artists associated with that genre.

The file format (here described in YAML notation) is as follows:

```
genres:
  - id: 1234        # the id as assigned by an external service
    name: 'Blues'   # the genre name
    artists:
      - id:    5678  # the artist id as assigned by an external service
        name: 'Muddy Waters'
        ...
  ...
```

The task is straightforward -- Create an app in any client side framework of your choosing with the following features:
- Reads in the `genres.json` file to populate a genres list
- Displays this list to the user including the first four artists for each genre
- Allows the user to select any number of these genres as a preference
- Sends these choices to a fictitious API endpoint for processing
- Stores the genre choices locally so that subsequent reloads of the page show which genres were previously selected

### Fictitious API

Let the fictitious API endpoint have the following characteristics:
- `url`: POST https://api.example.com/preferences
- `request body`: The request body should contain a single parameter `genres` which is an array of genre ids from `genres.json` as selected by the user
- `headers`: The API expects an OAuth Token to accompany the request in the `Authorization` header field.  The OAuth Token is `1234-5678-9999-9999`.

## Some general notes

This is our opportunity to see how you think, how you organize your code, and your development practice in general.  

Though the task is small, we encourage you to employ all of your own best practices, in order to show us how you would work in a larger project.  Therefore, feel free to employ your best use of components, services, tests, etc, to show us what your "production" level code looks like.

Feel free to reach out with any questions you may have to `coding-challenges@iamplus.com`.
