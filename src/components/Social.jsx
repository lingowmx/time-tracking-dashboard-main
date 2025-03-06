import React from 'react'
import { Layout } from '../LayoutCards/Layout'
import iconSocial from '../../images/icon-social.svg'

export const Social = ({data, period}) => {
  if(!data) return null
  return (
    <Layout
      title="Social"
      colorBar="bg-VioletSocial"
      icon={iconSocial}
      current={data.current}
      previous={data.previous}
      period={period}>

    </Layout>
  )
}
