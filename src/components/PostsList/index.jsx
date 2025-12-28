import { connect } from 'react-redux';
import { getpostsThunk } from '../../store/slices/postsSlice';
import { useEffect } from 'react';
import { getUsers } from '../../api';
import { getUsersThunk } from '../../store/slices/usersSlice';

function PostsList ({ posts, isFetching, error, getPosts, getUsers, users }) {
  useEffect(() => {
    getPosts();
    getUsers();
  }, []);
  return (
    <>
      {isFetching && <div>loading...</div>}
      {error && <div>ERROR!!!</div>}
      {!isFetching && !error && (
        <ul>
          {posts.map(p => (
            <li key={p.id}>
              <h3>{p.title}</h3>
              <span>{p.userId}</span>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

const mapStateToProps = ({ postsList, usersList: { users } }) => ({
  ...postsList,
  users,
});

const mapDispachToProps = dispach => ({
  getPosts: () => dispach(getpostsThunk()),
  getUsers: () => dispach(getUsersThunk()),
});

export default connect(mapStateToProps, mapDispachToProps)(PostsList);
