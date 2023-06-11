import stays from '../assets/stays.json';
import Stay from './Stay';

const Stays = () => (
	<>
		<div className="flex items-center mt-[2.375rem] mb-6 md:mt-24">
			<h2 className="text-[1.125rem] font-bold">Stays in Finland</h2>
			<p className="text-sm font-medium ml-auto">12+ stays</p>
		</div>
		<div className="flex mx-auto flex-wrap justify-center gap-y-[calc(50px+1.5rem)] gap-x-8 mb-40">
			{stays.map((stay, index) => (
				<Stay key={index} {...stay} />
			))}
		</div>
	</>
);

export default Stays;
