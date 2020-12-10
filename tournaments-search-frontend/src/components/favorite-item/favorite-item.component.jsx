import { connect } from 'react-redux';

import { deleteFavorite } from '../../redux/tournament/tournament.actions';
import './favorite-item.component.css';

function FavoriteItem({
  deleteFavorite,
  tournament: { _id, image, title, description },
}) {
  const handleClick = (e) => {
    e.preventDefault();
    deleteFavorite(_id);
  };

  return (
    <li className='collection-item avatar'>
      <div className='row'>
        <div className='row'>
          <div className='col s3'>
            {image !== '/' ? (
              <img
                alt=''
                className='circle'
                src={`https://cdn-images.win.gg/${image}`}
              />
            ) : null}
          </div>
          <div className='col s6'>
            <p className='title flow-text'>
              <b>{title}</b>
            </p>
          </div>
        </div>
        <div className='row'>
          <p>{description}</p>
        </div>
      </div>
      <div className='row'>
        <button
          className='btn-floating btn-small waves-effect waves-light red'
          onClick={handleClick}
          title='Delete'
        >
          <i className='tiny material-icons'>clear</i>
        </button>
      </div>
    </li>
  );
}

export default connect(null, { deleteFavorite })(FavoriteItem);
