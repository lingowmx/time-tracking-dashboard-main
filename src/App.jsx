import jsonData from '../data.json'
import './App.css'
import { Profile } from './components/Profile'
import { Play } from './components/Play'
import { Work } from './components/Work'
import { Study } from './components/Study'
import { Exercise } from './components/Exercise'
import { Social } from './components/Social'
import { SelfCare } from './components/SelfCare'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState('daily')
useEffect(() => {
  setData(jsonData)
},[])

  return (
    <div 
    className='pt-12 pb-12 font-rubik text-lg bg-VeryDarkBlue h-full flex flex-col justify-center items-center gap-6'>
      <Profile setSelectedPeriod ={setSelectedPeriod}/>
      <Work data={data[0]?.timeframes[selectedPeriod]} period={selectedPeriod}/>
      <Play data={data[1]?.timeframes[selectedPeriod]} period={selectedPeriod}/>
      <Study data={data[2]?.timeframes[selectedPeriod]} period={selectedPeriod}/>
      <Exercise data={data[3]?.timeframes[selectedPeriod]} period={selectedPeriod}/>
      <Social data={data[4]?.timeframes[selectedPeriod]} period={selectedPeriod}/>
      <SelfCare data={data[5]?.timeframes[selectedPeriod]} period={selectedPeriod}/>
    </div>
  )
}

export default App
