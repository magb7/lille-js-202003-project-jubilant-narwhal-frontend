import React from 'react'
import Calendar from '../src/screens/Calendar'
import LeftArrow from '../src/components/Button/LeftArrow'
import RightArrow from '../src/components/Button/RightArrow'
import MatiereBtn from '../src/components/Button/MatiereBtn'
import SendBtn from '../src/components/Button/SendBtn'
import PenBtn from '../src/components/Button/PenBtn'
import AddBtn from '../src/components/Button/AddBtn'
import DayOffOverlay from '../src/components/DayOffOverlay'
import TaskDoneOverlay from '../src/components/TaskDoneOverlay'
import ViewLeftBtn from '../src/components/Button/ViewLeftBtn'
import ViewRightBtn from '../src/components/Button/ViewRightBtn'
import SwitchViewBtn from '../src/components/Button/SwitchViewBtn'
import TaskCard from '../src/components/TaskCard'
import WeeksNav from '../src/components/WeeksNav'

import DayListDisplay from '../src/components/DayListDisplay'
import MonthListDisplay from '../src/components/MonthListDisplay'
import CalendarDay from '../src/screens/CalendarDay'

export default {
  title: 'Components'
}

export const AddBtnStory = () => <AddBtn />
export const SendBtnStory = () => <SendBtn />
export const MatiereBtnStory = () => <MatiereBtn />
export const LeftArrowStory = () => <LeftArrow />
export const RightArrowStory = () => <RightArrow />
export const DayOffOverlayStory = () => <DayOffOverlay />
export const TaskDoneOverlayStory = () => <TaskDoneOverlay />
export const TaskCardStory = () => <TaskCard />
export const ViewLeftBtnStory = () => <ViewLeftBtn />
export const ViewRightBtnStory = () => <ViewRightBtn />
export const PenBtnStory = () => <PenBtn />
export const SwitchViewBtnStory = () => <SwitchViewBtn />
export const WeeksNavStory = () => <WeeksNav />

export const DayListDisplayStory = () => <DayListDisplay />
export const MonthListDisplayStory = () => <MonthListDisplay />
export const CalendarStory = () => <Calendar />
export const CalendarDayStory = () => <CalendarDay/>
