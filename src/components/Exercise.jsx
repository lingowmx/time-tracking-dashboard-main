import React from 'react'
import { Layout } from '../LayoutCards/Layout'
import { useContext } from 'react'
import { MainContext } from '../Context/MainContext'
import iconExercise from '../../images/icon-exercise.svg'

export const Exercise = () => {
  const {data, selectedPeriod} = useContext(MainContext)
  const exerciseData = data[3]?.timeframes[selectedPeriod]
  if(!exerciseData) return null

  return (
    <Layout
      title="Exercise"
      colorBar="bg-LimeGreen"
      icon={iconExercise}
      current={exerciseData.current}
      previous={exerciseData.previous}
      period={selectedPeriod}>

    </Layout>
  )
}
