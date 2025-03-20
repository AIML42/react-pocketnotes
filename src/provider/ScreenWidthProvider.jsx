
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setWindowWidth } from '../redux/slices/uiSlices';

const ScreenWidthProvider = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let timeoutId;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        dispatch(setWindowWidth(window.innerWidth));
      }, 200);
    };

    dispatch(setWindowWidth(window.innerWidth));

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [dispatch]);

  return null;
};

export default ScreenWidthProvider;