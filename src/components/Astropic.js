import React from 'react';
import LoaderData from './LoaderData';
import { useFetch } from './useFetch';


const AstroPic = ({Url}) => {
	let {loading, info} = useFetch(Url);

	const {title,date,hdurl,url,explanation} = info; 
	return(
	<>	
		<main className='astroPic'>
		{!loading ? (
		<>
			<article className='containerImg'>
				<a href={hdurl}><img src={url} alt={title}/></a>
			</article>
			
			<article className="picInfo">
				<h2>{title}</h2>
				<p>Today's Pic <span className='date'> {date}</span></p>
				<p ></p>
			</article>
		</>
		):(
		<>
			<LoaderData />
		</>
		)}
		</main>
	</>
	);
}
export default AstroPic;