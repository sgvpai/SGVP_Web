import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './_3DViewLink_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    _3DView?: ReactNode;
  };
}
/* @figmaId 5:2 */
export const _3DViewLink_Property1Default: FC<Props> = memo(function _3DViewLink_Property1Default(props = {}) {
  const handleButtonClick = () => {
    // Scroll down by the specified number of pixels
    window.scrollBy({
      top: 2300,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div onClick={handleButtonClick} className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?._3DView != null ? props.text?._3DView : <div className={classes._3DView} >3D View </div>}
    </div>
  );
});
