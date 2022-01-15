import React from 'react';
import LoaderData from './LoaderData';
import { useFetch } from './useFetch';

export default function Card({Url}){
	let {loading, info} = useFetch(Url);
	console.log("info",info);
	
	return(
		<>
		<section className="cards-carousel-container">
			<h2 className="cards-carousel-h">5 Blast from the Past <span className="card-s"> random pics</span></h2>
			
			<section className="cards-carousel">
			{!loading ? (
			info.map((item) => {
					return(<article className="card" key={item.date}>								
								{item.media_type === "image"?(<img src={item.url} alt={item.title} />):(<iframe src={item.url} controls="controls" />)}
								<h2>{item.title}</h2>
								<a href={item.hdurl}>See the Big Picture</a> 
							</article>)}
					))
			:(
			<>
				<LoaderData />
			</>
			)}
			</section>
		</section>
		</>
	);
}