import React,{ useState, useEffect } from 'react';
import LoaderData from './LoaderData';
import { useFetch } from './useFetch';

export default function SearchPast({Url}){
	const [seeDate, setSeeDate] = useState("2022-01-03");

	console.log("url ", Url);
	let {loading, info} = useFetch(Url + seeDate);
	console.log("info",info);
	
	useEffect( () => {
		console.log(seeDate);
		console.log("see datec ", Url + seeDate);
	}, [seeDate, Url])
	
	return(
		<>
			<section className="search-past">
				<article className="search-past-info">
					<h2 >Search the Past</h2>
					<div>
						<h5>Pick the date {seeDate} and wait 5-6 sec for the pic^^</h5>
						<input class="controlDate" type="date" name="indate" onChange={(event) => { setSeeDate(event.target.value);loading=true}} />
					</div>
					{!loading ? (<h1>{info.title}</h1>):(<LoaderData />)}
				</article>
				
				{!loading ? (
				<a href="">{info.media_type === "image"?(<img src={info.url} alt={info.title} />):(<iframe src={info.url} controls="controls" />)}</a>
				)
				:(
				<>
					<LoaderData />
				</>
				)}
			</section>
		</>
	);
}