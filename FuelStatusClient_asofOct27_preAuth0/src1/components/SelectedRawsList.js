import React from 'react';
import { connect } from 'react-redux';
import SelectedRawsSelector from '../selectors/selected_raws';

const SelectedRawsList = (props) => {
	return (
		<ul className="list-group">
			{ 
				props.raws.map(raws => {
					return <li className="list-group-item" key={raws.RAWSid}>{raws.RAWSname}</li>
				})
			}
		</ul>
	);
};

const mapStateToProps = (state) => {
	return { raws: SelectedRawsSelector(state) };
}

export default connect(mapStateToProps)(SelectedRawsList);