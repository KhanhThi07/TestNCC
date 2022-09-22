import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function Footer() {
  return <h4 className={cx('footer')}>Copyright © 2021</h4>;
}

export default Footer;
