import React from 'react';
import i18next from 'i18next';
import CachedIcon from '@mui/icons-material/Cached';
import {
  Card, CardContent, CardHeader, CardMedia, Grid, Typography,
} from '@mui/material';

import { useQueryBeer } from '@/hooks/useQueryBeer';

import { ETranslationKeys } from '@/locales/types';

import { ContainerLoadingStyled, ContainerMediaStyled, HomeWrapperStyled } from './styled';

const HomePage = () => {
  const { data, isLoading } = useQueryBeer();

  return (
    <HomeWrapperStyled>
      <Typography component='h2' variant='h1'>
        {i18next.t(ETranslationKeys.MAIN_TITLE)}
      </Typography>

      <Grid gap='auto' spacing={2} container>

        {data.map(el => (
          <Grid key={el.id} md={4} sx={{ justifyContent: 'center', display: 'flex' }} xs={1} item>
            <Card sx={{ width: '100%' }}>
              <CardHeader
                subheader={el.first_brewed}
                title={el.name}
              />

              <ContainerMediaStyled>

                <CardMedia
                  alt={el.name}
                  component='img'
                  height='100%'
                  image={el.image_url}
                  width='100%'
                />
              </ContainerMediaStyled>

              <CardContent>
                <Typography color='text.secondary' variant='body2'>
                  {el.brewers_tips}
                  <br />
                  <br />
                  by
                  {' '}
                  {el.contributed_by}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

      </Grid>

      {isLoading
      && <ContainerLoadingStyled>
        <CachedIcon color='primary' />
      </ContainerLoadingStyled>}

    </HomeWrapperStyled>
  );
};

export default HomePage;
