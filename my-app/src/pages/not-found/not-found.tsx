import { Link } from 'react-router-dom';
import SearchAppBar from '../../components/app-bar/app-bar';
import { AppRoute } from '../../const/const';
import './not-found.module.css';

function NotFound(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <SearchAppBar />
      <section className="wrapper">
        <h1 className="heading">🙁 404. Page not found</h1>
        <Link to={AppRoute.Contacts} className="linkMain">
          Вернуться на главную
        </Link>
      </section>
    </div>
  );
}

export default NotFound;