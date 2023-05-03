import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAll } from 'redux/operations';
import { Phonebook } from './Phonebook/Phonebook';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <div>
      <Phonebook />
    </div>
  );
};
