import React from 'react';
import styled from 'styled-components/native';
import { Calendar } from 'react-native-calendars';
import ArrowIcon from '../../../../Img/btn_back.png';
import moment from 'moment';
import BasicModal from '../../../../Component/BasicModal';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
  setValue?: any;
  desc: string;
  updateEndDate?: (v: string) => void;
}

const CalenderModal: React.FC<Props> = ({
  modalVisible,
  closeModal,
  desc,
  setValue,
  updateEndDate,
}) => {
  const getCurrentDate = () => {
    const now = new Date();
    return moment(now).add(2, 'days').format('YYYY-MM-DD');
  };

  return (
    <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
      <Container>
        <Desc>{desc}</Desc>
        <Calendar
          // Initially visible month. Default = Date()
          current={getCurrentDate()}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={getCurrentDate()}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2022-12-31'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {
            if (setValue) {
              setValue({
                year: day.year.toString(),
                month: day.month.toString(),
                day: day.day.toString(),
              });
            }
            if (updateEndDate) {
              const date =
                day.year.toString() +
                '-' +
                day.month.toString() +
                '-' +
                day.day.toString();
              updateEndDate(date);
            }
            closeModal();
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          //onMonthChange={(month) => {}}
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
    </BasicModal>
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
