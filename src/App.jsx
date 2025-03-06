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
    className='font-rubik pt-12 pb-12 text-lg bg-VeryDarkBlue h-full flex flex-col justify-center items-center gap-6
    lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:h-screen lg:pl-8 lg:pr-8 lg:pt-36 lg:pb-36'>
      <Profile />
      <Work />
      <Play />
      <Study />
      <Exercise />
      <Social />
      <SelfCare />
    </div>
  )
}

export default App
