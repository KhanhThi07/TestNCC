import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu from '~/components/Layout/DefaultLayout/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
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
    <>
      <aside className={cx('wrapper')}>
        <Menu items={MENU_ITEMS} />
      </aside>
      <div className={cx('mobile-btn')}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </>
  );
}

export default Siderbar;
