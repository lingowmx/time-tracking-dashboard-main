import jsonData from '../../data.json'
import { MainContext } from './MainContext';
import { useState, useEffect } from 'react';

export const MainProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState('daily')
useEffect(() => {
  setData(jsonData)
},[])
return (
  <MainContext.Provider 
  value={{data, selectedPeriod, setSelectedPeriod}}>
    {children}
  </MainContext.Provider>
)
}