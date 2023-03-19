import { useState, useEffect } from 'react';
import axios from 'axios';

import { formatIsbn, listenerResize } from '../utils/functions';

function Library({ book, setBook, isMobile, setIsMobile, getBookInfo }) {
	const classLibrary = book && isMobile ? 'no-Library' : 'library';

	useEffect(() => {
		listenerResize(setIsMobile);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [listBooks, setListBooks] = useState(null);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_SERVER_URL}/api/books/initial`)
			.then((response) => {
				setListBooks({
					list: response.data.list,
					total: response.data.total,
					pagination: 1,
					totalPag: Math.ceil(response.data.total / 10),
				});
			})
			.catch((error) => {
				console.log({ error });
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// const getPagination = (pag) => {
	// 	axios
	// 		.get(`${process.env.REACT_APP_SERVER_URL}/api/books/pagination/${pag}`)
	// 		.then((response) => {
	// 			setListBooks({
	// 				...listBooks,
	// 				list: response.data.list,
	// 				pagination: pag,
	// 			});
	// 		})
	// 		.catch((error) => {
	// 			console.log({ error });
	// 		});
	// };

	return (
		<div className={classLibrary}>
			{listBooks &&
				listBooks.list.map((elemBook) => {
					return (
						<span
							className={`isbn-number ${
								book && elemBook.isbn === book.isbn && 'isbn-active'
							}`}
							key={elemBook._id}
							onClick={() => {
								setBook(elemBook.isbn);
								getBookInfo(elemBook._id);
							}}
						>
							<span>{formatIsbn(elemBook.isbn)}</span>
							<span style={{ marginLeft: '30px' }}>{'>'}</span>
						</span>
					);
				})}
		</div>
	);
}

export default Library;
