import React from 'react';
import cn from 'classnames';
import DOMPurify from 'isomorphic-dompurify';
import PropTypes from 'prop-types';

import s from './styles.module.css';

const HTMLParser = ({ className, content, clean, el = 'div', ...props }) => {
  const Component = el;

  const rootClassName = cn(
    {
      [s.root]: !clean
    },
    className
  );
  return (
    <>
      <Component
        className={rootClassName}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(content, {
            ADD_TAGS: ['iframe'],
            ADD_ATTR: ['allowfullscreen']
          })
        }}
        {...props}
      />
      <p className="clear-both" />
    </>
  );
};

HTMLParser.propTypes = {
  className: PropTypes.string,
  el: PropTypes.string,
  content: PropTypes.string,
  clean: PropTypes.bool
};

export default HTMLParser;
