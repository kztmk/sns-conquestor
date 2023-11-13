/* eslint-disable react/jsx-key */
import { ReactNode, useMemo, useState } from 'react';

// material-ui
import {
  Box,
  ClickAwayListener,
  Grid,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from '@mui/material';

// third-party
import {
  Cell,
  CellProps,
  Column,
  HeaderGroup,
  Row,
  useBlockLayout,
  useFilters,
  usePagination,
  useResizeColumns,
  useSortBy,
  useTable,
} from 'react-table';

// assets
import { AddSquare, CardSend, Edit, Minus, MoreSquare, Trash } from 'iconsax-react';

// project-imports
import MainCard from '../../components/MainCard';
import ScrollX from '../../components/ScrollX';
import { CSVExport, HeaderSort, TablePagination } from '../../components/third-party/ReactTable';
import { XAccountData } from '../../types/app';

import { dispatch } from '../../store';
import { openSnackbar } from '../../store/reducers/snackbar';

export interface XListTableProps {
  data: XAccountData[];
}
// ==============================|| REACT TABLE ||============================== //

const ReactTable = ({
  columns,
  data,
  top,
}: {
  columns: Column[];
  data: XAccountData[];
  top?: boolean;
}) => {
  const defaultColumn = useMemo(
    () => ({
      minWidth: 150,
      width: 185,
      maxWidth: 400,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    prepareRow,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: {
        pageIndex: 0,
        pageSize: 10,
        sortBy: [
          {
            id: 'userName',
            desc: false,
          },
        ],
      },
    },
    useFilters,
    useSortBy,
    usePagination,
    useBlockLayout,
    useResizeColumns
  );

  const sortingRow = page.slice(0, page.length);
  const sortedData = sortingRow.map((d: Row) => d.original);
  Object.keys(sortedData).forEach(
    (key: string) => sortedData[Number(key)] === undefined && delete sortedData[Number(key)]
  );

  return (
    <Stack>
      {top && (
        <Box sx={{ p: 2 }}>
          <TablePagination
            gotoPage={gotoPage}
            rows={rows}
            setPageSize={setPageSize}
            pageIndex={pageIndex}
            pageSize={pageSize}
          />
        </Box>
      )}

      <Table {...getTableProps()}>
        <TableHead sx={{ borderTopWidth: top ? 2 : 1 }}>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: HeaderGroup) => (
                <TableCell
                  {...column.getHeaderProps([{ className: column.className }])}
                  sx={{ '&:hover::after': { bgcolor: 'primary.main', width: 2 } }}
                >
                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <HeaderSort column={column} sort />
                    {/* column.render('Header') */}
                    <Box
                      {...column.getResizerProps()}
                      sx={{ position: 'absolute', right: -6, opacity: 0, zIndex: 1 }}
                    >
                      <Minus style={{ transform: 'rotate(90deg)' }} />
                    </Box>
                  </Stack>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {sortingRow.map((row: Row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell: Cell) => (
                  <TableCell {...cell.getCellProps([{ className: cell.column.className }])}>
                    {cell.render('Cell')}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}

          {!top && (
            <TableRow>
              <TableCell sx={{ p: 2 }} colSpan={7}>
                <TablePagination
                  gotoPage={gotoPage}
                  rows={rows}
                  setPageSize={setPageSize}
                  pageIndex={pageIndex}
                  pageSize={pageSize}
                />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Stack>
  );
};

// ==============================|| REACT TABLE - PAGINATION ||============================== //
type TooltipTitleProps = {
  loginProvider: string;
  loginProviderId: string;
  loginProviderPassword: string;
  remark: string;
};

const TooltipTitle = ({
  loginProvider,
  loginProviderId,
  loginProviderPassword,
  remark,
}: TooltipTitleProps): ReactNode => {
  return (
    <>
      <span>ログイン方法: {loginProvider}</span>
      <br />
      <span>ログインID: {loginProviderId}</span>
      <br />
      <span>パスワード: {loginProviderPassword}</span>
      <br />
      <span>備考: {remark}</span>
    </>
  );
};

type ActionCellProps = {
  id: string;
  loginProvider: string;
  loginProviderId: string;
  loginProviderPassword: string;
  remark: string;
};

const ActionCell = (props: ActionCellProps) => {
  const { id, loginProvider, loginProviderId, loginProviderPassword, remark } = props;
  const [open, setOpen] = useState(false);
  const [openEditAccount, setOpenEditAccount] = useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const openEditAccountForm = () => {};
  const handleOnClick = (value: string) => {
    setOpenEditAccount(true);
    dispatch(
      openSnackbar({
        open: true,
        message: value,
        variant: 'alert',
        alert: {
          color: 'success',
        },
        close: false,
      })
    );
    if (openEditAccount) {
      openEditAccountForm();
    }
  };

  return (
    <Stack direction="row" justifyContent="start">
      <IconButton onClick={() => handleOnClick(id)}>
        <CardSend />
      </IconButton>
      <IconButton>
        <Edit />
      </IconButton>
      <IconButton>
        <Trash />
      </IconButton>
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <Tooltip
          PopperProps={{
            disablePortal: true,
          }}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={
            <TooltipTitle
              loginProvider={loginProvider}
              loginProviderId={loginProviderId}
              loginProviderPassword={loginProviderPassword}
              remark={remark}
            />
          }
        >
          <IconButton onClick={handleTooltipOpen}>
            <MoreSquare />
          </IconButton>
        </Tooltip>
      </ClickAwayListener>
    </Stack>
  );
};

const XListTable = ({ data = [] }: XListTableProps) => {
  const columns = useMemo(
    () => [
      {
        Header: 'アカウント名',
        accessor: 'userName',
      },
      {
        Header: '表示名',
        accessor: 'displayName',
      },
      {
        Header: 'アクション',
        accessor: 'actions',
        disableSortBy: true,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Cell: ({ row }: CellProps<any>) => ActionCell(row.original as ActionCellProps),
      },
    ],
    []
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <MainCard
          title="Xアカウント一覧"
          content={false}
          secondary={
            <>
              <AddSquare size={28} style={{ color: 'gray', marginTop: 4 }} />
              <CSVExport data={data} filename="x-accouts-list.csv" />
            </>
          }
        >
          <ScrollX>
            <ReactTable columns={columns} data={data} />
          </ScrollX>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default XListTable;
