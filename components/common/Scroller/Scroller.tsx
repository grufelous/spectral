import { ScrollerItem } from './ScrollerItem';
import styles from './Scroller.module.scss';
import titleStyles from './Title.module.scss';

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

  const scrollerItems = colors.map((backgroundColor, index) => (
    <ScrollerItem 
      styleProps={{backgroundColor}} 
      isFullHeight={!!(index%2)} 
      key={index}
    />)
  );

  return (
    <div className={styles.scrollContainer}>
      <ScrollerItem
        styleProps={{backgroundColor: '#e9d8a6ff'}}
        isFullHeight
      >
        <div className={titleStyles.container}>
          <h1>Hi, I am <span className={titleStyles.primaryHighlight}>Pratik Anand</span></h1>
          <p>Dev. I know A, B, and C. I have worked with D, E, and F. Find me doing X. </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia culpa hic suscipit architecto dignissimos sapiente autem temporibus animi quasi praesentium placeat doloremque quis ipsa, id odit cumque quaerat quas quia.</p>
        </div>
      </ScrollerItem>
      <ScrollerItem
        styleProps={{backgroundColor: '#0a9396ff'}}
        isFullHeight
      >
        <div className={titleStyles.container}>
          <h1>Hi, I am <span className={titleStyles.primaryHighlight}>Pratik Anand</span></h1>
          <p>Dev. I know A, B, and C. I have worked with D, E, and F. Find me doing X. </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia culpa hic suscipit architecto dignissimos sapiente autem temporibus animi quasi praesentium placeat doloremque quis ipsa, id odit cumque quaerat quas quia.</p>
        </div>
      </ScrollerItem>
      {scrollerItems}

    </div>
  );

};

export { Scroller };