import React from 'react';

const Title = ({children}) => {
  return (
    <h1 className='text-3xl font-semibold text-indigo-400 text-center'>{children}</h1>
  );
};

export default Title;