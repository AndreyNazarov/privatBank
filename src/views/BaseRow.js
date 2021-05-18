import { React, Suspense, lazy } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink, Route, useRouteMatch, useHistory } from 'react-router-dom';
// const CurrencyPage = lazy(() => import('./CurrencyPage'));
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
});

export default function ImgMediaCard({
  currencyOption,
  getCurrencyCcy,
  getCurrencyBaseCcy,
}) {
  let history = useHistory();
  console.log('getCurrencyCcy', getCurrencyCcy[0]);
  const firstObj = currencyOption[0];
  const getCurrencyBuy = firstObj && firstObj.buy.slice(0, 5);
  const getCurrencySale = firstObj && firstObj.sale.slice(0, 5);

  const classes = useStyles();
  const goToCurrencyExchangePage = id => {
    history.push(`/options/${id.toLowerCase()}`, id);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {getCurrencyCcy[0]} - {getCurrencyBaseCcy[0]}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            Buy - {getCurrencyBuy}
            <hr />
            Sale - {getCurrencySale}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="medium"
          color="primary"
          onClick={() => history.push('/options')}
        >
          More options
        </Button>
        <Button
          size="medium"
          color="primary"
          onClick={() => {
            return (
              getCurrencyCcy && goToCurrencyExchangePage(getCurrencyCcy[0])
            );
          }}
        >
          Further
        </Button>
      </CardActions>
    </Card>
  );
}
