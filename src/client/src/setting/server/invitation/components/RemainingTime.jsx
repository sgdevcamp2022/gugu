import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  text-align: right;
`

function RemainingTime({ invitationEndTime }) {
  const [date, setDate] = useState(31 - new Date().getDate());
  const [hour, setHour] = useState(23 - new Date().getHours());
  const [minute, setMinute] = useState(59 - new Date().getMinutes());
  const [second, setSecond] = useState(59 - new Date().getSeconds());

  useEffect(() => {
    const calculateTime = setInterval(() => {
      setDate(31 - new Date().getDate());
      setHour(23 - new Date().getHours());
      setMinute(59 - new Date().getMinutes());
      setSecond(59 - new Date().getSeconds());
    }, 1000);
    return () => clearInterval(calculateTime);
  }, [invitationEndTime]);

  return (
    <Container className="remaining-time text-align-right">
      {date < 10 ? `0${date}` : date}:
      {hour < 10 ? `0${hour}` : hour}:
      {minute < 10 ? `0${minute}` : minute}:
      {second < 10 ? `0${second}` : second}
    </Container>
  )
}

RemainingTime.propTypes = {
  invitationEndTime: PropTypes.object, // eslint-disable-line
}

RemainingTime.defaultProps = {
  invitationEndTime: new Date()
}

export default RemainingTime;
