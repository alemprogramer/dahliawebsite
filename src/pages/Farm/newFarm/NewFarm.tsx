import React from "react";
import { atom, useSetRecoilState, useRecoilState } from 'recoil';
import { getToken, Token } from "src/utils/token";
import { useParams } from "react-router-dom";
import { Supply } from "src/pages/Farm/newFarm/supply";
import { Borrow } from "src/pages/Farm/newFarm/borrow";
import { Confirm } from "src/pages/Farm/newFarm/confirm";

export enum farmPage {
  Supply, 
  Borrow, 
  Confirm,
}

export const farmPageState = atom({
  key: 'farmPageState',
  default: farmPage.Supply
})

export interface poolProps {
    name: string;
    wrapper: string;
    spell: string;
    lp: string;
    tokens: Token[];
}

const emptyPoolState : poolProps = {
    name: "",
    wrapper: "",
    spell: "",
    lp: "",
    tokens: [],
}

export const poolState = atom({
  key: 'poolState',
  default: emptyPoolState
})

export const NewFarm: React.FC = () => {
  const { name, wrapper, spell, lp, tokens } = useParams<{ name: string, wrapper: string, spell: string, lp:string, tokens:string}>();
  const setPool = useSetRecoilState(poolState); 
  const set: poolProps  = {
      name: name,
      wrapper: wrapper,
      spell: spell,
      lp: lp,
      tokens: (tokens.split(',').map((x) => getToken(x)!)),
  }
  setPool(set);  

  const [page] = useRecoilState(farmPageState);

  return (
    <div>
      {
        page === farmPage.Supply ? (
            <Supply />
          ) : (
            page === farmPage.Borrow ? (
            <Borrow />
          ) : (
            <Confirm />
          ))}
    </div>
    
  );
};