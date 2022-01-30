import { Header } from '../header';

import styles from './Layout.module.scss';

type LayoutProps = {
  children?: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return (<div>
    <Header />
    {children}
  </div>);
};

export { Layout };