import { PEOPLE } from '@/data/people';
import { useAppDispatch } from '@/hooks';
import { addPeople } from '@/redux/states';
import { useEffect } from 'react';
import PeopleTable from './components/PeopleTable';

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addPeople(PEOPLE));
  }, []);

  return <PeopleTable />;
};

export default Home;
