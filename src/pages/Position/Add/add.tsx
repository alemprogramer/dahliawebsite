import React from "react";
import { atom, useSetRecoilState, useRecoilState } from 'recoil';
import { getToken } from "../../../utils/token";
import { useParams } from "react-router-dom";
import { poolState, poolProps } from "../../../pages/Farm/newFarm/NewFarm";
import { Supply } from "../../../pages/Position/Add/supply";
import { Borrow } from "../../../pages/Position/Add/borrow";
import { Confirm } from "../../../pages/Position/Add/confirm";


export enum addPage {
    Supply, 
    Borrow, 
    Confirm,
}
  
export const addPageState = atom({
    key: 'addPageState',
    default: addPage.Supply
})

interface positionProps {
  positionId: string | null;
  collateralSize: string | null; 
  collId: string | null;
}

export const emptyPositionState : positionProps = {
  positionId: null,
  collateralSize: null,
  collId: null,
}

export const addPositionState = atom({
  key: 'addPositionState',
  default: emptyPositionState
})

export const Add: React.FC = () => {
  const { positionId, collId, collateralSize, name, wrapper, spell, lp, tokens } = useParams<{ positionId: string, collId: string, collateralSize: string, name: string, wrapper: string, spell: string, lp:string, tokens:string}>();
  const setPool = useSetRecoilState(poolState); 
  const setPosition = useSetRecoilState(addPositionState); 
  const set: poolProps  = {
      name: name,
      wrapper: wrapper,
      spell: spell,
      lp: lp,
      tokens: (tokens.split(',').map((x) => getToken(x)!)),
  }
  setPool(set);
  setPosition({
    positionId, 
    collateralSize,
    collId,
  })  
  
  const [page] = useRecoilState(addPageState);

  return (
    <div>
      {
        page === addPage.Supply ? (
            <Supply />
          ) : (
            page === addPage.Borrow ? (
            <Borrow />
          ) : (
            <Confirm />
          ))}
    </div>
    
  );
};