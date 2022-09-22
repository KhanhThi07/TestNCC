import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu from '~/components/Layout/DefaultLayout/Menu';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    title: 'Services',
    separate: true,
  },
  {
    title: 'News',
    separate: true,
  },
  {
    title: 'Blog',
    separate: true,
  },
  {
    title: 'Contact',
    separate: true,
  },
];
function Siderbar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu items={MENU_ITEMS} />
    </aside>
  );
}

export default Siderbar;
