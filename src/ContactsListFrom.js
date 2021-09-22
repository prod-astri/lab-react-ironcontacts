import React from 'react'

export default function ContactsList(props) {
	console.log(props.queryProp);
	const list = props.contacts
		.filter(contact => contact.name.toLowerCase().includes(props.queryProp.toLowerCase()))
		.map(contact => {
			return (
				<tr key={contact.id}>
					<td>
						<img
							src={contact.pictureUrl}
							height='100px'
							alt={contact.name}
						/>
					</td>
					<td>{contact.name}</td>
					<td>{contact.popularity.toFixed(2)}</td>
					<td>{contact.wonOscar && '🏆'}</td>
					<td>{contact.wonEmmy && '🏆'}</td>
					<td>
						<button onClick={() => { props.deleteContactProp(contact.id) }}>
							Delete
						</button>
					</td>
				</tr>
			);
		})

	return (
		<>
			{list}
		</>
	)
}
