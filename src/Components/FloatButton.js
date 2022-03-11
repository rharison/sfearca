import React from 'react';

const FloatButton = () => {

  const floatButtonStyle = {
    color: 'white',
    backgroundColor: '#0c62ad',
    position: 'fixed',
    zIndex: '20',
    right: '25px',
    bottom: '25px',
    borderRadius: '25px',
    width: '48px',
    height: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
  };

  function handleClickFloatButton() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
      <button
        className="floatButton"
        onClick={handleClickFloatButton}
        style={floatButtonStyle}
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </button>
  );
};

export default FloatButton;
