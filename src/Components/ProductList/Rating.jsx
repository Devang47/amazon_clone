import React from 'react';

function Rating({ stars }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {[1, 2, 3, 4, 5].map(v => (
        <div key={`full_${v}_${stars}_${Math.random() * 1000}`}>
          <span
            className="iconify"
            data-icon={
              stars >= v
                ? 'ant-design:star-filled'
                : stars >= v - 0.5
                ? 'bi:star-half'
                : 'akar-icons:star'
            }
            data-inline="false"
            data-height={stars >= v ? '22px' : '20px'}
            style={{ color: '#ffa41c' }}
          >
            <span style={{ display: 'none' }}></span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Rating;
