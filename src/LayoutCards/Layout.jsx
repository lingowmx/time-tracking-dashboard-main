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
        return "Last month"
    }
  }
  return (
    <main className={`w-80 rounded-lg ${colorBar} h-36 text-white relative overflow-hidden`}>
      <img 
        src={icon}
        alt="icon-type"
        className='w-16 h-16 absolute right-3 -top-2'/>
      <div className='w-[322px] h-28 pr-5 pl-5 pt-5 rounded-lg flex flex-col bg-DarkBlue mt-10 relative'>
        <section className='rounded-t-lg flex justify-between '>
          <p>{title}</p>
          <span className='flex items-center self-center'>
            <img src={iconEllipsis} alt="littledots" />
          </span>
        </section>
        <section className='mt-1 flex justify-between'>
          <p className='text-3xl'>{current}hrs</p>
          <p className='tex-sm'>{getPeriodText(period)} - {previous}hrs</p>
        </section>
      </div>
    </main>
  )
}
