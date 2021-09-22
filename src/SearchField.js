import React from 'react'

export default function SearchField(props) {

	const handleInputChange = event => {
		// call setQuery in App.js via the prop
		props.setQueryProp(event.target.value)
	}

	return (
		<div>
			<input type="text" onChange={handleInputChange} />
		</div>
	)
}