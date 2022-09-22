import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Header({ title }) {
  return (
    <header className={cx('header')}>
      <div className={cx('header-title')}>{title}</div>
    </header>
  );
}

export default Header;
