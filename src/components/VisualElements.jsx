import React from 'react';

const VisualElements = () => {
  return (
    <div className="visual-elements">
      {/* Lunar landscape elements */}
      <div className="lunar-landscape">
        <div className="lunar-mountain" style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '80px',
          height: '120px',
          background: 'linear-gradient(to top, #2a3a34 0%, #1a2521 100%)',
          clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)'
        }} />
        <div className="lunar-crater" style={{
          position: 'absolute',
          bottom: '15%',
          left: '20%',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#1a2521',
          border: '2px solid #2a3a34'
        }} />
        <div className="lunar-crater" style={{
          position: 'absolute',
          bottom: '30%',
          left: '40%',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: '#1a2521',
          border: '1px solid #2a3a34'
        }} />
      </div>
      
      {/* Space elements */}
      <div className="space-elements">
        <div className="star" style={{
          position: 'absolute',
          top: '10%',
          left: '15%',
          width: '2px',
          height: '2px',
          background: '#fff',
          borderRadius: '50%'
        }} />
        <div className="star" style={{
          position: 'absolute',
          top: '25%',
          right: '30%',
          width: '1px',
          height: '1px',
          background: '#fff',
          borderRadius: '50%'
        }} />
        <div className="star" style={{
          position: 'absolute',
          top: '40%',
          left: '45%',
          width: '3px',
          height: '3px',
          background: '#fff',
          borderRadius: '50%'
        }} />
        <div className="star" style={{
          position: 'absolute',
          top: '60%',
          right: '20%',
          width: '1.5px',
          height: '1.5px',
          background: '#fff',
          borderRadius: '50%'
        }} />
        <div className="star" style={{
          position: 'absolute',
          top: '75%',
          left: '30%',
          width: '2.5px',
          height: '2.5px',
          background: '#fff',
          borderRadius: '50%'
        }} />
      </div>
    </div>
  );
};

export default VisualElements;