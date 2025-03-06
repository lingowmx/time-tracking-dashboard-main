import React, { useContext } from 'react'
import { Layout } from '../LayoutCards/Layout'
import iconSelfCare from '../../images/icon-self-care.svg'
import { MainContext } from '../Context/MainContext'

export const SelfCare = () => {
  const {data, selectedPeriod} = useContext(MainContext);
  const selfCareData = data[5]?.timeframes[selectedPeriod];
  if(!selfCareData) return null
  return (
    <Layout
      title="SelfCare"
      colorBar="bg-SoftOrange"
      icon={iconSelfCare}
      current={selfCareData.current}
      previous={selfCareData.previous}
      period={selectedPeriod}>

    </Layout>
  )
}
