import { useStateContext } from '../../HBOProvider'
import Link from 'next/link'
import { useEffect } from 'react';

const SideNav = (props) => {

	const globalState = useStateContext()

	useEffect(() => {
		if (globalState.sideNavOpen === true) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'auto';
		}
	}, [globalState.sideNavOpen])

	return (
		<div className={`side-nav ${globalState.sideNavOpen ? 'side-nav--active' : '' }`}>
			<div className="side-nav__close-btn" onClick={() => {globalState.setSideNavOpenAction(false);}}>
				<i className="fas fa-times" />
			</div>
			<ul className="side-nav__main">
				<li onClick={() => {globalState.setSideNavOpenAction(false);}}>
					<Link href='/'>
						<a className="active">
							Home
						</a>
					</Link>
				</li>
				<li onClick={() => {globalState.setSideNavOpenAction(false);}}>
					<Link href='/movie'>
						<a className="active">
							Movies
						</a>
					</Link>
				</li>
				<li onClick={() => {globalState.setSideNavOpenAction(false);}}>
					<Link href='/tv'>
						<a className="active">
							TV Shows
						</a>
					</Link>
				</li>
			</ul>
			
		</div>
	);
};

export default SideNav;
