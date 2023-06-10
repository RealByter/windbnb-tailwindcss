import Logo from './components/Logo';
import SearchBar from './components/SearchBar';
import Stays from './components/Stays';
import './normalize.css';
import './reset.css';
import './App.css';

const App = () => {
	return (
		<div className="app">
			<Logo />
			<SearchBar />
			<Stays />
			<p className='created-by'>
				created by <strong>Byter</strong> - devChallenges.io
			</p>
		</div>
	);
};

export default App;
