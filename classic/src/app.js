import * as React from 'react'
import {Component} from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import MapGL, { Source, Layer, FullscreenControl } from 'react-map-gl'

import SidePanelContainer from "./components/SidePanelContainer"

import { clusterLayer, clusterCountLayer, unclusteredPointLayer } from './layers'
import reducer from './reducers'

import "./global.css"

const store = createStore(reducer)
const MAPBOX_TOKEN = "pk.eyJ1IjoianVnZ3k2OSIsImEiOiJja2FvbmQ0N3kwMG56MnFwdnN4N3NwYzA3In0.EmUzcyS3lwwFX3IOfWWg5g"

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 22,
        longitude: 96,
        zoom: 5,
        bearing: 0,
        pitch: 0
      }
    }

    this._sourceRef = React.createRef()
    this._mapRef = React.createRef()
    this._onViewportChange = this._onViewportChange.bind(this)
    this._onClick = this._onClick.bind(this)
  }


  _onViewportChange (viewport) { 
    this.setState({ viewport })
  }

  _onClick (event) {
    console.log("HEres the event!!!!!!!!!")
    console.log(event)

    const feature = event.features[0]
    const clusterId = feature.properties.cluster_id

    const mapboxSource = this._sourceRef.current.getSource()

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return
      }

      this._onViewportChange({
        ...this.state.viewport,
        longitude: feature.geometry.coordinates[0],
        latitude: feature.geometry.coordinates[1],
        zoom,
        transitionDuration: 500
      })
    })
  }

  render() {
    return (
      <div style={{
        display: "flex",
        flexDirection: "row",
        overflowY: "unset"
      }}>

        <SidePanelContainer/>

        <MapGL
          {...this.state.viewport}
          width="calc(100vw - 350px)"
          height="100vh"
          //dark-v9 for the dark version
          //streers-v9 for the light version
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={this._onViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          interactiveLayerIds={[clusterLayer.id]}
          onClick={this._onClick}
          ref={this._mapRef}
        >
          <Source
            type="geojson"
            data="https://myanmar-map.herokuapp.com/projects/geojson"
            cluster={true}
            clusterMaxZoom={14}
            clusterRadius={50}
            ref={this._sourceRef}
          >
            <Layer {...clusterLayer} />
            <Layer {...clusterCountLayer} />
            <Layer {...unclusteredPointLayer} />
          </Source>

          <div style={{ position: "absolute", right: 10, top: 10 }}>
            <FullscreenControl containerComponent={this.props.containerComponent} />
          </div>

        </MapGL>
      </div>
    )
  }
}

document.body.style.margin = 0;
render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root") 
  // document.body.appendChild(document.createElement('div'))
);
