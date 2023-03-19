// import { useState, useEffect } from 'react';
// import axios from 'axios';

import { formatIsbn, formatAppendix, checkIsbn } from '../utils/functions';

function Description({ book, setBook, isMobile, bookToShow }) {
	// const [bookToShow, setBookToShow] = useState(null);

	// useEffect(() => {
	// 	axios
	// 		.get(`${process.env.REACT_APP_SERVER_URL}/api/book/${book._id}`)
	// 		.then((response) => {
	// 			setBookToShow(response.data);
	// 		})
	// 		.catch((error) => {
	// 			console.log({ error });
	// 		});
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);

	if (bookToShow) {
		const isIsbnValid = checkIsbn(bookToShow.isbn);
		return (
			<div className='description'>
				{isMobile && (
					<span className='backBtn' onClick={() => setBook(null)}>
						{`< Back`}
					</span>
				)}

				<img
					className='bookCover'
					src={isIsbnValid ? bookToShow.cover : `/covers/default.jpg`}
					alt='cover'
				></img>
				<div className='bookInformation'>
					{isIsbnValid ? (
						<>
							<p className='bookTitle'>{bookToShow.title}</p>
							<p className='bookData'>{`ISBN: ${formatIsbn(
								bookToShow.isbn
							)}`}</p>
							<p className='bookData'>{`Appendix: ${formatAppendix(
								bookToShow.appendixPage
							)}`}</p>
						</>
					) : (
						<>
							<h2 className='bookTitle'>
								The ISBN number entered is invalid. Please check it and try
								again.
							</h2>
						</>
					)}
				</div>
			</div>
		);
	}
}

export default Description;
