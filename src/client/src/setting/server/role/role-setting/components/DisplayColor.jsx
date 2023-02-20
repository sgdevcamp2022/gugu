import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { CgColorPicker } from 'react-icons/cg';
import { ChromePicker } from 'react-color';
import Label from '../../../../common/components/Label';
import useOutsideClick from '../../../../../hooks/useOutsideClick';

const ColorPickerContainer = styled.div`
  width: 100%;
  margin-top: 24px;

  .description {
    margin-bottom: 8px;
    color: ${(props) => props.theme.color.secondaryText};
    font-size: 14px;
    font-weight: 400;
  }
`;

const ColorBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  flex-wrap: wrap;
`;

const DefaultColor = styled.div`
  width: 66px;
  height: 50px;
  margin-right: 10px;

  box-sizing: border-box;
  border-radius: 3px;
`;

const CustomColor = styled.div`
  width: 66px;
  height: 50px;
  padding: 3px;
  margin-right: 10px;

  box-sizing: border-box;
  position: relative;

  border-radius: 3px;
  border: ${(props) => props.theme.border.primary};
  text-align: right;

  font-size: 16px;
  color: ${(props) => props.theme.color.primaryText};
`;

const CustomColorModal = styled.div`
  width: 254px;
  height: 270px;
  padding: 16px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: calc(100% + 10px);
  z-index: 1;

  background-color: ${(props) => props.theme.color.primaryBg};

  box-shadow: ${(props) => props.theme.boxShadow.dark};
  border-radius: 3px;

  .chrome-picker {
    border: none;
    box-shadow: none;
  }
`;

const ColorButtonContainer = styled.div`
  width: 290px;
  height: 50px;
  margin-top: 10px;
`;

const ColorButtonRow = styled.div`
  &:last-child {
    margin-top: 10px;
  }

  button {
    width: 19px;
    height: 19px;
    margin-right: 10px;
    box-sizing: border-box;

    border: ${(props) => props.theme.border.primary};
    border-radius: 3px;
  }
`;

const LIGHT_COLORS = [
  'rgb(26, 188, 156)',
  'rgb(46, 204, 113)',
  'rgb(52, 152, 219)',
  'rgb(155, 89, 182)',
  'rgb(233, 30, 99)',
  'rgb(241, 196, 15)',
  'rgb(230, 126, 34)',
  'rgb(231, 76, 60)',
  'rgb(149, 165, 166)',
  'rgb(96, 125, 139)',
];

const DARK_COLORS = [
  'rgb(17, 128, 106)',
  'rgb(31, 139, 76)',
  'rgb(32, 102, 148)',
  'rgb(113, 54, 138)',
  'rgb(173, 20, 87)',
  'rgb(194, 124, 14)',
  'rgb(168, 67, 0)',
  'rgb(153, 45, 34)',
  'rgb(151, 156, 159)',
  'rgb(84, 110, 122)',
];

function DisplayColor() {
  const customColorModalRef = useRef();
  const [isCustomColorModalOpen, setIsCustomColorModalOpen] = useState(false);
  const [customColor, setCustomColor] = useState('');

  useOutsideClick(customColorModalRef, () => {
    setIsCustomColorModalOpen(false);
  });

  return (
    <ColorPickerContainer>
      <Label>
        역할 색상 <span>*</span>
      </Label>
      <div className="description">
        멤버의 이름은 역할 목록에서 가장 높은 역할의 색상으로 표시돼요.
      </div>

      <ColorBox>
        <DefaultColor style={{ backgroundColor: '#99aab5' }} />
        <CustomColor
          style={{ backgroundColor: customColor }}
          onClick={() => {
            setIsCustomColorModalOpen(true);
          }}
        >
          <CgColorPicker />
          {isCustomColorModalOpen && (
            <CustomColorModal ref={customColorModalRef}>
              <ChromePicker
                color={customColor}
                onChange={(color) => setCustomColor(color.hex)}
              />
            </CustomColorModal>
          )}
        </CustomColor>
        <ColorButtonContainer>
          <ColorButtonRow>
            {LIGHT_COLORS.map((color) => (
              <button
                key={color}
                type="button"
                style={{ backgroundColor: color }}
                aria-label={color}
              />
            ))}
          </ColorButtonRow>
          <ColorButtonRow>
            {DARK_COLORS.map((color) => (
              <button
                key={color}
                type="button"
                style={{ backgroundColor: color }}
                aria-label={color}
              />
            ))}
          </ColorButtonRow>
        </ColorButtonContainer>
      </ColorBox>
    </ColorPickerContainer>
  );
}

export default React.memo(DisplayColor);
