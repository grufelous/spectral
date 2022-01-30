import styles from './ScrollerItem.module.scss';

type ScrollerItemProps = {
  styleProps?: {
    backgroundColor: string;
  };
  isFullHeight: boolean;
  children?: JSX.Element | JSX.Element[];
};

const ScrollerItem = ({ styleProps, isFullHeight, children }: ScrollerItemProps): JSX.Element => {
  return (
    <div className={`${styles.itemContainer} ${isFullHeight ? styles.fullHeight : null}`} style={styleProps}>
      {children}
    </div>
  );
};

export { ScrollerItem };