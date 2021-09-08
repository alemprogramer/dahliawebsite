/** @jsxImportSource theme-ui */
import React from 'react';
import { EarnData } from '../../Data/EarnData';
import { Link } from 'react-router-dom';
import Image from '../../images/background.png';

const Earn = () => {
  return (
    <section sx={{ variant: 'cards.earn.Wrapper' }}>
      <article sx={{ variant: 'cards.withdrawn.Container' }}>
        <h1 sx={{ variant: 'cards.withdrawn.Title' }}>Earn</h1>
        <h3 sx={{ variant: 'cards.withdrawn.Description' }}>Lend assets for the highest yield.</h3>
      </article>
      <article sx={{ variant: 'cards.withdrawn.CardContainer' }}>
        <h2 sx={{ variant: 'cards.withdrawn.SecondTitle' }}>All active pools</h2>
        <div sx={{ variant: 'cards.withdrawn.Flex' }}>
          <button sx={{ variant: 'cards.withdrawn.Button' }} className='active'>All</button>
        </div>
        <div sx={{ variant: 'cards.withdrawn.InfoContainer' }}>
          <div sx={{ variant: 'cards.withdrawn.Header' }}>
            <h2 sx={{ variant: 'cards.withdrawn.Header.h2' }}>Pool</h2>
            <h2 sx={{ variant: 'cards.withdrawn.Header.centerH2' }} className='center'>Projected APY %</h2>
            <h2 sx={{ variant: 'cards.withdrawn.Header.centerH2' }} className='center'>Total Supply</h2>
            <h2 sx={{ variant: 'cards.withdrawn.Header.centerH2' }} className='center'>Total Borrow</h2>
            <h2 sx={{ variant: 'cards.withdrawn.Header.centerH2' }} className='center'>Utilization</h2>
            <h2 sx={{ variant: 'cards.withdrawn.Header.centerH2' }} className='center'>Balance</h2>
            <div></div>
          </div>
          {EarnData.map((item, index) => {
            return (
              <div sx={{ variant: 'cards.withdrawn.Item' }}  key={index}>
                <div sx={{ variant: 'cards.withdrawn.Item.flexFirst' }} className='flexFirst'>
                  <img sx={{ variant: 'cards.withdrawn.Item.image' }} src={item.image1} alt='eth' className='image' />
                  <h2 sx={{ variant: 'cards.withdrawn.Item.text' }}>{item.firstTitle}</h2>
                </div>
                <div sx={{ variant: 'cards.withdrawn.Item.centerThin' }} className='centerMiddle thin'>{item.apy}</div>
                <div sx={{ variant: 'cards.withdrawn.Item.centerThin' }} className='centerMiddle thin'>{item.supply}</div>
                <div sx={{ variant: 'cards.withdrawn.Item.centerThin' }} className='centerMiddle thin'>{item.borrow}</div>
                <div sx={{ variant: 'cards.withdrawn.Item.centerThin' }} className='centerMiddle thin'>{item.utilization}</div>
                <div sx={{ variant: 'cards.withdrawn.Item.centerThin' }} className='centerMiddle thin'>{item.balance}</div>
                <div sx={{ variant: 'cards.withdrawn.Item.end' }} className='end'>
                  <Link to='deposit'>Supply</Link>
                  <Link to='withdrawn'>Withdrawn</Link>
                </div>
              </div>
            );
          })}
        </div>
      </article>
      <img sx={{ variant: 'cards.withdrawn.Background' }} src={Image} alt='Background Logo' />
    </section>
  );
};

export default Earn;
