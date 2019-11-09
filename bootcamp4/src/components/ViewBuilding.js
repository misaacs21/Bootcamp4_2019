import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {data, selectedBuilding} = this.props;
		var selected = data[0];
		if(selectedBuilding===0){
			selected = data[selectedBuilding];
		}
		else {
			selected = data[selectedBuilding-1];
		}
		if(selected.hasOwnProperty('coordinates')) {
			return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
				<p>
					{selected.code}{' '}{selected.name}
				</p>
				<p>
					Coordinates:{' '}({selected.coordinates.latitude},{selected.coordinates.longitude})
				</p>
				<p>
					{selected.address}
				</p>
			</div>
		);}
		else {
			return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
				<p>
					{selected.code}{' '}{selected.name}
				</p>
				<p>
					{selected.address}
				</p>
			</div>
		);}
	}
}
export default ViewBuilding;
