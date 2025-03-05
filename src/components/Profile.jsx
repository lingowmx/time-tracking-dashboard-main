import imageJeremy from "../../images/image-jeremy.png"

export const Profile = ({setSelectedPeriod}) => {
  return (
    <div className="w-80 h-40 rounded-lg bg-DarkBlue text-white">
      <div className="flex justify-center gap-8 items-center h-28 bg-VioletSocial rounded-lg">
        <img 
          src={imageJeremy} 
          alt="profile-image" 
          className="w-14 h-14 rounded-full border-2 border-white"/>
        <div className="flex flex-col">
          <p className="font-light tracking-wide">Report for</p>
          <p className="text-xl tracking-wider">Jeremy Robson</p>
        </div>
      </div>
      <div className="p-3 flex justify-around cursor-pointer">
        <button onClick={() => setSelectedPeriod("daily")}>Daily</button>
        <button onClick={() => setSelectedPeriod("weekly")}>Weeekly</button>
        <button onClick={() => setSelectedPeriod("monthly")}>Monthly</button>

      </div>
    </div>
  )
}
