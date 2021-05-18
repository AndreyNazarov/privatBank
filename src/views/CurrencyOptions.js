import React from 'react';
import { NavLink, Route, useRouteMatch, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BackButton from './Button';
import s from '../styles/Currency.module.css';

export default function ImgMediaCard({
  currencyOption,
  getCurrencyCcy,
  getCurrencyBaseCcy,
}) {
  let history = useHistory();

  const goToCurrencyExchangePage = id => {
    history.push(`/options/${id.toLowerCase()}`, id);
  };

  return (
    <>
      <BackButton />
      <div className={s.container}>
        {currencyOption &&
          currencyOption.map(({ ccy, base_ccy, buy, sale }) => (
            <Card key={ccy} className={s.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {ccy} - {base_ccy}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="h2"
                  >
                    Buy - {buy}
                    <hr />
                    Sale - {sale}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="medium"
                  color="primary"
                  onClick={() => {
                    return goToCurrencyExchangePage(ccy);
                  }}
                >
                  Further
                </Button>
              </CardActions>
            </Card>
          ))}
      </div>
    </>
  );
}
