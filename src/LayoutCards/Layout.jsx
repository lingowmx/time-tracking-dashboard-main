import React from 'react'
import iconEllipsis from "../../images/icon-ellipsis.svg"

export const Layout = ({title, colorBar, icon, current, previous, period}) => {
  const getPeriodText = (period) => {
    switch (period){
      case "daily":
        return "Last day";
      case "weekly":
        return "Last week";
      case "monthly":
        return "Last month";
      default:
        return "Unkown period"
    }
  }
  return (
    <div className={`rounded-lg ${colorBar} text-white relative overflow-hidden cursor-pointer`}>
      <img 
        src={icon}
        alt="icon-type"
        className='w-16 h-16 absolute right-3 -top-2'/>
      <div className='max-h-52 pr-5 pl-5 pt-5 rounded-lg flex flex-col bg-DarkBlue mt-10 relative cursor-pointer hover:bg-DarkBlue/55
      ease-in-out duration-200 lg:h-60'>
        <section className='rounded-t-lg flex justify-between '>
          <p>{title}</p>
          <span className='flex items-center self-center'>
            <img src={iconEllipsis} alt="littledots" />
          </span>
        </section>
        <section className='mt-1 flex justify-between items-center tracking-wide
        lg:flex lg:flex-col lg:items-start'>
          <p className='text-3xl font-light pt-2 lg:text-5xl lg:font-thin'>{current}hrs</p>
          <p className='text-sm text-PaleBlue lg:pt-2'>{getPeriodText(period)} - {previous}hrs</p>
        </section>
      </div>
    </div>
  )
}
