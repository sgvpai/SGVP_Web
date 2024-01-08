import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _2dButton_Property1Default } from './_2dButton_Property1Default/_2dButton_Property1Default.js';
import { _2DViewLink_Property1Default } from './_2DViewLink_Property1Default/_2DViewLink_Property1Default.js';
import { _3DView } from './_3DView/_3DView.js';
import { _3DViewLink_Property1Default } from './_3DViewLink_Property1Default/_3DViewLink_Property1Default.js';
import classes from './AndroidLarge1.module.css';
import { BackgrongIcon } from './BackgrongIcon.js';
import { Info_Property1Default } from './Info_Property1Default/Info_Property1Default.js';
import { Logo_Property1Default } from './Logo_Property1Default/Logo_Property1Default.js';

interface Props {
  className?: string;
}
/* @figmaId 16:476 */
export const AndroidLarge1: FC<Props> = memo(function AndroidLarge1(props = {}) {
  const handleButtonClick = () => {
    // Scroll down by the specified number of pixels
    window.scrollBy({
      top: 1390,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.backgrong}>
        <BackgrongIcon className={classes.icon} />
      </div>
      <_3DView
        className={classes._3DView}
        text={{
          _19274654: <div className={classes._19274654}>19-27 &amp; 46-54 </div>,
          _3745: <div className={classes._3745}>37-45 </div>,
        }}
      />
      <div className={classes.majorAttractionsOfTheCarnival}>Major Attractions of the carnival</div>
      <div className={classes.evolutionAndHistoryOfAhmedabad}>
        <div className={classes.textBlock}>
          <p></p>
        </div>
        <ul className={classes.list}>
          <li>
            <div className={classes.textBlock2}>
              <p className={classes.labelWrapper}>
                <span className={classes.label}>Evolution and History of Ahmedabad</span>
              </p>
            </div>
          </li>
          <li>
            <div className={classes.textBlock3}>Heritage Walk </div>
          </li>
          <li>
            <div className={classes.textBlock4}>Pol Structure </div>
          </li>
          <li>
            <div className={classes.textBlock5}>Ahmedabad Manchester of India</div>
          </li>
          <li>
            <div className={classes.textBlock6}>Evolution of Charkha</div>
          </li>
          <li>
            <div className={classes.textBlock7}>Heritage and Modern art gallery </div>
          </li>
          <li>
            <div className={classes.textBlock8}>Vaarso toy Museum</div>
          </li>
          <li>
            <div className={classes.textBlock9}>Festivals of Gujarat</div>
          </li>
          <li>
            <div className={classes.textBlock10}>New startup and Career opportunities</div>
          </li>
        </ul>
      </div>
      <_2dButton_Property1Default className={classes._2dButton} />
      <_2dButton_Property1Default
        className={classes._2dButton2}
        
        text={{
          _2DView: <div className={classes._2DView} onClick={handleButtonClick}>3D View</div>,
        }}
      />
      <div className={classes.topics}>
        <div className={classes.topics2}>Topics</div>
        <div className={classes.topicsIn}>
          <div className={classes.textBlock11}>19.History &amp; Evolution of the city</div>
          <ol className={classes.list2}>
            <li>
              <div className={classes.textBlock12}>20.Swaminarayan Mandir to famous Heritage Sites</div>
            </li>
          </ol>
          <ol className={classes.list3}>
            <li>
              <div className={classes.textBlock13}>21.How Ahmedabad became a World Heritage City</div>
            </li>
          </ol>
          <ol className={classes.list4}>
            <li>
              <div className={classes.textBlock14}>22.Ancient Pol culture</div>
            </li>
          </ol>
          <ol className={classes.list5}>
            <li>
              <div className={classes.textBlock15}>1. -Infrastructure </div>
            </li>
          </ol>
          <ol className={classes.list6}>
            <li>
              <div className={classes.textBlock16}> 2. -OL - shop + residence</div>
            </li>
          </ol>
          <ol className={classes.list7}>
            <li>
              <div className={classes.textBlock17}>23.Process of Heritage </div>
            </li>
          </ol>
          <ol className={classes.list8}>
            <li>
              <div className={classes.textBlock18}> 1. -grade I,II,III </div>
            </li>
          </ol>
          <ol className={classes.list9}>
            <li>
              <div className={classes.textBlock19}> 24.Textile,Literature</div>
            </li>
          </ol>
          <ol className={classes.list10}>
            <li>
              <div className={classes.textBlock20}>25.Charkha - Models to be displayed and clothes to be made</div>
            </li>
          </ol>
          <ol className={classes.list11}>
            <li>
              <div className={classes.textBlock21}>26.Costumes - Evolution</div>
            </li>
          </ol>
          <ol className={classes.list12}>
            <li>
              <div className={classes.textBlock22}>27. Heritage/Modern Art Gallery</div>
            </li>
          </ol>
          <ol className={classes.list13}>
            <li>
              <div className={classes.textBlock23}>
                <p className={classes.labelWrapper2}>
                  <span className={classes.label2}>Saptrang nu Sutra</span>
                </p>
              </div>
            </li>
          </ol>
          <div className={classes.textBlock24}>
            <p className={classes.labelWrapper3}>
              <span className={classes.label3}>37. Rulers of Ahmedabad</span>
            </p>
          </div>
          <ol className={classes.list14}>
            <li>
              <div className={classes.textBlock25}>
                <p className={classes.labelWrapper4}>
                  <span className={classes.label4}>Tales of Darwaaza</span>
                </p>
              </div>
            </li>
          </ol>
          <div className={classes.textBlock26}>
            <p className={classes.labelWrapper5}>
              <span className={classes.label5}>42. Ahmedabad’s Textile legacy</span>
            </p>
          </div>
          <div className={classes.textBlock27}>40 &amp; 41. Pol na rang, Dhang aapna sang</div>
          <div className={classes.textBlock28}>46.Vaarso - toy Museum</div>
          <div className={classes.textBlock29}>47.Famous Cuisine</div>
          <div className={classes.textBlock30}>48.Calligraphy + Art Room</div>
          <div className={classes.textBlock31}>49.Music </div>
          <div className={classes.textBlock32}>50.Festivals</div>
          <div className={classes.textBlock33}>51.Skit Room</div>
          <div className={classes.textBlock34}>52.Gujarat Tourism</div>
          <div className={classes.textBlock35}>53.Research and Innovation</div>
          <div className={classes.textBlock36}> -Education Sector/Career</div>
          <div className={classes.textBlock37}> Opportunities + Career </div>
          <div className={classes.textBlock38}> Opportunities</div>
          <div className={classes.textBlock39}>54.New possible start ups in Ahmedabad </div>
        </div >
        <_2dButton_Property1Default className={classes._2dButton3} />
      </div>
      <Logo_Property1Default className={classes.logo2} classes={{ logo: classes.logo }} />
      <div className={classes.navBar}>
        <div className={classes.rectangle4}></div>
        <_3DViewLink_Property1Default
          className={classes._3DViewLink}
          text={{
            _3DView: <div className={classes._3DView2}>3D </div>,
          }}
        />
        <_2DViewLink_Property1Default
          className={classes._2DViewLink}
          text={{
            _2DView: <div className={classes._2DView2}>2D</div>,
          }}
        />
        <Info_Property1Default className={classes.info} />
      </div>
      <div className={classes._2dView}>
        <div className={classes._37452}>37-45 </div>
        <div className={classes._2dSubRectangle}></div>
        <div className={classes.primary2dPlan1}></div>
        <div className={classes._2dRectangle}></div>
        <div className={classes.sgvp2dView1}></div>
        <div className={classes._192746542}>19-27 &amp; 46-54 </div>
        <div className={classes._2DView3}>
          <p className={classes.labelWrapper6}>
            <span className={classes.label6}>2D View</span>
          </p>
        </div>
      </div>
    </div>
  );
});
