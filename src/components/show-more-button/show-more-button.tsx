type ShowMoreButtonProps = {
  onShown: () => void;
}

export const ShowMoreButton = ({ onShown } :ShowMoreButtonProps): JSX.Element => (
  <div className="catalog__more">
    <button className="catalog__button" type="button" onClick={onShown}>Show more</button>
  </div>
);

