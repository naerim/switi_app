import React from 'react';
import styled from 'styled-components/native';
import { Calendar } from 'react-native-calendars';
import ArrowIcon from '../../../../Img/btn_back.png';

interface Props {
  closeModal: () => void;
}
const CalenderModal: React.FC<Props> = ({ closeModal }) => {
  return (
    <Container>
      <Desc>스터디 예정 종료 날짜를 선택 해 주세요.</Desc>
      <Calendar
        // Initially visible month. Default = Date()
        current={'2021-04-26'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2021-01-01'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2021-12-31'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {
          console.log('selected day', day);
          closeModal();
        }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {
          console.log('selected day', day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'yyyy MM'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {
          console.log('month changed', month);
        }}
        // Hide month navigation arrows. Default = false
        hideArrows={false}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={(direction) =>
          direction === 'left' ? (
            <RightArrow source={ArrowIcon} />
          ) : (
            <LeftArrow source={ArrowIcon} />
          )
        }
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={false}
        // Show week numbers to the left. Default = false
        showWeekNumbers={false}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={(substractMonth) => substractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={(addMonth) => addMonth()}
      />
    </Container>
  );
};

const Container = styled.View`
  padding: 30px 0;
`;

const Desc = styled.Text`
  font-size: 18px;
  color: #2b2b2b;
  margin-bottom: 30px;
  font-weight: bold;
`;

const RightArrow = styled.Image`
  width: 15px;
  height: 15px;
`;

const LeftArrow = styled.Image`
  width: 15px;
  height: 15px;
  transform: scaleX(-1);
`;

export default CalenderModal;
