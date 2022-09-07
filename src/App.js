import './App.css';
import AddPostForm from './Components/AddPostForm';
import PostsList from './Components/PostsList';

function App() {
  return (
    <div className='bg-pink-100'>
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
