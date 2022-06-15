import React from 'react';

const SearchBox = (props) => {
	return (
		<div className='col bar'>
			<input
				class="searchBox"
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Search for Your Favorite Movies'
			></input>
		</div>
	);
};

export default SearchBox;