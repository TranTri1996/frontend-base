import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import faker from 'faker';

const data = new Array(1000).fill().map(
  (value, index) => ({ 
    id: index,
    title: faker.lorem.words(5),
    body: faker.lorem.sentences(4)
  }));
const numOfItemPerPage = 10;

const PaginateTable = () => {
  
  const [pagination, setPagination] = useState({
    data: data,
    offset: 0,
    numOfItemPerPage: 10,
    pageCount: data.length / numOfItemPerPage,
    currentData: data.slice(0, numOfItemPerPage)
  });

  const handlePageClick = (event) => {
    const selected = event.selected;
    setPagination((prevState) => {
      const newOffset = selected * pagination.numOfItemPerPage;
      return {
        ...prevState,
        offset: newOffset,
        currentData: data.slice(newOffset, newOffset + numOfItemPerPage)
      };
    });
  };

  return (
    <div>
      {pagination.currentData && pagination.currentData.map(item => (
        <div key={item.id} className="post">
          <h3>{item.title} - {item.id}</h3>
          <p>{item.body}</p>
        </div>
      ))
      }
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pagination.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      /> 
    </div>
  );
};

export default PaginateTable;