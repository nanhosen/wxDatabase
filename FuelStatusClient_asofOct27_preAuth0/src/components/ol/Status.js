import React from 'react'
import shortid from 'shortid'
// #a49a86
const Status = props => {
	return (
    <table className="table table-responsive table-hover table-striped table-sm mt-5"
      style={{
        maxHeight: `calc(${(props.height - (props.history + props.header))}px - 6.5rem)`,
        overflowY: 'scroll',
        backgroundColor: '#fff',
      }}
    >
      <thead>
        <tr>
        	<th>Date</th>
        	<th>Elevation</th>
        	<th>Cured</th>
        	<th>ERC Threshold</th>
        	<th>Set Manually?</th>
          <th>Manual Expiration</th>
        	<th>Justification</th>
        	<th>Remarks</th>
        </tr>
      </thead>
      <tbody>
        {
          props.updateHistory.map(update => {
            function formatDate(d) {
              return `${(parseInt(d.getMonth(), 10) + 1)}-${d.getDate()}${2000-d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
            }
            const d = new Date(update.updated)
            return (
              <tr key={shortid.generate()}>
                <th scope="row">{formatDate(d)}</th>
                <td>{`${update.elevation}′`}</td>
                <td>{`${update.cured}`}</td>
                <td>{update.ERC_threshold}</td>
                <td>{{'not set': 'Not Set', 'notcritical': 'Not Critical', 'critical': 'Critical', 'approachingcritical': 'Approaching Critical'}[update.manual]}</td>
                <td>{update.manual_expires ? formatDate(new Date(update.manual_expires)) : 'N/A'}</td>
                <td>{update.justification}</td>
                <td style={{wordWrap: 'break-word', minWidth: '160px', maxWidth: '160px'}} >{update.remarks}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
	)
}

export default Status