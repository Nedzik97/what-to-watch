import { useNavigate } from 'react-router-dom';
import { Logo } from '../logo/logo';
import { UserBlock } from '../user-block/user-block';
import { ratingLevels } from '../../utils/utils';
import { useMainPageSelector, useMainPageDispatch } from '../../hooks';
import { useState } from 'react';
import { validateFormReview } from '../../utils/utils';
import { addReview } from '../../store/api-action';
import { FilmReview } from '../../types/films';

export const AddReviews = (): JSX.Element => {
  const { FILM } = useMainPageSelector((state) => state);
  const dispatch = useMainPageDispatch();
  const navigate = useNavigate();

  const [formField, setFormField] = useState({
    rating: '',
    textReview: ''
  });

  const handleRatingChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormField((prev) => ({
      ...prev,
      rating: evt.target.value
    }));
  };

  const handleTextChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormField((prev) => ({
      ...prev,
      textReview: evt.target.value
    }));
  };

  const transitionToFilmInfo = (evt: React.MouseEvent<HTMLAnchorElement>, id: number | undefined) => {
    evt.preventDefault();
    if (id !== undefined) {
      navigate(`/films/${id}`);
    }
  };

  const transitionToAddReview = (evt: React.MouseEvent<HTMLAnchorElement>, id: number | undefined) => {
    evt.preventDefault();
    if (id !== undefined) {
      navigate(`/films/${id}/review`);
    }
  };

  const validateForm = validateFormReview(formField.rating, formField.textReview);

  const onSubmit = (filmReview : FilmReview) => {
    dispatch(addReview(filmReview));
  };

  const handleAddReview = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (validateForm) {
      if (FILM) {
        onSubmit({
          id: filmPreview.id,
          rating: Number(formField.rating),
          comment: formField.textReview
        });
      }
    }
  };

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={filmPreview?.backgroundImage} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href='*' onClick={(evt) => transitionToFilmInfo(evt, filmPreview?.id)} className="breadcrumbs__link">{filmPreview?.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href='*' onClick={(evt) => transitionToAddReview(evt, filmPreview?.id)} >Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock/>

        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={filmPreview?.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form onSubmit={handleAddReview} className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {ratingLevels.map((rating) =>
                (
                  <>
                    <input className="rating__input" id={rating} type="radio" name="rating" checked={formField.rating === rating} value={rating} onChange={(evt) => handleRatingChange(evt)}/>
                    <label className="rating__label" htmlFor={rating}>{`Rating ${rating}`}</label>
                  </>
                )
              )}
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={formField.textReview} onChange={(evt) => handleTextChange(evt)}></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={!validateForm}>Post</button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
};
