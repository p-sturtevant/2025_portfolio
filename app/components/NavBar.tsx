import { NavBarItem } from './NavBarItem';

function NavBar() {
	return (
		<>
			<h1 className="font-dragon hover: w-fit scale-105 p-10 text-6xl text-purple-700 hover:scale-105 hover:cursor-pointer hover:text-purple-400 hover:transition-all hover:duration-300">
				Parker Sturtevant
			</h1>

			<div className="flex w-full items-center justify-center gap-10 p-5">
				<NavBarItem title="Home" link="/" />
				<NavBarItem title="Blog" link="/blog" />
				<NavBarItem title="About" link="/about" />
				<NavBarItem title="Contact" link="/contact" />
				<NavBarItem title="Links" link="/links" />
			</div>
		</>
	);
}

export default NavBar;
