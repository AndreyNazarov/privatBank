import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect, lazy, Suspense } from 'react';
import BackButton from './Button';
import ls from 'local-storage';
const useStyles = makeStyles({
  table: {
    margin: 0,
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
    marginLeft: 80,
    marginTop: 30,
    backgroundColor: '#d8fcd2',
  },
});

export default function TransactionHistory(params) {
  const getDataSale = ls.get('amountSale');
  const getDataBuy = ls.get('amountBuy');
  const [buyValue, setBuyValue] = useState([]);
  const [saleValue, setSaleValue] = useState([]);
  const [parse, setParse] = useState([]);

  const date = new Date();
  let test = [];
  test.push(parse, saleValue);

  console.log(test);
  useEffect(() => {
    const getBuyFromStorage = JSON.parse(localStorage.getItem('amountBuy'));
    const getSaleFromStorage = JSON.parse(localStorage.getItem('amountSale'));

    setParse(getBuyFromStorage);
    setSaleValue(getSaleFromStorage);
  }, [setParse, setSaleValue]);

  const buyData = () => {
    const newData = {
      id: uuidv4(),
      buy: parse.amountBuy,
      sale: parse.exchangeBuy,
      date: date,
    };
    setBuyValue(state => [newData, ...state]);
  };
  const iD = uuidv4();
  console.log('getBuyFromStorage', parse);

  const classes = useStyles();

  return (
    <>
      <BackButton />
      <TableContainer component={Paper} className={classes.root}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Transaction date</TableCell>
              <TableCell align="right">Sale</TableCell>
              <TableCell align="right">Buy</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {test.map(({ amountBuy, amount, exchangeBuy, exchange, id }) => (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  {date.toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  {exchangeBuy}
                  {exchange}
                </TableCell>
                <TableCell align="right">
                  {amountBuy}
                  {amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>{' '}
    </>
  );
}
