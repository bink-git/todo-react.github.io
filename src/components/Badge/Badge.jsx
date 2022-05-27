import React from 'react';
import classNames from 'classnames';

import './Badge.scss';

function Badge({ color, onBadgeClick, className }) {
  return (
    <i
      onClick={onBadgeClick}
      className={classNames('badge', { [`badge--${color}`]: color }, className)}
    ></i>
  );
}

export default Badge;
