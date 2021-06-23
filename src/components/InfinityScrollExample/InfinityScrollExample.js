import React, { useState } from 'react';
import faker from 'faker';
import InfiniteScroll from 'react-infinite-scroll-component';
import './InfinityScrollExample.scss';

const data = new Array(1000).fill().map(
  (value, index) => ({ 
    id: index,
    title: faker.lorem.words(5),
    body: faker.lorem.sentences(4)
  })
  );

const InfinityScrollExample = () => {
  const [hasMore, setHasMore] = useState(true);
  const [count, setCount] = useState({pre: 0, next: 10});
  const [currentList, setCurrentList] = useState(data.slice(count.pre, count.next));

  const getNextData = () => {
    if (currentList.dataLength === data.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrentList(currentList.concat(data.slice(count.pre + 10, count.next + 10)));
      setCount((preState) => ({pre: preState.pre + 10, next: preState.next + 10}));
    }, 1000);
  };

  return (
    <InfiniteScroll
      dataLength={currentList.length}
      next={getNextData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      <div>
        {currentList.map(((item) => (
          <div key={item.id} className="post">
            <h3>{item.title} - {item.id}</h3>
            <p>{item.body}</p>
          </div>
        )))}
      </div>
    </InfiniteScroll>
  );
};

export default InfinityScrollExample;