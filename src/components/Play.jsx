import React from 'react'
import { Layout } from '../LayoutCards/Layout'
import playIcon from "../../images/icon-play.svg"

export const Play = ({data, period}) => {
  return (
    <Layout
      title="Play"
      colorBar="bg-SoftBlue"
      icon={playIcon}
      current={data.current}
      previous={data.previous}
      period={period}>

    </Layout>
  )
}
