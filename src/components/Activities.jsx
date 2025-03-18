import { useContext } from "react"
import { Layout } from "../LayoutCards/Layout"
import { MainContext } from "../Context/MainContext"
import workIcon from "../../images/icon-work.svg"
import playIcon from "../../images/icon-play.svg"
import studyIcon from '../../images/icon-study.svg'
import exerciseIcon from '../../images/icon-exercise.svg'
import socialIcon from '../../images/icon-social.svg'
import selfCareIcon from '../../images/icon-self-care.svg'

const activities = [
  { title: "Work", colorBar: "bg-LightRedWork", icon: workIcon, index: 0 },
  { title: "Play", colorBar: "bg-SoftBlue", icon: playIcon, index: 1 },
  { title: "Study", colorBar: "bg-LightRedStudy", icon: studyIcon, index: 2 },
  { title: "Exercise", colorBar: "bg-LimeGreen", icon: exerciseIcon, index: 3 },
  { title: "Social", colorBar: "bg-VioletSocial", icon: socialIcon, index: 4 },
  { title: "SelfCare", colorBar: "bg-SoftOrange", icon: selfCareIcon, index: 5 }
]

export const Activities = () => {
  const { data, selectedPeriod } = useContext(MainContext);
  return (

      <div className="w-[322px] gap-4 flex flex-col lg:w-[700px] lg:grid lg:grid-cols-3 lg:mx-auto xl:w-[900px]">
        {activities.map((activity) => {
          const activityData = data[activity.index]?.timeframes[selectedPeriod];
          if (!activityData) return null
          return (
            <div key={activity.title} className="w-full flex-col xl:w-[280px]" >
              <Layout
                title={activity.title}
                colorBar={activity.colorBar}
                icon={activity.icon}
                current={activityData.current}
                previous={activityData.previous}
                period={selectedPeriod} />
            </div>
          )
        })}
      </div>

  )
}
