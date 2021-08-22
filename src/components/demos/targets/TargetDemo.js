import Path, { Svg, Group } from 'react-svg-path';
import {
  Target1,
  Target2,
  Target3,
  Target4,
  Target5,
  Target6,
  Target7,
  Target8,
  Target9,
  Target10,
  Target11
} from './Targets';
import './Targets.css';

const TargetDemo = () => {
  const size = 50;
  const g = Path.positionByArray(100, [[1,1,1,1], [1,1,1,1], [1,1,1]], 0, 0)
  const xy = (p) => {
    const { cx, cy } = g[p];
    return { cx, cy };
  };

  return (
    <Svg width={500} height={400} className='bg-dark' scale>
      <Group transform="translate(50, 50)">
        <Target1 size={size} {...xy(0)} />
        <Target3 size={size} {...xy(1)} />
        <Target2 size={size} {...xy(2)} />
        <Target5 size={size} {...xy(3)} />
        <Target7 size={size} {...xy(4)} />
        <Target8 size={size} {...xy(5)} />
        <Target9 size={size} {...xy(6)} />
        <Target10 size={size} {...xy(7)} />
        <Target11 size={size} {...xy(8)} />
        <Target6 size={size} {...xy(9)} />
        <Target4 size={size} {...xy(10)} />
      </Group>
    </Svg>
  );
};

export default TargetDemo;
