import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ItemsApiType } from '../redux/reducers/books';
import { BasicButtons, CircularIndeterminate } from './Utils';

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
          <p>Found:{props.items.length} results </p>

          {props.isLoading ? <CircularIndeterminate /> : null}
          {props.items &&
            props.items.slice(0, visible).map((item: ItemsApiType) => {
              if (typeof item.volumeInfo.imageLinks === 'undefined') {
                return '';
              }
              return (
                <Link key={item.id} to={`/books/${item.id}`}>
                  <div onClick={() => console.log(item.id)} className="book-block">
                    {}
                    <img
                      className="book-block-image"
                      src={item.volumeInfo.imageLinks.thumbnail}
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
          <BasicButtons showeMoreItems={showeMoreItems} />
        </div>
      </div>
    </div>
  );
};
