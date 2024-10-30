import { useState } from 'react';

export default function StarRating(size:any) {
  const [rating, setRating] = useState(0); 

  const handleClick = (index:any) => {
    setRating(index + 1); 
  };

  return (
    <div style={{ display: 'flex' }}>
      {[...Array(5)].map((_, index) => (
        <svg
          className='mx-1 '
          key={index}
          onClick={() => handleClick(index)}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={index < rating ? '#447128' : 'transparent'}
          stroke="#447128" 
          strokeWidth="3"
          style={{ cursor: 'pointer' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
        </svg>
      ))}
    </div>
  );
}