import { useContext } from "react"
import imageJeremy from "../../images/image-jeremy.png"
import { MainContext } from "../Context/MainContext"

export const Profile = () => {
  const { selectedPeriod, setSelectedPeriod } = useContext(MainContext)
  return (
    <div className="w-80 h-40 rounded-lg bg-DarkBlue text-white lg:w-72
    lg:row-span-2 lg:min-h-[522px] lg:mx-auto">
      <div className="flex justify-center gap-8 items-center h-28 bg-VioletSocial rounded-lg
      lg:h-[360px] lg:flex-col lg:items-start lg:pl-8">
        <img
          src={imageJeremy}
          alt="profile-image"
          className="w-14 h-14 rounded-full border-2 border-white
          lg:w-24 lg:h-24"/>
        <div className="flex flex-col">
          <p className="font-light tracking-wide text-PaleBlue">Report for</p>
          <p className="text-xl tracking-wider lg:whitespace-pre-line lg:text-4xl lg:font-thin">{`Jeremy\nRobson`}</p>
        </div>
      </div>
      <div className="p-3 flex justify-around font-thin text-PaleBlue  
      lg:flex-col lg:items-start lg:gap-4 lg:pl-8 lg:mt-3">
        {['daily', 'weekly', 'monthly'].map((value) => {
          return (
            <label key={value}>
              <input
                type="radio"
                name="period"
                value={value}
                checked={selectedPeriod === value}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="hidden" />
              <span className={`cursor-pointer font-bold transition-all duration-200 
                  ${selectedPeriod === value
                  ? 'bg-Strongcyan text-white'
                  : ' text-PaleBlue hover:bg-Strongcyan hover:text-white'
                }`}>
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </span>
            </label>
          )
        })}
      </div>
    </div>
  )
}
