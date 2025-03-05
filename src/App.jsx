import './App.css'
import { Profile } from './components/Profile'
import { Play } from './components/Play'
import { Work } from './components/Work'
import { Study } from './components/Study'
import { Exercise } from './components/Exercise'
import { Social } from './components/Social'
import { SelfCare } from './components/SelfCare'

function App() {


  return (
    <div 
    className='pt-12 pb-12 font-rubik text-lg bg-VeryDarkBlue h-full flex flex-col justify-center items-center gap-6'>
      <Profile/>
      <Work/>
      <Play/>
      <Study/>
      <Exercise/>
      <Social/>
      <SelfCare/>
    </div>
  )
}

export default App
