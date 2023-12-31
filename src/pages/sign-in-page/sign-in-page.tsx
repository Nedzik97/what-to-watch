import { Helmet } from 'react-helmet-async';
import { Logo } from '../../components/logo/logo';
import { SignInForm } from '../../components/sign-in-form/sign-in-form';

export const SingInPage = (): JSX.Element => (
  <div className="user-page">
    <Helmet>
      <title>WTW Sign in</title>
    </Helmet>
    <header className="page-header user-page__head">
      <Logo/>
      <h1 className="page-title user-page__title">Sign in</h1>
    </header>
    <div className="sign-in user-page__content">
      <SignInForm/>
    </div>

    <footer className="page-footer">
      <Logo isLight/>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>
);
