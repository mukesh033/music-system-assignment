import './App.css';
import { Provider } from 'react-redux'
import Header from './components/Music-header'
import MusicPlaying from './components/Music-playing'
import MusicList  from "./components/Music-list";
import store from './redux/store'

function App() {
	return (
		<Provider store={store}>
			<div className="music-app">
				<Header></Header>
				<section className="play-section-container">
					<MusicPlaying></MusicPlaying>
					<MusicList></MusicList>
				</section>
			</div>
		</Provider>
	);
}

export default App;
