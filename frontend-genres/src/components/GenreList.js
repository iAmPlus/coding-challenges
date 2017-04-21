import React, { Component } from 'react';
import GenreItem from 'components/GenreItem';
import _ from 'lodash';

class GenreList extends Component {
  componentDidMount() {
    this.getGenres();
  }

  getGenres() {
    $.ajax({
      url: this.props.genresUrl,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.getPreferences( data.genres );
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  getPreferences( genres ) {
    $.ajax({
      url: this.props.preferencesUrl,
      dataType: 'json',
      cache: false,
      success: function(data) {
        // Use what is provided or use what is in the state
        genres = genres ? genres : this.state.genres;

        this.updateStatePreferences( genres, data );
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  updateStatePreferences( genres, preferences ) {
    // Add the selected flag
    genres = _.map( genres, ( genre ) => {
      genre.selected = preferences.genreIds.indexOf( genre.id ) < 0 ? false : true;
      return genre;
    });

    this.setState({
      genres: genres,
      preferences: preferences
    });
  }

  handleSubmitPreferences( id ) {
    // If id is in genreIds, then remove it, else add it.
    if( this.state.preferences.genreIds.indexOf( id ) >= 0 ) {
      _.pull( this.state.preferences.genreIds, id );
    }
    else {
      this.state.preferences.genreIds.push( id );
    }

    // Save the preferences to preferences.json
    $.ajax({
      type: "POST",
      url: "/api/preferences",
      data: { genres: this.state.preferences.genreIds },
      dataType: 'json',
      beforeSend: function(xhr) {
				xhr.setRequestHeader('Authorization', '1234-5678-9999-9999');
      },
      success: function(data) {
        this.updateStatePreferences( this.state.genres, data );
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  render() {
    // Set of random colors for each genre
    var colors = ["pink", "teal", "deep-purple", "blue-grey", "orange", "indigo"];

    // Track the scope
    var that = this;

    // Generate the genre cards
    var genreItemEl;
    if( this.state && this.state.genres ) {
      genreItemEl = _.map( this.state.genres,  ( genre ) => {
        return (
          <GenreItem
            key={genre.id}
            genre={genre}
            color={colors.pop()}
            handleSelect={that.handleSubmitPreferences.bind( that )} />
        );
      });
    }

    return (
      <div>
        <h1>Genre List</h1>
        <div className="row">
          {genreItemEl}
        </div>
      </div>
    );
  }
}

GenreList.getInitialState = () =>  {
  return {
    genres: {},
    preferences: {}
  };
}
GenreList.propTypes = {
  genresUrl: React.PropTypes.string.isRequired,
  preferencesUrl: React.PropTypes.string.isRequired
};

export default GenreList;
