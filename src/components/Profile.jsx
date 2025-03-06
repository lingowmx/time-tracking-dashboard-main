import imageJeremy from "../../images/image-jeremy.png"

export const Profile = ({setSelectedPeriod, selectedPeriod}) => {
  return (
    <div className="w-80 h-40 rounded-lg bg-DarkBlue text-white 
    lg:row-span-2 lg:h-[522px]">
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
      <div className="p-3 flex justify-around cursor-pointer font-thin text-PaleBlue  
      lg:flex-col lg:items-start lg:gap-4 lg:pl-8 lg:mt-3">
        <button 
        className={`${selectedPeriod === 'daily' ? 'text-white font-bold': 'text-PaleBlue'} hover:text-white`}
        onClick={() => setSelectedPeriod("daily")}>Daily</button>
        <button 
        className={`${selectedPeriod === 'weekly' ? 'text-white font-bold': 'text-PaleBlue'} hover:text-white`}
        onClick={() => setSelectedPeriod("weekly")}>Weeekly</button>
        <button
        className={`${selectedPeriod === 'monthly' ? 'text-white font-bold': 'text-PaleBlue'} hover:text-white`}
        onClick={() => setSelectedPeriod("monthly")}>Monthly</button>

      </div>
    </div>
  )
}
