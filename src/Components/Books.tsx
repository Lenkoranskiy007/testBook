import React from 'react';
import { ItemsApiType } from '../redux/reducers/books';
import Book from '../assets/ph_001.jpeg';
import { useParams } from 'react-router-dom';

type BooksType = {
  items: ItemsApiType[];
};

//Компонента Books , которая отрисовывается при Роуте на детальну страницу книги
export const Books = (props: BooksType) => {
  //@ts-ignore
  const { id } = useParams();
  console.log(id);

  return (
    <div className="page-light">
      <div className="wrapper">
        <div className="content-book">
          {props.items
            .filter((item) => item.id === id)
            .map((item, index) => {
              return (
                <>
                  <div className="content-book-item">
                    <img src={item.volumeInfo.imageLinks.thumbnail} alt="Книга" />
                  </div>
                  <div className="content-book-description">
                    <div className="content-book-description-category">
                      {item.volumeInfo.categories}
                    </div>
                    <div className="content-book-description-name">{item.volumeInfo.title}</div>
                    <div className="content-book-description-author">
                      <u>{item.volumeInfo.authors}</u>
                    </div>
                    <div className="content-book-description-info">
                      <p> {item.searchInfo.textSnippet}</p>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};
