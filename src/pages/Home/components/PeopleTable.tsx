import { PersonsTable } from '@/components';
import { useAppSelector } from '@/hooks';
import { selectPeople } from '@/redux/states';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const PeopleTable = (): JSX.Element => {
  const peopleState = useAppSelector(selectPeople);
  return (
    <PersonsTable
      peopleToRender={peopleState}
      actionIcon={{
        icon: <StarBorderIcon color='warning' />,
        checkedIcon: <StarIcon color='warning' />,
      }}
    />
  );
};

export default PeopleTable;
