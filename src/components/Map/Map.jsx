import React from 'react';
import leaflet from 'leaflet';
import styles from './Map.module.css';

import 'leaflet/dist/leaflet.css';

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      map: null
    }
    this.createMap = this.createMap.bind(this)
  }

  createMap() {
    const opts = this.props.gauges !== null ? {center: [47.2,47.2], zoom: 7} : {center: [this.props.lon, this.props.lat], zoom: 10}
    return leaflet.map('map',opts)
  }

  componentDidMount() {
    const m = this.createMap()
    this.setState({map: m})
    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(m);
    m.invalidateSize(true);
  }

  render() {
    return (
      <div id='map' className={styles.map}></div>
    );
  }
}

export default Map;