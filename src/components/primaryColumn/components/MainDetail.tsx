import React from 'react'
import styled from 'styled-components'

const StyledMainDetail = styled.div`
  margin-bottom: 50px;
`
const Name = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`
const ContactDetails = styled.div`
  font-size: 12px;
  color: grey;
  padding-bottom: 15px;
`
const SummaryText = styled.div`
  text-align: justify;
`

interface IMainDetailProps {
  name: string
  email: string
  phoneNumber: string
  summaryText: string
}

const MainDetail = ({
  name,
  email,
  phoneNumber,
  summaryText
}: IMainDetailProps) => (
  <StyledMainDetail>
    <Name>{name}</Name>
    <ContactDetails>{`${email} | ${phoneNumber}`}</ContactDetails>
    <SummaryText>{summaryText}</SummaryText>
  </StyledMainDetail>
)

export default MainDetail
