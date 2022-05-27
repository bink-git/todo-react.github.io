import React from 'react';
import classNames from 'classnames';
import Badge from '../Badge/Badge';

import './List.scss';

function List({ items, isRemovable, onClickAddList }) {
  return (
    <ul onClick={onClickAddList} className="list">
      {items.map((item, index) => (
        <li
          className={classNames(item.className, { active: item.active })}
          key={index}
        >
          <i>{item.icon ? item.icon : <Badge color={item.color} />}</i>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default List;
