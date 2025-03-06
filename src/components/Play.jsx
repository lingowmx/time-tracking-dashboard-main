import React from 'react'
import { Layout } from '../LayoutCards/Layout'
import playIcon from "../../images/icon-play.svg"
import { MainContext } from '../Context/MainContext'
import { useContext } from 'react'

export const Play = () => {
  const {data, selectedPeriod} = useContext(MainContext);
  const playData = data[1]?.timeframes[selectedPeriod]
  if(!playData) return null
  return (
    <Layout
      title="Play"
      colorBar="bg-SoftBlue"
      icon={playIcon}
      current={playData.current}
      previous={playData.previous}
      period={selectedPeriod}>

    </Layout>
  )
}
