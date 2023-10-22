/* eslint-disable react/jsx-key */
import { useMemo } from 'react';

// material-ui
import { Box, Grid, Stack, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

// third-party
import {
  Cell,
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
import { Minus } from 'iconsax-react';

// project-imports
import MainCard from '../../components/MainCard';
import ScrollX from '../../components/ScrollX';
import { CSVExport, HeaderSort, TablePagination } from '../../components/third-party/ReactTable';
import { XAccountData } from '../../types/app';

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
      minWidth: 120,
      width: 155,
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

const XListTable = (props: XListTableProps) => {
  const columns = useMemo(
    () => [
      {
        Header: 'No.',
        accessor: 'id',
      },
      {
        Header: 'アカウント名',
        accessor: 'userName',
      },
      {
        Header: 'アカウントID',
        accessor: 'accountId',
      },
      {
        Header: 'ログイン方法',
        accessor: 'loginProvider',
      },
      {
        Header: 'ログインID',
        accessor: 'loginProviderId',
      },
      {
        Header: 'パスワード',
        accessor: 'loginProviderPassword',
      },
    ],
    []
  );

  const { data } = props;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <MainCard
          title="Xアカウント一覧"
          content={false}
          secondary={<CSVExport data={data} filename="x-accouts-list.csv" />}
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
