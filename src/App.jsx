import './App.css'
import { Profile } from './components/Profile'
// import { Play } from './components/Play'
// import { Work } from './components/Work'
// import { Study } from './components/Study'
// import { Exercise } from './components/Exercise'
// import { Social } from './components/Social'
// import { SelfCare } from './components/SelfCare'
import { Activities } from './components/Activities'
function App() {

  return (
    <div
      className='font-rubik pt-12 pb-12 text-lg bg-VeryDarkBlue h-full flex flex-col justify-center items-center gap-6
    lg:flex lg:flex-row lg:justify-between lg:h-screen lg:gap-0'>
      <Profile />
      <Activities />
    </div>
  )
}

export default App
