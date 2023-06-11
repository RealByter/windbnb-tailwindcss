const SearchBar = () => {
	return (
		<nav className="bg-white shadow-md rounded-2xl flex items-center justify-evenly min-w-[18.75rem] max-w-sm mx-auto mt-7 w-3/4 md:absolute md:top-0 md:right-0 md:w-[22.5vw] md:mt-0">
			<p className="flex items-center text-sm">Helsinki, Finland</p>
			<div className="w-px h-14 bg-gray-100" />
			<p className="flex items-center text-sm text-gray-300">Add guests</p>
			<div className="w-px h-14 bg-gray-100" />
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				className="fill-primary aspect-square w-8">
				<title>magnify</title>
				<path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
			</svg>
		</nav>
	);
};

export default SearchBar;
