import styles from './Header.module.scss';

type HeaderProps = {
  buttons?: any[];
};

const Header = ({ buttons }: HeaderProps): React.ReactElement => {
  return (<div>
    <ul>
      <li>
        Home
      </li>
      <li>My Work</li>
      <li>Get In Touch</li>
      <li>-</li>
    </ul>
  </div>);
};

export { Header };