import AstroPic from './components/Astropic'
import HeroHeader from './components/HeroHeader'
import Cards from './components/Cards'
import SearchPast from './components/SearchPast'
import './App.css';

function App() {
	const Url = 'https://api.nasa.gov/planetary/apod?api_key=TDRCcyaEeGJrMXEpgh8hgNrJcmF2DkArlF16EBRN';
  return (
	<>
		<HeroHeader />
		<AstroPic Url={Url}/>
		<SearchPast Url={Url+"&date="}/>
		<Cards Url={Url+"&count=5"} />
		<footer>
			<p>Credits: <a href="https://api.nasa.gov/">apod nasa gov</a> & <a href="https://github.com/nasa/apod-api">Nasa apod API Github</a></p>
			
		</footer>
	</>
  );
}

export default App;
