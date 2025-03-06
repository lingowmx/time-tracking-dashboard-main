import React from 'react'
import { Layout } from '../LayoutCards/Layout'
import workIcon from "../../images/icon-work.svg"

export const Work = ({data, period}) => {
  if(!data) return null 
  return (
    <Layout
      title="Work"
      colorBar="bg-LightRedWork"
      icon={workIcon}
      current={data.current}
      previous={data.previous}
      period={period}>
    </Layout>
  )
}
