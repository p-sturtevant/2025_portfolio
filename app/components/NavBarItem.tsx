interface NavBarItemProps {
	title: string;
	link: string;
}

export const NavBarItem = ({ title, link }: NavBarItemProps) => {
	return (
		<div className="border-off-2 flex w-full items-center justify-center rounded-md bg-amber-100 p-5">
			<a
				href={link}
				className="font-dragon-rough hover: w-fit text-3xl text-purple-700 hover:scale-105 hover:cursor-pointer hover:text-purple-400 hover:transition-all hover:duration-300"
			>
				{title}
			</a>
		</div>
	);
};
