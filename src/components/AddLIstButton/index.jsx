import React, { useState } from 'react';
import List from '../List';
import Badge from '../Badge/Badge';

import './AddListButton.scss';

const AddListButton = ({ colors }) => {
  const [visiblePopup, setVisiblePopup] = useState(true);
  const [selectedColor, setselectedColor] = useState(colors[0].id);

  return (
    <div className="add-list">
      <List
        onClickAddList={() => setVisiblePopup(!visiblePopup)}
        items={[
          {
            className: 'list__add-button',
            icon: (
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="list__icon-add"
              >
                <path
                  d="M8 1V15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 8H15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            name: 'Add new list',
          },
        ]}
      />
      {visiblePopup && (
        <div className="add-list__popup">
          <input className="field" type="text" placeholder="Name list" />
          <div className="add-list__popup-colors">
            {colors.map((color) => (
              <Badge
                onBadgeClick={() => setselectedColor(color.id)}
                color={color.name}
                key={color.id}
                className={selectedColor === color.id && 'active'}
              />
            ))}
          </div>
          <button className="add-list-btn">Add list</button>
        </div>
      )}
    </div>
  );
};

export default AddListButton;
