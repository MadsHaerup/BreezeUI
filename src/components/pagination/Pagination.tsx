import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { defaultBgTextScheme } from '../../helper/colorScheme';
interface Props {
	totalPages: number;
	initialPage?: number;
	tabCount?: number;
	onPageChange?: () => void;
}
const Pagination: React.FC<Props> = ({ totalPages, initialPage = 1, tabCount = 5, onPageChange }) => {
	const { currentTheme } = useTheme();

	const colorScheme = currentTheme?.components?.pagination?.styleSheet
		? currentTheme?.components?.pagination?.styleSheet?.style
		: defaultBgTextScheme;

	const activeColor = currentTheme?.components?.pagination?.styleSheet
		? currentTheme?.components?.pagination?.styleSheet?.active
		: ' font-bold';

	const [activePage, setActivePage] = useState(initialPage);
	const pages: number[] = [];
	// Determine the starting and ending page numbers for the page tab links
	let startPage: number, endPage: number;
	if (totalPages <= tabCount) {
		// Less than or equal to tabCount total pages so show all
		startPage = 1;
		endPage = totalPages;
	} else {
		// More than tabCount total pages so calculate start and end pages
		if (activePage <= Math.ceil(tabCount / 2)) {
			startPage = 1;
			endPage = tabCount;
		} else if (activePage + Math.floor(tabCount / 2) >= totalPages) {
			startPage = totalPages - (tabCount - 1);
			endPage = totalPages;
		} else {
			startPage = activePage - Math.floor(tabCount / 2);
			endPage = activePage + Math.ceil(tabCount / 2) - 1;
		}
	}
	// Add page numbers to array to map through later
	for (let i = startPage; i <= endPage; i++) {
		pages.push(i);
	}
	const handlePageChange = (page: number) => {
		if (onPageChange) onPageChange();
		if (activePage === page) {
			return;
		}
		setActivePage(page);
		// Update the pages array to reflect the new start and end page numbers
		pages.splice(0, pages.length);
		for (let i = startPage; i <= endPage; i++) {
			pages.push(i);
		}
	};
	// Determine if previous/next buttons should be disabled
	const prevDisabled = activePage === 1;
	const nextDisabled = activePage === totalPages;
	return (
		<div className="flex justify-center text-sm">
			<div className="flex mt-10">
				<button
					onClick={() => handlePageChange(1)}
					className={`px-4 py-2 border rounded-l-md border-r-0 ${colorScheme}  ${
						prevDisabled ? 'cursor-not-allowed opacity-50' : ''
					}`}
					disabled={prevDisabled}
				>
					&#171;
				</button>
				<button
					onClick={() => handlePageChange(activePage - 1)}
					className={`px-4 py-2  border-t border-b ${colorScheme}  ${
						prevDisabled ? 'cursor-not-allowed opacity-50' : ''
					}`}
					disabled={prevDisabled}
				>
					&#8249;
				</button>
				<div className="flex">
					{pages.map(page => (
						<button
							key={page}
							onClick={() => handlePageChange(page)}
							className={` border-t border-b ${colorScheme}  min-w-[48px] max-w-[64px] text-sm ${
								page === activePage ? `${activeColor}` : ''
							}`}
						>
							{page}
						</button>
					))}
				</div>

				<button
					onClick={() => handlePageChange(activePage + 1)}
					className={`px-4 py-2 border-t border-b ${colorScheme}  ${
						nextDisabled ? 'cursor-not-allowed opacity-50' : ''
					}`}
					disabled={nextDisabled}
				>
					&#8250;
				</button>
				<button
					onClick={() => handlePageChange(totalPages)}
					className={`px-4 py-2 border rounded-r-md border-l-0 ${colorScheme}  ${
						nextDisabled ? 'cursor-not-allowed opacity-50' : ''
					}`}
					disabled={nextDisabled}
				>
					&#187;
				</button>
			</div>
		</div>
	);
};
export default Pagination;
