import { useState } from 'react';
import axios from 'axios';

import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';
import Library from './components/Library';
import Description from './components/Description';

function App() {
	const [book, setBook] = useState(null);
	const [isMobile, setIsMobile] = useState(false);
	const [bookToShow, setBookToShow] = useState(null);

	const getBookInfo = (bookID) => {
		axios
			.get(`${process.env.REACT_APP_SERVER_URL}/api/book/${bookID}`)
			.then((response) => {
				setBookToShow(response.data);
			})
			.catch((error) => {
				console.log({ error });
			});
	};

	return (
		<div className='App'>
			<Header />
			<SearchBox setBook={setBook} getBookInfo={getBookInfo} />
			<Navbar />
			<div className='container'>
				<Library
					setBook={setBook}
					book={book}
					isMobile={isMobile}
					setIsMobile={setIsMobile}
					getBookInfo={getBookInfo}
				/>
				{book && (
					<Description
						setBook={setBook}
						book={book}
						isMobile={isMobile}
						bookToShow={bookToShow}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
