import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ItemsApiType } from '../redux/reducers/books';
import { CircularIndeterminate } from './Utils';

type MainType = {
  items: ItemsApiType[];
  isLoading: boolean;
};

//Отрисовка главного меню с книгами
export const Main = (props: MainType) => {
  const [visible, setVisible] = useState(4);

  const showeMoreItems = () => {
    setVisible((prevValue) => prevValue + 30);
  };
  return (
    <div className="page-light">
      <div className="wrapper">
        <div className="content-items">
          <p>Количество книг: {props.items.length} </p>

          {props.isLoading ? <CircularIndeterminate /> : null}
          {props.items &&
            props.items.slice(0, visible).map((item: ItemsApiType) => {
              return (
                <Link key={item.id} to={`/books/${item.id}`}>
                  <div onClick={() => console.log(item.id)} className="book-block">
                    <img
                      className="book-block-image"
                      src={item.volumeInfo.imageLinks.thumbnail || ''}
                      alt="Книга"
                    />

                    <div className="book-block-category">
                      <u>{item.volumeInfo.categories}</u>
                    </div>
                    <div className="book-block-name">
                      <b>{item.volumeInfo.title}</b>
                    </div>
                    <div className="book-block-author">{item.volumeInfo.authors}</div>
                  </div>
                </Link>
              );
            })}
        </div>
        <div className="button">
          <button onClick={showeMoreItems}>Load more</button>
        </div>
      </div>
    </div>
  );
};
