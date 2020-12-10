import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import SearchBox from '../../components/search-box/search-box.component.jsx';
import TournamentList from '../../components/tournament-list/tournament-list.component.jsx';
import Nav from '../../components/navbar/navbar.component.jsx';
import Favorites from '../../components/favorites/favorites.component.jsx';

import { getFavoriteTournaments } from '../../redux/tournament/tournament.actions';

function Home({ getFavoriteTournaments }) {
  useEffect(() => {
    let user = localStorage.getItem('user_id');
    getFavoriteTournaments(user);
  }, [getFavoriteTournaments]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Nav />
      <div className='container'>
        <div className='card'>
          <div className='card-content'>
            <SearchBox handleSubmit={handleSubmit} />
          </div>
        </div>
        <div className='row'>
          <Favorites />

          <div className='col s12'>
            <TournamentList />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tournaments: state.tournaments.tournaments,
});

export default connect(mapStateToProps, { getFavoriteTournaments })(Home);
