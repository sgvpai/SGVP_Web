import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './_2DViewLink_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    _2DView?: ReactNode;
  };
}
/* @figmaId 5:14 */
export const _2DViewLink_Property1Default: FC<Props> = memo(function _2DViewLink_Property1Default(props = {}) {
  const handleButtonClick = () => {
    // Scroll down by the specified number of pixels
    window.scrollBy({
      top: 1390,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div onClick={handleButtonClick} className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?._2DView != null ? props.text?._2DView : <div className={classes._2DView}>2D View </div>}
    </div>
  );
});
