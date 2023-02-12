import React from 'react';


function PartnerView(props) {

  const {
    partner,
    current_language,
  } = props;
  return (
    <React.Fragment>
      <div id='partner-view-wrapper' dangerouslySetInnerHTML={{__html: partner[`description_${current_language}`]}}>
      </div>
      {partner && partner.video_link.map(item => (
        // eslint-disable-next-line
        <iframe
          className='partner-video'
          src={item}
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      ))}
    </React.Fragment>
  );
};

export default PartnerView;