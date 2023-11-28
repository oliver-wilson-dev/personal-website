import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './index.css';
import NotificationEmoji from './notification.svg';
import TickEmoji from './tick.svg';

const textId = 'cookieText';

const CookieDisclaimerMessage = ({ learnMoreClicked, cookiePolicyAccepted }) => {
  const [acknowledged, setAcknowledged] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const onTransitionEnd = () => {
    if (acknowledged) {
      cookiePolicyAccepted();
      setClosed(true);
    }
  };

  const acknowledgeBanner = () => {
    setAcknowledged(true);
  };

  const learnMore = () => {
    acknowledgeBanner();
    learnMoreClicked();
  };

  return !closed && (
    <div
      role="region"
      aria-labelledby={textId}
      className={cn(styles.container, {
        [styles.loaded]: loaded && !acknowledged,
        [styles.closed]: acknowledged
      })}
      onTransitionEnd={onTransitionEnd}
    >
      <div className={styles.positionWrapper}>
        <NotificationEmoji className={cn(
          styles.notificationEmoji,
          styles.notificationElement
        )}
        />
        <span
          id={textId}
          className={cn(
            styles.message,
            styles.text,
            styles.notificationElement,
          )}
        >
          Attention! This site uses cookies.
          {' '}
          <button className={cn(styles.learnMoreBtn, styles.text)} type="button" onClick={learnMore}>Learn More</button>
        </span>
        <TickEmoji
          className={cn(styles.tick, styles.notificationElement)}
          onClick={acknowledgeBanner}
        />
      </div>
    </div>
  );
};

CookieDisclaimerMessage.propTypes = {
  learnMoreClicked: PropTypes.func.isRequired,
  cookiePolicyAccepted: PropTypes.func.isRequired
};

export default CookieDisclaimerMessage;
