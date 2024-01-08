import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Info_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 5:32 */
export const Info_Property1Default: FC<Props> = memo(function Info_Property1Default(props = {}) {
  const handleButtonClick = () => {
    // Scroll down by the specified number of pixels
    window.scrollBy({
      top: 3350,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div onClick={handleButtonClick} className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.info}>Info</div>
    </div>
  );
});
