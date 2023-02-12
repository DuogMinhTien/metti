import React from 'react';
import {
  Card,
} from 'antd';

const {
  Meta,
} = Card;


function TechCardComponent(props) {
  
  const { 
    title,
    description,
  } = props;

  return (
    <React.Fragment>
      <Card
        className='tech-card-wrapper'
        hoverable
        // cover={
        //   <img
        //     className='tech-card-cover'
        //     alt="example" 
        //     src={"../../assets/technology/techicon1.png"}
        //   />
        // }
      >
        <Meta
          className='tech-card-description-wrapper'
          title={title.toUpperCase()}
        />
        <div dangerouslySetInnerHTML={{__html: description}} />
      </Card>
    </React.Fragment>
  );
};

export default TechCardComponent;