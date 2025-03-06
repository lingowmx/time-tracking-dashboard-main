import React, { useContext } from 'react'
import { Layout } from '../LayoutCards/Layout'
import { MainContext } from '../Context/MainContext'
import iconSocial from '../../images/icon-social.svg'

export const Social = () => {
  const {data, selectedPeriod} = useContext(MainContext)
  const socialData = data[4]?.timeframes[selectedPeriod]
  if(!socialData) return null
  return (
    <Layout
      title="Social"
      colorBar="bg-VioletSocial"
      icon={iconSocial}
      current={socialData.current}
      previous={socialData.previous}
      period={selectedPeriod}>

    </Layout>
  )
}
