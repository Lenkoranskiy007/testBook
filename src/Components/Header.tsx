import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import { CustomizedInputBase } from './Utils';

type HeaderType = {
  setSelectCategories: Dispatch<SetStateAction<string>>;
  selectCategories: string;
  search: string;
  setSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  sortCategories: string;
  setSortCategories: Dispatch<SetStateAction<string>>;
  handleSubmit: any;
};

//Отрисовка шапки нашей страницы
export const Header = (props: HeaderType) => {
  return (
    <div className="page-dark">
      <div className="wrapper">
        <header className="header">
          <div className="nav">
            <div className="nav-title">
              <NavLink to="/">
                <h1>Search for books</h1>
              </NavLink>
            </div>
            <div className="nav-search">
              <CustomizedInputBase
                handleSubmit={props.handleSubmit}
                search={props.search}
                setSearch={props.setSearch}
              />
            </div>
            <div className="nav-sort">
              <div className="nav-sort-category">
                <form action="">
                  <p> Categories</p>
                  <select
                    value={props.selectCategories}
                    onChange={(e) => props.setSelectCategories(e.target.value)}>
                    <option>All</option>
                    <option>Art</option>
                    <option>Computers</option>
                    <option>Biography</option>
                    <option>History</option>
                    <option>Medical</option>
                    <option>Poetry</option>
                  </select>
                </form>
              </div>
              <div className="nav-sort-sorting">
                <form action="">
                  <p> Sorting by</p>
                  <select
                    value={props.sortCategories}
                    onChange={(e) => props.setSortCategories(e.target.value)}>
                    <option>relevance</option>
                    <option>newest</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
