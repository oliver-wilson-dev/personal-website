import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import DownloadButton from '../DownloadButton';
import Footer from '../Footer';
import Landing from '../Landing';
import Sections from '../Sections';
import SocialMedia from '../SocialMedia';
import ToggleSwitch from '../../containers/ToggleSwitch';

const App = ({ useLightTheme }) => (
  <div className={styles.app} data-theme={useLightTheme}>
    <div className={styles.appContent}>
      <ToggleSwitch />
      <Landing />
      <Sections />
      <DownloadButton />
      <SocialMedia />
      <Footer />
    </div>
  </div>
);

App.propTypes = {
  useLightTheme: PropTypes.bool.isRequired
};

export default App;