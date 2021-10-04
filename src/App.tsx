import React, { ChangeEvent, useState } from 'react';
import './index.scss';
import { fetchItemsTC, getItemsTC } from './redux/reducers/books';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from './redux/store';
import { Main } from './Components/Main';
import { Header } from './Components/Header';
import { Books } from './Components/Books';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [search, setSearch] = useState(''); //Состояние для инпута
  const [selectCategories, setSelectCategories] = useState('All'); //Состояние для категорий
  const [sortCategories, setSortCategories] = useState('relevance'); //Состояние для сортировки
  const dispatch = useDispatch();
  const items = useSelector((state: AppStateType) => state.booksReducer.items); // Массив с Книгами из Redux
  const isLoading = useSelector((state: AppStateType) => state.booksReducer.isLoaded); // Значение для loader  из Redux

  //Птрисовка всех книг на главной  странице
  React.useEffect(() => {
    dispatch(getItemsTC());
  }, []);

  //При нажатии на button, вызываю thunk,передавая ей параметры из локального стейта.
  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(fetchItemsTC(search, selectCategories, sortCategories));
  };

  //Прослушиватель для input
  const setSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let text = e.currentTarget.value;
    setSearch(text);
  };
  //Отрисовка всех наших дочерних компонентов
  return (
    <>
      <Header
        setSelectCategories={setSelectCategories}
        selectCategories={selectCategories}
        search={search}
        setSearch={setSearchHandler}
        sortCategories={sortCategories}
        setSortCategories={setSortCategories}
        handleSubmit={handleSubmit}
      />
      <Switch>
        <Route exact path="/" render={() => <Main isLoading={isLoading} items={items} />} />
        <Route exact path="/books/:id" render={() => <Books items={items} />} />
        <Route
          exact
          path="*"
          render={() => <h1 style={{ textAlign: 'center' }}>404: страница недоступна</h1>}
        />
      </Switch>
    </>
  );
}

export default App;
