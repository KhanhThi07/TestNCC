import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Header from './Header';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ items = [] }) {
  return (
    <div className={cx('menu-list')}>
      <Header title="Home" />
      {items.map((item, idx) => {
        return <MenuItem key={idx} data={item} />;
      })}
    </div>
  );
}
export default Menu;
