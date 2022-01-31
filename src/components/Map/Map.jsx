import React from 'react';
import leaflet from 'leaflet';
import styles from './Map.module.css';
import "leaflet/dist/leaflet.css";

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      map: null
    }
    this.createMap = this.createMap.bind(this)

  }

  createMap() {
    //console.log(this.props.geometry === undefined ? 'undef' : 'DEF')
    //const opts = {center: [47.2,47.2], zoom: 7}
    const opts = this.props.geometry === undefined || this.props.geometry === null ? {center: [47.2,47.2], zoom: 7} : {center: [this.props.geometry.centroid_x, this.props.geometry.centroid_y], zoom: 8} 
    return leaflet.map('map',opts)
  }

  componentDidMount() {
    const m = this.createMap()
    this.setState({map: m})
    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(m);
  }

  render() {
    console.log(this.props)
    return (
      <div id='map' className={styles.map}></div>
    );
  }
}

export default Map;