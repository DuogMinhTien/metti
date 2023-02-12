import React from 'react';
import { getTranslatedText } from '../../../services/appService';

function NotificationModal() {

  return (
    <React.Fragment>
      <div id='notification-modal-wrapper'>
        <h3>{getTranslatedText('modal_title')}</h3>
        <div id='content-notification-modal-wrapper'>
          <p>
            {getTranslatedText('modal_title_metti')}
          </p>
          <p>
            {getTranslatedText('modal_title_content')}
          </p>
        </div>
      </div> 
    </React.Fragment>
  );
};

export default NotificationModal;