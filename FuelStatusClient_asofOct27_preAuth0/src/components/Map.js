import React, { Component } from 'react'
import { connect } from 'react-redux'
import OpenLayers from 'openlayers'
import 'openlayers/css/ol.css'

import { visiblePlacesAction, selectAction } from '../actions'
import '../popup.css'

class Map extends Component {
  updateSelection = name => {
    const extent = this._map.getView().calculateExtent(this._map.getSize());
    const selected = this.props.layer.getSource().getFeaturesInExtent(extent).filter(function(feature) {
      return name === feature.getProperties().name.replace(/<(?:.|\n)*?>/g, '')
    });
    if (selected.length > 0) {
      const feature = selected[0]
      // this.popup.getElement().innerHTML = feature.getProperties().name
      // this.popup.setPosition(feature.getGeometry().getFirstCoordinate())
    }
  }
  componentWillUpdate(nextProps) {
    this.updateSelection(nextProps.selected)    
  }

  _initializeOpenLayers = target => {
    if (this._map) {
      return
    }
    // const scaleStyle = {
    //   background: 'white',
    // };
    this._map = new OpenLayers.Map({
      controls: [
        new OpenLayers.control.ScaleLine(),
        new OpenLayers.control.Attribution({
          collapsible: false,
          collapsed: false,
        }),
        // new OpenLayers.control.Zoom({
        //     className: styles.olZoom
        // })
      ],
      interactions: OpenLayers.interaction.defaults({
        keyboard: false,
        altShiftDragRotate: false,
        pinchRotate: false
      }),
      layers: [
        new OpenLayers.layer.Tile({
          source: new OpenLayers.source.OSM()
        }),
        this.props.layer,
      ],
      target,
      view: new OpenLayers.View({
        // projection: "EPSG:3857",
        center: [949282, 6002552],
        zoom: 4,
        // minZoom: 2.5,
        // maxZoom: 22,
      })
    })

    // const popupElement = document.getElementById('popup')
    // this.popup = new OpenLayers.Overlay({
    //   element: popupElement,
    //   autoPan: true,
    //   autoPanAnimation: {
    //     duration: 250
    //   }
    // })
    // this._map.addOverlay(this.popup)

    const updateVisiblePlaces = () => {
      var extent = this._map.getView().calculateExtent(this._map.getSize());
      var places = this.props.layer.getSource().getFeaturesInExtent(extent).map(feature => feature.getProperties())
      this.props.visiblePlacesAction(places)
    }
    this.props.layer.on('change', updateVisiblePlaces)
    this._map.on('moveend', updateVisiblePlaces)

    const mapClick = new OpenLayers.interaction.Select({
      condition: OpenLayers.events.condition.click,
      layers: [
        this.props.layer
      ],
      // style: new OpenLayers.style.Style({
      //   fill: new OpenLayers.style.Fill({
      //     color: 'blue',
      //     // color: 'rgba(255, 145, 20, 1)'
      //   }),
      //   stroke: new OpenLayers.style.Stroke({
      //     color: 'blue',
      //     // color: 'rgba(0,0,255, .8)',
      //     // color: '#f00',
      //     width: 3
      //   })
      // }) 
    });
    // this._map.addInteraction(mapClick);
    mapClick.on('select', e => {
      e.preventDefault();
      var feature = e.selected[0].getProperties().name.replace(/<(?:.|\n)*?>/g, '');
      this.props.selectAction(feature)  
      console.log('feature : ' + feature)
    });
  }

  render() {
    if (this.loading) {}
    return (
      <div className='map' ref={olmapDiv => this._initializeOpenLayers(olmapDiv)} data='ol-map'>
      </div>
    )
  }
}  

// render() {
//     if (this.loading) {}
//     return (
//       <div className='map' ref={olmapDiv => this._initializeOpenLayers(olmapDiv)} data='ol-map'>
//         <div id="popup" className="ol-popup"></div>
//       </div>
//     )
//   }
// }

const mapStateToProps = state => {
  const { places, selected } = state.placeSelect
  return { places, selected }
}

export default connect(mapStateToProps, { selectAction, visiblePlacesAction })(Map)