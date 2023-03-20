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
console.log(listBooks);
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
	const getPagination = (pag) => {
		axios
			.get(`${process.env.REACT_APP_SERVER_URL}/api/books/pagination/${pag}`)
			.then((response) => {
				setListBooks({
					...listBooks,
					list: response.data.list,
					pagination: pag,
				});
			})
			.catch((error) => {
				console.log({ error });
			});
	};
	let bookInitial = '';
	let bookFinal = '';
	let pagSpot1 = '';
	let pagSpot2 = '';
	let pagSpot3 = '';
	let pagSpot4 = '';

	if (listBooks) {
		bookInitial = (listBooks.pagination - 1) * 10 + 1;
		bookFinal =
			listBooks.pagination === listBooks.totalPag
				? (listBooks.pagination - 1) * 10 + (listBooks.total % 10)
				: (listBooks.pagination - 1) * 10 + 10;

		pagSpot1 =
			listBooks.pagination <= 2
				? 1
				: listBooks.pagination >= listBooks.totalPag - 1 ? 
				listBooks.totalPag - 2
				: listBooks.pagination - 1;
		pagSpot2 =
			listBooks.totalPag > 1 &&
			(listBooks.pagination <= 2
				? 2
				: listBooks.pagination >= listBooks.totalPag - 1
				? listBooks.totalPag -1
				: listBooks.pagination);
		pagSpot3 =
			listBooks.totalPag > 2 &&
			(listBooks.pagination <= 2
				? 3
				: listBooks.pagination >= listBooks.totalPag - 1
				? listBooks.totalPag
				: listBooks.pagination + 1);
		pagSpot4 =
			pagSpot3 !== listBooks.totalPag ? `...${listBooks.totalPag}` : '';
	}

	return (
		<div className={classLibrary}>
			<div>
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
			{listBooks && (
				<div className='pagination-container'>
					<div>
						<span>{`Showing from ${bookInitial} to ${bookFinal} of ${listBooks.total} books`}</span>
					</div>
					<div className='pagination'>
						<span
							className={
								pagSpot1 === listBooks.pagination ? 'pagination-active' : ''
							}
							onClick={() => {
								getPagination(pagSpot1);
							}}
						>
							{pagSpot1}
						</span>
						<span
							className={
								pagSpot2 === listBooks.pagination ? 'pagination-active' : ''
							}
							onClick={() => {
								getPagination(pagSpot2);
							}}
						>
							{pagSpot2}
						</span>
						<span
							className={
								pagSpot3 === listBooks.pagination ? 'pagination-active' : ''
							}
							onClick={() => {
								getPagination(pagSpot3);
							}}
						>
							{pagSpot3}
						</span>
						{listBooks.totalPag > 3 && <span>{pagSpot4}</span>}
					</div>
				</div>
			)}
		</div>
	);
}

export default Library;
