import React, { Component } from 'react';
import _ from 'lodash';

class GenreItem extends Component {
  onSelect() {
    this.props.handleSelect( this.props.genre.id );
  }

  render() {
    // Display the first four artists in a genre
    var artistsToDisplay = this.props.genre.artists.slice(0, 4).map( ( artist ) => {
      return artist.name;
    }).join( ", " );

    // Toggle the styling for the checkmark (selected and non-selected)
    var checkStyle = {
      opacity: "0.2",
      fontSize: "30px"
    };
    if( this.props.genre.selected ) {
      checkStyle = {
        opacity: "1",
        fontSize: "30px"
      };
    }

    return (
      <div className="col s12 m4">
        <div className={this.props.color + " card darken-1"} onClick={this.onSelect.bind(this)}>
          <div className="card-content white-text">
            <span className="card-title activator">{this.props.genre.name}<i className="material-icons right" style={checkStyle}>done</i></span>
            <p>Listen to music from {artistsToDisplay} and more.</p>
          </div>

        </div>
      </div>
    )
  }
}

GenreItem.propTypes = {
  genre: React.PropTypes.object.isRequired
};

export default GenreItem;
