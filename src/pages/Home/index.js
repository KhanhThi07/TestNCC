import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx('home-page')}>
      <img src={images.logo} alt="ncc" />
      <div className={cx('group1')}>
        <h3>Lorem ipsum dolor sit asmet?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor
          pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in
          mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
          mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus
          vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed
          semper turpis pellentesque a.
        </p>
      </div>
      <div className={cx('group')}>
        <div className={cx('group2')}>
          <h2>Lorem ipsum dolor sit amet</h2>
          <img src={images.image1} />
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere
            felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in
            metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat
            velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa
            in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
          </h4>
        </div>
        <div className={cx('group3')}>
          <h2>Lorem ipsum dolor sit amet</h2>
          <img src={images.image2} />
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere
            felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in
            metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat
            velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa
            in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
          </h4>
        </div>
        <div className={cx('group4')}>
          <h2>Lorem ipsum dolor sit amet</h2>
          <img src={images.image3} />
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere
            felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in
            metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat
            velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa
            in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
