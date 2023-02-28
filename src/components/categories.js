import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const category = useSelector((store) => store.category);
  const dispatch = useDispatch();
  const status = <p>{category.categories}</p>;
  return (
    <div>
      <button className="categoryButton" type="button" onClick={() => dispatch(checkStatus())}>Check Status</button>
      {status}
    </div>
  );
};

export default Categories;
