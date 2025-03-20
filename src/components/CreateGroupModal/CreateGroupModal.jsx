import React, { useState, useEffect } from 'react';
import './CreateGroupModalStyle.css';
import { useSelector, useDispatch } from 'react-redux';
import { addGroup } from '../../redux/slices/groupSlices';

const CreateGroupModal = ({ setAddGroup }) => {
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [showError, setShowError] = useState(false);
  const errors = useSelector((state) => state.group.error);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setGroupName(event.target.value);
    setShowError(false);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const createGroup = () => {
    dispatch(addGroup({ groupName, color: selectedColor }));
    setShowError(true);
  };

  useEffect(() => {
    if (showError && !errors) {
      setAddGroup(false);
      setGroupName("");
      setSelectedColor(null);
    }
  }, [errors, showError, setAddGroup]);

  const colors = [
    { class: 'color-one', value: '#B38BFA' },
    { class: 'color-two', value: '#FF79F2' },
    { class: 'color-three', value: '#43E6FC' },
    { class: 'color-four', value: '#F19576' },
    { class: 'color-five', value: '#0047FF' },
    { class: 'color-six', value: '#6691FF' },
  ];

  return (
    <div onClick={() => setAddGroup(false)} className='create-group' role="dialog" aria-modal="true">
      <div onClick={(e) => e.stopPropagation()} className="create-group-section">
        <h2>Create New Group</h2>
        <div className="enter-group-name">
          <label htmlFor="group-name-input">
            <h3>Group Name</h3>
          </label>
          <input
            id="group-name-input"
            className='group-text-input'
            onChange={handleInputChange}
            type="text"
            placeholder=' Enter group name'
            value={groupName}
            maxLength="25"
            required
          />
        </div>
        {showError && errors && <p className="error-message">{errors}</p>}
        <div className="choose-group-color">
          <h3>Choose color</h3>
          {colors.map((color) => (
            <div
              key={color.value}
              className={`${color.class} ${selectedColor === color.value ? 'selected' : ''}`}
              onClick={() => handleColorSelect(color.value)}
              role="button"
              aria-label={`Select color ${color.value}`}
            ></div>
          ))}
        </div>
        <div className="modal-buttons">
          <button
            type="button"
            onClick={() => setAddGroup(false)}
            className='cancel-button'
          >
            Cancel
          </button>
          <button
            onClick={createGroup}
            className='create-group-button'
            disabled={!groupName.trim() || !selectedColor}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupModal;