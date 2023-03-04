import { useAppDispatch, useAppSelector } from '@/hooks';
import { type Person } from '@/interfaces';
import { addFavorite, removeFavorite, selectFavorites } from '@/redux/states';
import { Checkbox, Container } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { type ReactNode } from 'react';

interface Props {
  peopleToRender: Person[];
  actionIcon: { icon?: ReactNode; checkedIcon?: ReactNode };
}

const PersonsTable = (props: Props): JSX.Element => {
  const { peopleToRender, actionIcon } = props;

  const disptach = useAppDispatch();

  const favedPersonsState = useAppSelector(selectFavorites);

  const isFav = (person: Person): boolean => {
    const findedFavedPerson = favedPersonsState.find(
      favedPerson => favedPerson.id === person.id
    );

    if (findedFavedPerson !== undefined) return true;
    return false;
  };

  const handleCheckboxChange = (checkedPerson: Person): void => {
    if (!isFav(checkedPerson)) {
      disptach(addFavorite(checkedPerson));
    } else {
      disptach(removeFavorite(checkedPerson));
    }
  };

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderCell: params => <>{params.value}</>,
    },
    {
      field: 'category',
      headerName: 'Category',
      flex: 1,
      minWidth: 150,
      renderCell: params => <>{params.value}</>,
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      renderCell: params => <>{params.value}</>,
    },
    {
      field: 'levelOfHappiness',
      headerName: 'Happiness',
      flex: 1,
      renderCell: params => <>{params.value}</>,
    },
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      headerName: '',
      align: 'center',
      width: 50,
      renderCell: params => {
        return (
          <Checkbox
            checked={isFav(params.row)}
            {...actionIcon}
            onChange={() => {
              handleCheckboxChange(params.row);
            }}
          />
        );
      },
    },
  ];

  const PAGE_SIZE: number = 5;

  return (
    <Container>
      <DataGrid
        rows={peopleToRender}
        columns={columns}
        disableColumnSelector
        disableSelectionOnClick
        autoHeight
        pageSize={PAGE_SIZE} // the default amount of displayed rows
        rowsPerPageOptions={[PAGE_SIZE]} // The displayed options of rows amount that user can toggle
        getRowId={(row: Person) => row.id}
        showColumnRightBorder
        showCellRightBorder
      />
    </Container>
  );
};

export default PersonsTable;
