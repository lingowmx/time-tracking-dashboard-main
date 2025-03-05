import React from 'react'
import { Layout } from '../LayoutCards/Layout'
import iconExercise from '../../images/icon-exercise.svg'
export const Exercise = ({data, period}) => {
  return (
    <Layout
      title="Exercise"
      colorBar="bg-LimeGreen"
      icon={iconExercise}
      current={data.current}
      previous={data.previous}
      period={period}>

    </Layout>
  )
}
