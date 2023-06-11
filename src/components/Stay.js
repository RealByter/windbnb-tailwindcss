const Stay = props => (
	<div className="flex flex-col relative grow basis-96">
		<img
			className="aspect-[1.47/1] rounded-3xl w-full mb-4"
			src={props.photo}
			alt="Apartment"
		/>
		<div className="flex font-medium items-center">
			{props.superHost && (
				<p className="border border-solid rounded-xl font-bold aspect-[25/7] w-24 text-[0.625rem] flex items-center justify-center mr-[0.625rem] border-gray-700 md:text-xs md:w-24 md:mr-[0.6875rem]">
					SUPER HOST
				</p>
			)}
			<p className="text-xs text-gray-500 mr-auto md:text-sm">
				{props.type} {props.beds && `. ${props.beds} beds`}
			</p>
			<div className="flex gap-2 items-center">
				<svg
					className="aspect-square w-[0.875rem] fill-primary opacity-70 md:w-4"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24">
					<title>star</title>
					<path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
				</svg>
				<p className="text-gray-500 text-xs md:text-sm">
					{props.rating.toFixed(2)}
				</p>
			</div>
		</div>
		<p className="text-sm font-semibold text-gray-800 absolute -bottom-6">
			{props.title}
		</p>
	</div>
);

export default Stay;
