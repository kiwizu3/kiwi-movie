import React from 'react';

const PlayerHeader = ({ title, onClose }) => (
  <div className="modal-header">
    <h5 className="modal-title">{title}</h5>
    <button type="button" className="btn-close" onClick={onClose}></button>
  </div>
);

export default PlayerHeader;