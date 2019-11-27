import React from 'react';

const Artist = ( props ) => {
	if(props.artist == null) return null;

	const { name, image } = props.artist;

	return(
		<div className="img-ctn">
			<h3> {name} </h3>
			<img src={image} style={{ width:200, height:200, borderRadius:100 }} />
		</div>
	)
}

export default Artist;