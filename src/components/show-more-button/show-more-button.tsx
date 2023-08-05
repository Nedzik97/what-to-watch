type ShowMoreButtonProps = {
  onClick: () => void;
}

export const ShowMoreButton = ({ onClick }: ShowMoreButtonProps) => (
  <div className="catalog__more">
    <button className="catalog__button" type="button" onClick={onClick}>Show more</button>
  </div>
);
