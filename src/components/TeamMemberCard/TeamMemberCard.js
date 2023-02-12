import React from 'react';
import {
  Card,
} from 'antd';

const {
  Meta,
} = Card;

function TeamMemberCard(props) {

  const {
    teamMember,
  } = props;

  return (
    <React.Fragment>
       <Card
        className='member-card-wrapper'
        hoverable
        cover={
          <img
            alt="example" 
            src={teamMember.reviewer_avatar}
          />
        }
      >
        <Meta
          title={teamMember.reviewer_name}
          description={teamMember.reviewer_position}
        />
        <div
          className='card-description'
          dangerouslySetInnerHTML={{__html: teamMember.review}}
        >
        </div>
      </Card>
    </React.Fragment>
  );
};

export default TeamMemberCard;