import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './_2dButton_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    _2DView?: ReactNode;
  };
}
/* @figmaId 12:30 */
export const _2dButton_Property1Default: FC<Props> = memo(function _2dButton_Property1Default(props = {}) {
  const handleButtonClick = () => {
    // Scroll down by the specified number of pixels
    window.scrollBy({
      top: 950,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div  onClick={handleButtonClick} className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      {props.text?._2DView != null ? props.text?._2DView : <div className={classes._2DView}>2D View</div>}
    </div>
  );
});
