/** @jsxImportSource theme-ui */

import React, { useState } from 'react';
import { FarmPoolData } from '../../Data/FarmPoolData';
import Image from '../../images/background.png';
import { Link } from 'react-router-dom';

const FarmPool = () => {
  const [all, setAll] = useState(true);
  const [farming, setFarming] = useState(false);
  const [liquidity, setLiquidity] = useState(false);

  const handleClick=(e: React.FormEvent<HTMLInputElement>): void=> {
    if ((e.target as any).innerHTML === 'All') {
      setAll(true);
      setFarming(false);
      setLiquidity(false);
    } else if ((e.target as any).innerHTML === 'Yield Farming') {
      setAll(false);
      setFarming(true);
      setLiquidity(false);
    } else if ((e.target as any).innerHTML === 'Liquidity Providing') {
      setAll(false);
      setFarming(false);
      setLiquidity(true);
    }
  }
  return (
    <section sx={{ variant: 'cards.farmPool.Wrapper' }} >
      <article sx={{ variant: 'cards.farmPool.Container' }} >
        <h1 sx={{ variant: 'cards.farmPool.Title' }}>FARM POOLS</h1>
        <h3 sx={{ variant: 'cards.farmPool.Description' }}>
          Unlock leverage up to <span>2.5x</span>
        </h3>
      </article>
      <article sx={{ variant: 'cards.farmPool.CardContainer' }}>
        <h2 sx={{ variant: 'cards.farmPool.SecondTitle' }}>All active pools</h2>
        <div sx={{ variant: 'cards.farmPool.Flex' }}>
          <button sx={{ variant: 'cards.farmPool.Button' }} className={all ? 'active' : ''} onClick={(event:any)=>handleClick(event)}>
            All
          </button>
          <button sx={{ variant: 'cards.farmPool.Button' }} className={all ? 'active' : ''} onClick={(event:any)=>handleClick(event)}>
            Yield Farming
          </button>
          <button sx={{ variant: 'cards.farmPool.Button' }} className={all ? 'active' : ''} onClick={(event:any)=>handleClick(event)}>
            Liquidity Providing
          </button>
        </div>
        <div sx={{ variant: 'cards.farmPool.InfoContainer' }}>
          <div sx={{ variant: 'cards.farmPool.Header' }}>
            <h2>Pool</h2>
            <h2>Projected APY %</h2>
            <h2 className='center'>Pool APR</h2>
            <div></div>
            <h2>Borrow APR</h2>
            <h2>Max Leverage</h2>
            <div></div>
          </div>
          {FarmPoolData.map((item, index) => {
            return (
              <div sx={{ variant: 'cards.farmPool.Item' }} key={index}>
                <div sx={{ variant: 'cards.farmPool.Item.flexFirst' }}className='flexFirst'>
                  <img sx={{ variant: 'cards.farmPool.Item.image' }} src={item.image1} alt='alt' className='image' />
                  <div sx={{ variant: 'cards.farmPool.Item.block' }} className='block'>
                    <h3 sx={{ variant: 'cards.farmPool.Item.text' }}>{item.firstTitle}</h3>
                    <h2 sx={{ variant: 'cards.farmPool.Item.text' }}>{item.coins}</h2>
                  </div>
                </div>
                <div sx={{ variant: 'cards.farmPool.Item.centerThin' }} className='centerMiddle thin'>{item.percentage}</div>
                <div sx={{ variant: 'cards.farmPool.Item.centerThin' }} className='centerMiddle thin'>
                  {item.percentageDecimal}
                </div>
                <div sx={{ variant: 'cards.farmPool.Item.highFlex' }} className='flex height'>
                  <div sx={{ variant: 'cards.farmPool.Item.block' }} className='block'>
                    {/* <h3>{item.farming}</h3>
                    {console.log(item.farming)} undefined value | there's no key such farming in FarmPoolData */}
                    <h3 sx={{ variant: 'cards.farmPool.Item.text' }}>{item.fees}</h3>
                    <h3 sx={{ variant: 'cards.farmPool.Item.text' }}>{item.alpha}</h3>
                  </div>
                  <div sx={{ variant: 'cards.farmPool.Item.blockLeft' }} className='block left'>
                    <h2 sx={{ variant: 'cards.farmPool.Item.text' }}>{item.decimal}</h2>
                    <h2 sx={{ variant: 'cards.farmPool.Item.text' }}>{item.decimal}</h2>
                    <h2 sx={{ variant: 'cards.farmPool.Item.text' }}>{item.decimal}</h2>
                  </div>
                </div>
                <div sx={{ variant: 'cards.farmPool.Item.flexColumn' }} className='flexColumn'>
                  <div sx={{ variant: 'cards.farmPool.Item.flexMargin' }} className='flex margin'>
                    <img sx={{ variant: 'cards.farmPool.Item' }} src={item.image2} alt='eth' />
                    <h2 sx={{ variant: 'cards.farmPool.Item.text' }}>{item.percentageDecimal}</h2>
                  </div>
                  <div sx={{ variant: 'cards.farmPool.Item.flex' }} className='flex'>
                    <img sx={{ variant: 'cards.farmPool.Item' }} src={item.image3} alt='eth' />
                    <h2 sx={{ variant: 'cards.farmPool.Item.text' }}>{item.percentageDecimal}</h2>
                  </div>
                </div>
                <div sx={{ variant: 'cards.farmPool.Item.centerLarge' }} className='centerMiddle large'>{item.times}</div>
                <div sx={{ variant: 'cards.farmPool.Item.end' }} className='end'>
                  <Link to='/farmpool/farm'>FARM</Link>
                </div>
              </div>
            );
          })}
        </div>
      </article>
      <img sx={{ variant: 'cards.farmPool.Background' }} src={Image} alt='Background Logo' />
    </section>
  );
};

export default FarmPool;
