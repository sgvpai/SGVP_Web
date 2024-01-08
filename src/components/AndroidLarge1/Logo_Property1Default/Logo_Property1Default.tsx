import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Logo_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    logo?: string;
    root?: string;
  };
}
/* @figmaId 5:3 */
export const Logo_Property1Default: FC<Props> = memo(function Logo_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <a href="https://amd.sgvp.org/">
      <div className={`${props.classes?.logo || ''} ${classes.logo}`}></div>
      </a>
    </div>
  );
});
