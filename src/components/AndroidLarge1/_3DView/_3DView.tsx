import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './_3DView.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    _19274654?: ReactNode;
    _3745?: ReactNode;
  };
}
/* @figmaId 5:43 */
export const _3DView: FC<Props> = memo(function _3DView(props = {}) {
  
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes._3DView} >
        <p className={classes.labelWrapper}>
          <span className={classes.label}>3D View</span>
          
        </p>
      </div>
      <div className={classes.rectangle2}></div>
      {props.text?._19274654 != null ? (
        props.text?._19274654
      ) : (
        <div className={classes._19274654}>19-27 &amp; 46-54 </div>
      )}
      <div className={classes.rectangle3}></div>
      {props.text?._3745 != null ? props.text?._3745 : <div className={classes._3745}>37-45 </div>}
    </div>
  );
});
