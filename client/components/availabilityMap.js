import { Meteor } from "meteor/meteor";
import React from "react";
import PropTypes from "prop-types";
import { DocHead } from "meteor/kadira:dochead";


class AvailabilityMap extends React.Component {
  static propTypes = {
    trackingId: PropTypes.string.isRequired
  }

  componentDidMount() {
    if (this.props.trackingId) {
      const url = `https://maps.googleapis.com/maps/api/js?key=${this.props.trackingId}`;

      DocHead.loadScript(url, () => {
        // eslint-disable-next-line no-undef, no-new
        const map = new google.maps.Map(this.refs.map, {
          center: {
            lat: this.props.product.lat,
            lng: this.props.product.lng
          },
          zoom: 13
        });

        // eslint-disable-next-line no-undef, no-new
        new google.maps.Marker({
          position: {
            lat: this.props.product.lat,
            lng: this.props.product.lng
          },
          map: map,
          title: "Buy here!"
        });
      });
    }
  }

  render() {
    return (
      <div>
        <h3>Product available at the following stores</h3>
        <div className="map" ref="map"></div>
      </div>
    );
  }
}

export default AvailabilityMap;
