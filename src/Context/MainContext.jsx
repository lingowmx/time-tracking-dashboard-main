import { createContext, useEffect, useState } from "react"
import jsonData from '../../data.json'

export const MainContext = createContext()
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
