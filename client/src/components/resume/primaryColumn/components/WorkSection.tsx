import React from 'react'

import MainSectionWrapper from './MainSectionWrapper'
import PrimarySectionHeading from './PrimarySectionHeading'
import WorkItem from './WorkItem'
import { IWork } from '../../../../model/Resume'

interface IWorkSectionProps {
  workList: IWork[]
  displayHeading?: boolean
}

const WorkSection = ({
  workList,
  displayHeading = true
}: IWorkSectionProps) => (
  <MainSectionWrapper>
    {displayHeading && (
      <PrimarySectionHeading>Experience</PrimarySectionHeading>
    )}
    {workList.map(workItem => (
      <WorkItem
        key={`${workItem.position}-${workItem.startDate}`}
        item={workItem}
      />
    ))}
  </MainSectionWrapper>
)

export default WorkSection
