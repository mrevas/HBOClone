import { useStateContext } from '../../HBOProvider'
import Link from 'next/link'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const GenreNav = (props) => {
	// const globalState = useStateContext()
	const [activeNav, setActiveNav] = useState(false);
	setTimeout(() => setActiveNav(true), 1000)

	return (
		<ul className={`genre-nav ${activeNav ? 'genre-nav--active' : ''}`}>
			<GenreList genresData={props.genresData} mediaType={props.mediaType} />
		</ul>
	);
};

const GenreList = (props) => {
	return props.genresData.map((genre) => {

		return (
			<li key={genre.id}>
				<Link href={`/${props.mediaType}/genre/${genre.id}`}>
						{genre.name}
				</Link>
			</li>
		)
	})
}

export default GenreNav;