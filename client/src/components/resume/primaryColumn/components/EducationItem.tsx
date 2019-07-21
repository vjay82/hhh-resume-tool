import React from 'react'
import styled from 'styled-components'
import { IEducation } from '../../../../model/Resume'

import * as styles from '../../../../styles/commonStyles'
import LocationIcon from '../../../icons/LocationIcon'
import CalendarIcon from '../../../icons/CalendarIcon'

const StyledEducationItem = styled.div`
  padding-bottom: 20px;
`
const Degree = styled.div`
  font-weight: bold;
`
const LineContainer = styled.div`
  display: flex;
  align-items: left;
  padding-bottom: 5px;
`
const Institution = styled.div`
  font-weight: bold;
  color: ${styles.text.color.highlight};
  margin-right: 5px;
`
const Location = styled.div`
  margin-right: 8px;
  color: ${styles.text.color.secondary};
`
const Dates = styled.div`
  margin-right: 7px;
  font-style: italic;
  color: ${styles.text.color.secondary};
`

interface IEducationItemProps {
  key: string
  item: IEducation
}

const EducationItem = ({ key, item }: IEducationItemProps) => (
  <StyledEducationItem key={key}>
    <Degree>{`${item.studyType} ${item.area}`}</Degree>
    <LineContainer>
      <Institution>{item.institution}</Institution>
      <LocationIcon />
      <Location>{item.location}</Location>
      <CalendarIcon />
      <Dates>{`${item.startDate} - ${item.endDate}`}</Dates>
    </LineContainer>
  </StyledEducationItem>
)

export default EducationItem
