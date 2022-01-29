import styles from './ScrollerItem.module.scss';

type ScrollerItemProps = {
  styleProps: {
    backgroundColor: string;
  };
};

const ScrollerItem = ({ styleProps }: ScrollerItemProps): JSX.Element => {
  return (
    <div className={styles.itemContainer} style={styleProps}>
      {styleProps.backgroundColor}
    </div>
  );
};

export { ScrollerItem };