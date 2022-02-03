import React from 'react';
import styles from './Map.module.css';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.map = L.map('map', {
      center: [47.2,47.2],
      zoom: 7,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png'),
      ]
    });
    this.layer = L.layerGroup().addTo(this.map)
  }

  componentDidUpdate({geometry}) {
    if (this.props.geometry !== geometry) {
      if (this.props.geometry) {
        this.layer.clearLayers();
        L.geoJSON(JSON.parse(this.props.geometry.geom)).addTo(this.layer)
        const bbox = this.props.geometry.extent.slice(4,-1).split(',')
        this.map.fitBounds([[Number(bbox[0].split(' ')[1]), Number(bbox[0].split(' ')[0])], 
                            [Number(bbox[1].split(' ')[1]), Number(bbox[1].split(' ')[0])]])
      } else {
        this.layer.clearLayers();
      }
    }
  }

  render() {
    return (
      <div id='map' className={styles.map}></div>
    );
  }
}

export default Map;