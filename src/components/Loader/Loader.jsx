import { RotatingLines } from 'react-loader-spinner';
import { Wrap } from './Loader.styled';

const Loader = () => {
  return (
    <Wrap>
      <RotatingLines
        strokeColor="#041d51"
        strokeWidth="5"
        animationDuration="0.85"
        width="96"
        visible={true}
      />
    </Wrap>
  );
};

export default Loader;
