import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

const isPortrait = () => {
  // Returns true if the screen is in portrait mode
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

export function useOrientation() {
  // State to hold the connection status
  const [orientation, setOrientation] = useState(
    isPortrait() ? 'PORTRAIT' : 'LANDSCAPE',
  );

  useEffect(() => {
    const callback = () =>
      setOrientation(isPortrait() ? 'PORTRAIT' : 'LANDSCAPE');

    Dimensions.addEventListener('change', callback);

    return () => {
      Dimensions.removeEventListener('change', callback);
    };
  }, []);

  return orientation;
}
