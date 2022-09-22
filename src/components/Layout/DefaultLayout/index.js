import Siderbar from './Siderbar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Footer from '~/components/Layout/DefaultLayout/Footer';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Siderbar />
        <div className={cx('content')}>
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
