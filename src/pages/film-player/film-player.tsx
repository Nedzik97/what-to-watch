import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMainPageSelector } from '../../hooks';
import { debounce } from '../../utils/debounce';
import cx from 'classnames';
import { AppRoute } from '../../const';

type MoviePlayerProps = {
  videoSrc: string;
  posterSrc: string;
  isHovered: boolean;
}

export const FilmPlayer = ({ videoSrc, posterSrc, isHovered }: MoviePlayerProps): JSX.Element => {

  const navigate = useNavigate();
  const { filmPreview } = useMainPageSelector((state) => state);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPromoMode, setIsPromoMode] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
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

  useEffect(() => {
    const videoElement = videoRef.current;


    const handleTimeUpdate = () => {
      setCurrentTime(videoElement?.currentTime || 0);
    };

    const handleLoadedMetadata = () => {
      setDuration(videoElement?.duration || 0);
    };

    videoElement?.addEventListener('timeupdate', handleTimeUpdate);
    videoElement?.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      videoElement?.removeEventListener('timeupdate', handleTimeUpdate);
      videoElement?.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };

  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    setIsPromoMode(false);
  };

  const formatTime = (timeInSeconds: number): string => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    const formattedTime = `${hours > 0 ? `-${hours.toString().padStart(2, '0')}:` : ''}${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return formattedTime;
  };

  const handleFullScreenClick = () => {
    const playerElement = videoRef.current;

    if (playerElement) {
      if (document.fullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      } else {
        if (playerElement.requestFullscreen) {
          playerElement.requestFullscreen();
        }
      }
    }
  };

  const handleClosePlayer = () => {
    navigate(AppRoute.Film);
  };

  const togglerStyleFilm = {
    left: `${(currentTime / duration) * 100}%`,
  };


  const togglerStyle = {
    left: '30%',
  };
  return (
    <div className={cx('player', {
      'small-player__style' : isHovered,
    })}
    >
      <video src={isPromoMode ? videoSrc : filmPreview?.videoLink} ref={videoRef} className="player__video" poster={isPromoMode ? posterSrc : filmPreview?.posterImage} >
      </video>
      <button type="button" className="player__exit" onClick={handleClosePlayer}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={(currentTime / duration) * 100} max="100"></progress>
            <div className="player__toggler" style={isPromoMode ? togglerStyle : togglerStyleFilm}>Toggler</div>
          </div>
          <div className="player__time-value">{formatTime(currentTime)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={togglePlay}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenClick}>
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

