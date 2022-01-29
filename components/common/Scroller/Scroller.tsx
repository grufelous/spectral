import { ScrollerItem } from './ScrollerItem';
import styles from './Scroller.module.scss';

const Scroller = ({}): React.ReactElement => {
  const colors = [
    '#001219ff',
    '#005f73ff',
    '#0a9396ff',
    '#ca6702ff',
    '#bb3e03ff',
    '#ae2012ff',
    '#9b2226ff',
  ];

  const scrollerItems = colors.map(backgroundColor => (<ScrollerItem styleProps={{backgroundColor}} />));

  return (
    <div className={styles.scrollContainer}>
      {scrollerItems}
    </div>
  );

};

export { Scroller };