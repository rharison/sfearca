import React from 'react';

const Loading = () => {
  return (
    <div
      className="bodyPageLoad"
      style={{
        transition: '2s',
        height: '500px',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <div className="loadingItem">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          style={{ margin: 'auto', display: 'block' }}
          width="100px"
          height="100px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="#01549d"
            strokeWidth="3"
            r="23"
            strokeDasharray="108.38494654884786 38.12831551628262"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
            ></animateTransform>
          </circle>
        </svg>
      </div>
      Carregando...
    </div>
  );
};

export default Loading;
