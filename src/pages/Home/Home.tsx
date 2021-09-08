/** @jsxImportSource theme-ui */
import React from 'react';
import { Link } from 'react-router-dom';
import { cardInfoData } from '../../Data/HomeData';
import {
  InfoCardContainer,
  Image,
  CardHeader,
  CardInfo,
} from './HomeStyles';

const Home = () => {
  return (
    <section sx={{
      variant: 'cards.home.wrappers',
    }}>
      <article sx={{
        variant: 'cards.home.container',
      }}>
        <div sx={{ variant: 'cards.home.TextContainer'}} >
          <h1 sx={{ variant: 'cards.home.Header'}} >Leveraged yield farming, on Celo.</h1>
          <Link sx={{
            variant: 'cards.home.btns'
          }} to='/farmpool'>Launch App</Link>
        </div>
        <div sx={{ variant: 'cards.home.CardContainer'}} >
          <div sx={{ variant: 'cards.home.Card' }} >
            <div sx={{ variant: 'cards.home.ContainerContentCard' }} >
              <h2 sx={{ variant:'cards.home.Title'}}>Total Value Locked</h2>
              <h3 sx={{ variant: 'cards.home.Amount' }}>53,282,049 USD</h3>
            </div>
          </div>
        </div>
      </article>
      <article sx={{
        variant: 'cards.home.container',
      }}>
        {cardInfoData.map((item, index) => {
          return (
            <div sx={{ variant: 'cards.home.InfoCard' }} key={index}>
              <InfoCardContainer>
                <div>
                  <Image src={item.icon} alt={item.title} />
                </div>
                <div>
                  <CardHeader>{item.title}</CardHeader>
                  <CardInfo>{item.apy}</CardInfo>
                </div>
              </InfoCardContainer>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Home;
