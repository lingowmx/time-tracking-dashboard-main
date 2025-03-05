import React from 'react'
import { Layout } from '../LayoutCards/Layout'
import iconStudy from '../../images/icon-study.svg'
export const Study = ({data, period}) => {
  return (
    <Layout
      title="Study"
      colorBar="bg-LightRedStudy"
      icon={iconStudy}
      current={data.current}
      previous={data.previous}
      period={period}>

    </Layout>
  )
}
