import React, { Component } from 'react'
import { connect } from 'react-redux'
import ol from 'openlayers/dist/ol-debug.js'
import 'openlayers/css/ol.css'

import { 
  selectAction,
  fetchZoneData,
  updateZone,
} from '../../actions'
// import isCritical from '../../data/isCritical'
// import zonePosition from '../../data/zonePosition'
import '../../popup.css'

class Map extends Component {
  handleResizedScreen = () => setTimeout(() => {
    this._map.getView().fit([ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ], (this._map.getSize()), {padding: [10, 20, 50, 20], constrainResolution: false})
  }, 200)
  // componentWillMount() {
  // }

  componentDidMount() {
    // this.props.updateZone()
    this.props.fetchZoneData()
    window.addEventListener("resize", this.handleResizedScreen)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResizedScreen)
  }

  updateSelection = name => {
    // const extent = this._map.getView().calculateExtent(this._map.getSize())
    // const selected = this.props.layer.getSource().getFeaturesInExtent(extent).filter(function(feature) {
    //   return name === feature.getProperties().name.replace(/<(?:.|\n)*?>/g, '')
    // })
    // const selected = this.props.layer.getSource().getFeaturesInExtent(extent).filter(function(feature) {
    //   return name === feature.getProperties().name.replace(/<(?:.|\n)*?>/g, '')
    // })
    // if (selected.length > 0) {
    //   const feature = selected[0]
    //   this.popup.getElement().innerHTML = feature.getProperties().name
    //   this.popup.setPosition(feature.getGeometry().getFirstCoordinate())
    // }
  }
  componentWillUpdate(nextProps) {

    // this.updateSelection(nextProps.selected)  
    
  }

  _initializeOpenLayers = target => {
    if (this._map) {
      return
    }
    this._map = new ol.Map({
      controls: [
        new ol.control.ScaleLine(),
        new ol.control.Attribution({
          collapsible: false,
          collapsed: false,
        }),
        new ol.control.Zoom(),
      ],
      interactions: ol.interaction.defaults({
        keyboard: false,
        altShiftDragRotate: false,
        pinchRotate: false
      }),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.Stamen({
            layer: 'toner-lite'
            // layer: 'terrain-lines'
          })
        }),
        this.props.layer,
      ],
      target,
      view: new ol.View({
        // projection: "EPSG:3857",
        center: [-12753260.184760537, 4948659.629345282],
        zoom: 5.6,
        // minZoom: 5,
        maxZoom: 9.8,
        extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ]
      })
    })
    this._map.getView().fit([ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ], (this._map.getSize()), {padding: [10, 20, 50, 20], constrainResolution: false})

    const content = document.getElementById('popup-content')
    this.popup = new ol.Overlay({
      element: document.getElementById('popup'),
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    })
    this._map.addOverlay(this.popup)
    const closer = document.getElementById('popup-closer')
    closer.onclick = () => {
      this.popup.setPosition(undefined)
      closer.blur()
      return false
    }

    const selectClick = new ol.interaction.Select({
      condition: ol.events.condition.click,
      layers: [ this.props.layer ],
      style: feature => {
        const selected = feature.get('STATE_ZONE')
        const { status } = this.props.isCritical[selected] || ''
        const color = {
          'notcritical': 'rgba(44, 107, 36, 1)',
          'critical': 'rgba(160, 35, 28, 1)',
          'approachingcritical': 'rgba(249, 238, 31, 1)',
        }[status] || 'rgba(176, 176, 176, 1)'

        let defaultColor = color.replace(`1)`, `.6)`)
        const zoneData = this.props.isCritical[selected] ? this.props.isCritical[selected] : null
        this.props.selectAction({ selected, color: defaultColor, zoneData })

        return new ol.style.Style({
          fill: new ol.style.Fill({ color }),
          stroke: new ol.style.Stroke({
            color: 'rgba(255, 255, 255, .9)',
            width: 3
          }),
          text: new ol.style.Text({
            font: '15px Montserrat, sans-serif',
            fill: new ol.style.Fill({ color: '#000' }),
            stroke: new ol.style.Stroke({
              color: 'rgba(238, 238, 238, .7)',
              width: 3
            }),
            text: selected
          })
        })
      }
    })    

    const selectHover = new ol.interaction.Select({
      condition: ol.events.condition.pointerMove,
      layers: [ this.props.layer ],
      style: feature => {
        const selected = feature.get('STATE_ZONE')
        const { status } = this.props.isCritical[selected] || ''
        const color = {
          'notcritical': 'rgba(44, 107, 36, 1)',
          'critical': 'rgba(160, 35, 28, 1)',
          'approachingcritical': 'rgba(249, 238, 31, 1)',
        }[status] || 'rgba(176, 176, 176, 1)'

        const defaultColor = color.replace(`1)`, `.6)`)
        const zoneData = this.props.isCritical[selected] ? this.props.isCritical[selected] : null
        this.props.selectAction({ selected, color: defaultColor, zoneData })

        return new ol.style.Style({
          fill: new ol.style.Fill({ color }),
          stroke: new ol.style.Stroke({
            color: 'rgba(255, 255, 255, .9)',
            width: 3
          }),
          text: new ol.style.Text({
            font: '15px Montserrat, sans-serif',
            fill: new ol.style.Fill({ color: '#000' }),
            stroke: new ol.style.Stroke({
              color: 'rgba(238, 238, 238, .7)',
              width: 3
            }),
            text: selected
          })
        })
      }  
    })    

    this._map.addInteraction(selectClick)
    this._map.addInteraction(selectHover)

    selectClick.on('select', e => {
      e.preventDefault()
      const selected = e.selected[0] ? e.selected[0].get('STATE_ZONE') : null
      const coord = e.mapBrowserEvent.coordinate
      const { zoneSelect } = this.props
      const zoneData = zoneSelect.zoneData || null 
      if (selected) {
        content.innerHTML = `${selected} Current Status:<br />3 Day ERC average: ${zoneData.ThreeDayAverage}<br />Critical Threshold: ${zoneData.ERC_threshold}<br />Observations updated on: ${zoneData.obsdate}`
        this.popup.setPosition(coord)
      }
      selected || (this.popup.setPosition(undefined) && e.selected.clear())
      // !selected && this.popup.setPosition(undefined)
    })

    selectHover.on('select', e => {
      e.preventDefault()
      
      // const zoneERC = isCritical[selected] ? isCritical[selected]['status'] : 'No Data'
      // const ERC = isCritical[selected] ? isCritical[selected]['ERC'] : 'No Data'
      // const ERC24 = isCritical[selected] ? isCritical[selected]['ERC24'] : 'No Data'
      // const ERC48 = isCritical[selected] ? isCritical[selected]['ERC48'] : 'No Data'
      // const ERC72 = isCritical[selected] ? isCritical[selected]['ERC72'] : 'No Data'

      // const status = isCritical[selected] ? isCritical[selected]['status'] : 'No Data'
      // const obsUpdate = isCritical[selected] ? isCritical[selected]['obsdate'] : 'No Data'
      // const threeDayAverage = isCritical[selected] ? isCritical[selected]['ThreeDayAverage'] : 'No Data'
      // const Threshold = isCritical[selected] ? isCritical[selected]['ERC_threshold'] : 'No Data'
     
      // const zoneSelectPosition = zonePosition[selected]
      // const arrayPosition = positionArray.indexOf(selected)

      // const getZoneObject = fetched5[zoneSelectPosition]
      // const accessZoneInfo = fetched4
      // const orderedByDate=[]
      // getZoneObject[selected].map((curr, index) => {
      //   const x = curr
      //   const dateObj = Date.parse(x.updated)
      //   x.updated = dateObj
      //   orderedByDate.push(x)
      // })
      // const sortDate = getZoneObject[selected].sort(dynamicSort("updated"))
      // const accessObject = fetched5[zoneSelectPosition][selected]
      // const apr12016 = 1459468800000 //To get this number Date.parse("2016-04-01")
      // const sinceApril = []

      // sortDate.filter(function(curr, index) {
      //   if(curr["updated"] >= apr12016) {
      //     sinceApril.push(curr)
      //   }
      // })


      // const ThresholdText
      // for (const i = 0 i < sinceApril.length i++) { 
      //   ThresholdText += sinceApril[i]["ERC_threshold"] + "<br>"
      // }
      // const TableText

      // for (const i = 0 i < sinceApril.length i++) { 
      //   const newDate = new Date(sinceApril[i]["updated"])
      //   const year = newDate.getFullYear()
      //   const month = newDate.getMonth()
      //   const day = newDate.getDate()
      //   const hour = newDate.getHours()
      //   const minutes = newDate.getMinutes()
      //   const seconds = newDate.getSeconds()
      //   const tableManual=sinceApril[i]["manual"]
      //   if (tableManual=="critical"){
      //     tableManual = "Critical"
      //   }
      //   else if (tableManual === "notcritical") {
      //     tableManual = "Not Critical"
      //   }
      //   else {
      //     tableManual = "No"
      //   }
      //   const ERCThresholdTable = sinceApril[i]["ERC_threshold "] ? sinceApril[i]["ERC_threshold "] : sinceApril[i]["ERC_threshold"]
      //   const curedTable = sinceApril[i]["cured "] ? sinceApril[i]["cured "] : sinceApril[i]["cured"]
      //   TableText += '<tr><th scope="row">'+ month + '/' + day + '/' + year + ' '+hour+':'+minutes+':'+seconds+' MDT </th><td>' + sinceApril[i]["elevation"]+ '</td><td>' + curedTable + '</td><td>' + ERCThresholdTable + '</td><td>' + tableManual + '</td><td>' + sinceApril[i]["justification"] + '</td><td style="word-wrap: break-wordmin-width: 160pxmax-width: 160px">' + sinceApril[i]["remarks"] + '</td></tr>'
      // }


    })
  }
  
  render() {
    // if (this.loading) {}
    return (
      <div className='card h-100 border-0' ref={olmapDiv => this._initializeOpenLayers(olmapDiv)} data='ol-map'>
        <div id="popup" className="ol-popup">
          <a href="#" id="popup-closer" className="ol-popup-closer"></a>
          <div id="popup-content"></div>
        </div> 
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  const { zoneSelect } = reduxState
  const { isCritical } = reduxState.isCritical
  return { zoneSelect, isCritical }
}

export default connect(mapStateToProps, { selectAction, fetchZoneData, updateZone })(Map)