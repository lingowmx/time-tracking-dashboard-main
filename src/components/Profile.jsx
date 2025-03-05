import imageJeremy from "../../images/image-jeremy.png"

export const Profile = ({setSelectedPeriod, selectedPeriod}) => {
  return (
    <div className="w-80 h-40 rounded-lg bg-DarkBlue text-white">
      <div className="flex justify-center gap-8 items-center h-28 bg-VioletSocial rounded-lg">
        <img 
          src={imageJeremy} 
          alt="profile-image" 
          className="w-14 h-14 rounded-full border-2 border-white"/>
        <div className="flex flex-col">
          <p className="font-light tracking-wide text-PaleBlue">Report for</p>
          <p className="text-xl tracking-wider">Jeremy Robson</p>
        </div>
      </div>
      <div className="p-3 flex justify-around cursor-pointer text-PaleBlue">
        <button 
        className={`${selectedPeriod === 'daily' ? 'text-white font-bold': 'text-PaleBlue'}`}
        onClick={() => setSelectedPeriod("daily")}>Daily</button>
        <button 
        className={`${selectedPeriod === 'weekly' ? 'text-white font-bold': 'text-PaleBlue'}`}
        onClick={() => setSelectedPeriod("weekly")}>Weeekly</button>
        <button
        className={`${selectedPeriod === 'monthly' ? 'text-white font-bold': 'text-PaleBlue'}`}
        onClick={() => setSelectedPeriod("monthly")}>Monthly</button>

      </div>
    </div>
  )
}
