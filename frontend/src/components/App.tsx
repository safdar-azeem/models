import React, { useEffect, useState } from 'react';
let env = import.meta.env;

function App() {
	const [data, setData] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const res = await fetch(env.VITE_REACT_APP_API_URL + '/model/all');
			const users = await res.json();
			setData(users);
		}
		fetchData();
	}, []);



  return (
		<div>
      <h1 >Hello World</h1>
		</div>
	);
}

export default App
