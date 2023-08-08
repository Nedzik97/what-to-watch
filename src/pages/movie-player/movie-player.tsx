import { useRef, useState, useEffect } from 'react';
import { debounce } from '../../utils';
import cx from 'classnames';

type MoviePlayerProps = {
  videoSrc: string;
  posterSrc: string;
  isHovered: boolean;
}

export const MoviePlayer = ({ videoSrc, posterSrc, isHovered }: MoviePlayerProps): JSX.Element => {

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const timeoutIdRef = useRef<NodeJS.Timeout |undefined>(undefined);

  useEffect(() => {

    const handleMouseEnter: () => void = debounce(() => {
      setIsPlaying(true);
    }, 1000);

    const handleMouseLeave = () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
      setIsPlaying(false);
    };

    const videoElement = videoRef.current;

    videoElement?.addEventListener('mouseenter', handleMouseEnter);
    videoElement?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      videoElement?.removeEventListener('mouseenter', handleMouseEnter);
      videoElement?.removeEventListener('mouseleave', handleMouseLeave);
    };
  },[]);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (isPlaying) {
      videoElement?.play();
    } else {
      videoElement?.pause();
      if (videoElement && !isPlaying) {
        videoElement.currentTime = 0;
      }
    }
  }, [isPlaying]);


  const togglerStyle = {
    left: '30%',
  };
  return (
    <div className={cx('player', {
      'small-player__style' : isHovered,
    })}
    >
      <video src={videoSrc} ref={videoRef} className="player__video" poster={posterSrc} muted>
      </video>
      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={togglerStyle}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

