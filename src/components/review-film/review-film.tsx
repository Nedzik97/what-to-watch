import { useMainPageSelector } from '../../hooks';
import { getFormatDate } from '../../const';

export const ReviewFilm = (): JSX.Element => {
  const { commentsList } = useMainPageSelector((state) => state);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">

        {commentsList.map((comment) =>
          (
            <div className="review" key={comment.id}>
              <blockquote className="review__quote">
                <p className="review__text">{comment.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{comment.user.name}</cite>
                  <time className="review__date" dateTime={comment.date}>{getFormatDate(comment.date)}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{comment.rating}</div>
            </div>
          )
        )}

      </div>
    </div>
  );
};

