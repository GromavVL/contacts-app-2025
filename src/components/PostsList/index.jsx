import { connect } from 'react-redux';
import { getpostsThunk } from '../../store/slices/postsSlice';
import { useEffect } from 'react';

function PostsList ({ posts, isFetching, error, getPosts }) {
  useEffect(() => {
    getPosts();
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
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

const mapStateToProps = ({ postsList }) => postsList;

const mapDispachToProps = dispach => ({
  getPosts: () => dispach(getpostsThunk()),
});

export default connect(mapStateToProps, mapDispachToProps)(PostsList);
