import React, { useState } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { IoAddOutline, IoChevronDown, IoChevronForward } from 'react-icons/io5';

import BackdropModal from '../../../common/components/BackdropModal';
import CreateChannelModal from './CreateChannelModal';
import ContentChannel from './ContentChannel';

const Container = styled.div`
  padding-top: 16px;

  display: grid;
  grid-template-columns: 18px 1fr 18px;
  align-items: center;

  color: ${(props) => props.theme.color.secondaryText};
  cursor: pointer;

  .channel-button {
    padding-right: 6px;
  }

  .channel-button,
  .create-channel {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .channel-button,
  .category-name {
    font-size: 12px;
  }

  :hover .channel-button,
  :hover .category-name {
    color: ${(props) => props.theme.color.primaryText};
  }

  .create-channel {
    font-size: 18px;
    :hover {
      color: ${(props) => props.theme.color.primaryText};
    }
  }
`;

function ContentCategory({ name, id, channels }) {
  const [isDetailClicked, setIsDetailClicked] = useState(false);
  const [isCreateClicked, setIsCreateClicked] = useState(false);
  console.log(id);

  const handleCategoryClick = () => {
    setIsDetailClicked(!isDetailClicked);
  };

  return (
    <>
      <Container>
        <div
          className="channel-button"
          role="presentation"
          onClick={handleCategoryClick}
        >
          {isDetailClicked ? <IoChevronDown /> : <IoChevronForward />}
        </div>
        <div
          className="category-name"
          role="presentation"
          onClick={handleCategoryClick}
        >
          {name}
        </div>

        <div
          className="create-channel"
          role="presentation"
          onClick={() => {
            setIsCreateClicked(true);
          }}
        >
          <IoAddOutline />
        </div>

        {isCreateClicked && (
          <BackdropModal open={isCreateClicked} setOpen={setIsCreateClicked}>
            <CreateChannelModal setIsModalOpen={setIsCreateClicked} />
          </BackdropModal>
        )}
      </Container>
      {isDetailClicked &&
        channels.map((channel) => (
          <ContentChannel
            key={channel.id}
            name={channel.name}
            type={channel.type}
          />
        ))}
    </>
  );
}

ContentCategory.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  channels: PropTypes.arrayOf, //eslint-disable-line
};

export default ContentCategory;
