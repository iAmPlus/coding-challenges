# Backend project for `i.am+` candidates

Welcome!

As a back end engineer candidate for our online services team, we're interested in seeing where you are in your evolution as a developer, and see how you organize your code and solve problems.

We hope this small coding project will be fun, and will give us something to talk about in your next interview round.

## Some Background

Users of our services love music.  We utilize several external APIs to provide new and interesting music experiences.

## The Task

You will design and build a small API using Ruby on Rails.

[Setlist.fm](https://api.setlist.fm/docs/index.html) is a service that crowdsources concert setlists.

[Spotify](https://developer.spotify.com/web-api/) provides a REST API for looking up music metadata and information.

Using [Setlist.FM API](https://api.setlist.fm/docs/index.html) and the [Spotify API](https://developer.spotify.com/web-api/) build a tool that does the following:

    Given an artist name:

        1. Fetches the setlist for the artist's most recent concert.

        2. Retrieves the metadata for each track (including Artist Name, Album Name, Track Name, Release Year, ISRC, Duration, Spotify ID and ...)

        3. Stores the list of tracks and metadata as a playlist locally, the playlist should be retrievable by the date of the concert.

        4. Returns a JSON of the playlist with all metadata attached.
 &#13;

    Given an artist name and date:

        1. Retrieves the playlist for the given date.


## Some General Notes

This is our opportunity to see how you think, how you organize your code, and your development practice in general.

Though the task is small, we encourage you to employ all of your own best practices, in order to show us how you would work in a larger project.  Therefore, feel free to employ your best use of components, services, tests, etc, to show us what your "production" level code looks like.

Feel free to reach out with any questions you may have to `kyle.lucas@iamplus.com`.