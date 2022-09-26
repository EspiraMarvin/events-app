import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from '../hooks/usePagination'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid'

interface paginationProps {
    onPageChange: any
    totalCount: number       
    siblingCount?: number | any
    currentPage: number
    pageSize: number
    className: string
}

const Pagination = ({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
}: paginationProps) => {


  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage === lastPage) return
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage === 1) return
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
      <li
        className={`cursor-pointer`}

        onClick={onPrevious}
      >
        <ChevronLeftIcon className={`arrowBtns  ${currentPage === 1 && 'disable cursor-default text-gray-200 dark:hover:text-gray-900'}`} />
      </li>
      {paginationRange.map((pageNumber: any, index: number) => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        return (
          <li
            key={index}
            className={`pagination-item
                ${pageNumber === currentPage && 'text-red-500 hover:text-red-500 dark:text-red-500 hover:bg-gray-200 hover:dark:bg-gray-900' }
              `}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames('cursor-pointer')}
        onClick={onNext}
      >
        <ChevronRightIcon className={`arrowBtns ${currentPage === lastPage && 'disable cursor-default text-gray-200 dark:hover:text-gray-900'}`} />

      </li>
    </ul>
  );
};

export default Pagination;
