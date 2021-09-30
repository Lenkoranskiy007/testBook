import React from 'react';
import './index.scss';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

const bookItems = [
  {
    id: 1,
    image:
      'https://img2.labirint.ru/rcimg/d7f5ec9fd958d64b445e7d992ce05ecc/960x540/books75/748362/ph_001.jpg?1588224343',
    category: 'Computers',
    name: 'Node Js',
    author: 'Farid',
  },
  {
    id: 2,
    image:
      'https://img2.labirint.ru/rcimg/d7f5ec9fd958d64b445e7d992ce05ecc/960x540/books75/748362/ph_001.jpg?1588224343',
    category: 'Computers',
    name: ' Js',
    author: 'Maga',
  },
  {
    id: 3,
    image:
      'https://img2.labirint.ru/rcimg/d7f5ec9fd958d64b445e7d992ce05ecc/960x540/books75/748362/ph_001.jpg?1588224343',
    category: 'Computers',
    name: 'React',
    author: 'Renat',
  },
  {
    id: 3,
    image:
      'https://img2.labirint.ru/rcimg/d7f5ec9fd958d64b445e7d992ce05ecc/960x540/books75/748362/ph_001.jpg?1588224343',
    category: 'Computers',
    name: 'React',
    author: 'Lala',
  },
];

//Отрисовка главного меню с книгами
const Main = () => {
  return (
    <div className="page-light">
      <div className="wrapper">
        <div className="content-items">
          {bookItems.map((item) => {
            return (
              <div className="book-block">
                <img className="book-block-image" src={item.image} alt="Книга" />
                <div className="book-block-category">{item.category}</div>
                <div className="book-block-name">{item.name}</div>
                <div className="book-block-author">{item.author}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

//Отрисовка шапки нашей страницы  страницы
const Header = () => {
  return (
    <div className="page-dark">
      <div className="wrapper">
        <header className="header">
          <div className="nav">
            <div className="nav-title">
              <h1>Search for books</h1>
            </div>
            <div className="nav-search">
              <CustomizedInputBase />
            </div>
            <div className="nav-sort">
              <div className="nav-sort-category">
                <p> Categories</p>
                <select>
                  <option>All</option>
                  <option>New</option>
                </select>
              </div>
              <div className="nav-sort-sorting">
                <p> Sorting by</p>
                <select>
                  <option>Relevance</option>
                  <option>New</option>
                </select>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

//Компонент TextField
export function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search book"
        inputProps={{ 'aria-label': 'search google maps' }}
      />

      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default App;
