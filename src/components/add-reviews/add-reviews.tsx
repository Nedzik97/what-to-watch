import {Link} from 'react-router-dom';
import {useState} from 'react';
import { Logo } from '../logo/logo';
import { AppRoute } from '../../const';

export const AddReviews = (): JSX.Element => {
  const [formReview, setFormReview] = useState<{rating: string; reviewText: string}>({
    rating: '',
    reviewText: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setFormReview((prev) => ({
      ...prev,
      rating: event.target.value
    }));
  };

  const handleTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {

    setFormReview((prev) => ({
      ...prev,
      reviewText: event.target.value
    }));
  };


  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // eslint-disable-next-line no-console
    console.log(formReview);
    setFormReview({rating: '', reviewText: ''});
  };

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Film} className="breadcrumbs__link">The Grand Budapest Hotel</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={AppRoute.AddReview} >Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href="/" >Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={handleSubmitForm}>
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-10" type="radio" name="rating" value="10" checked={formReview.rating === '10'} onChange={handleInputChange}/>
              <label className="rating__label" htmlFor="star-10">Rating 10</label>

              <input className="rating__input" id="star-9" type="radio" name="rating" value="9" checked={formReview.rating === '9'} onChange={handleInputChange}/>
              <label className="rating__label" htmlFor="star-9">Rating 9</label>

              <input className="rating__input" id="star-8" type="radio" name="rating" value="8" checked={formReview.rating === '8'} onChange={handleInputChange}/>
              <label className="rating__label" htmlFor="star-8">Rating 8</label>

              <input className="rating__input" id="star-7" type="radio" name="rating" value="7" checked={formReview.rating === '7'} onChange={handleInputChange}/>
              <label className="rating__label" htmlFor="star-7">Rating 7</label>

              <input className="rating__input" id="star-6" type="radio" name="rating" value="6" checked={formReview.rating === '6'} onChange={handleInputChange}/>
              <label className="rating__label" htmlFor="star-6">Rating 6</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" checked={formReview.rating === '5'} onChange={handleInputChange}/>
              <label className="rating__label" htmlFor="star-5">Rating 5</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" checked={formReview.rating === '4'} onChange={handleInputChange}/>
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" checked={formReview.rating === '3'} onChange={handleInputChange}/>
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" checked={formReview.rating === '2'} onChange={handleInputChange}/>
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-1" type="radio" name="rating" value="1" checked={formReview.rating === '1'} onChange={handleInputChange}/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={formReview.reviewText} onChange={handleTextArea}></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
};
