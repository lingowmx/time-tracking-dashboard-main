import React from 'react'
import { Layout } from '../LayoutCards/Layout'
import iconSelfCare from '../../images/icon-self-care.svg'
export const SelfCare = ({data, period}) => {
  if(!data) return null
  return (
    <Layout
      title="SelfCare"
      colorBar="bg-SoftOrange"
      icon={iconSelfCare}
      current={data.current}
      previous={data.previous}
      period={period}>

    </Layout>
  )
}
