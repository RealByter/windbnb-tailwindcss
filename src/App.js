import Logo from './components/Logo';
import SearchBar from './components/SearchBar';
import Stays from './components/Stays';
import './normalize.css';
import './reset.css';
import './App.css';

const App = () => {
	return (
		<div className="relative flex flex-col my-[2.375rem] mx-[calc(2vw*2)]">
			<Logo />
			<SearchBar />
			<Stays />
			<p className="mx-auto mb-6 text-sm font-medium text-gray-500">
				created by <strong className="font-bold underline">Byter</strong> - devChallenges.io
			</p>
		</div>
	);
};

export default App;
