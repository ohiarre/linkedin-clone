import React, { useEffect, useState }  from 'react';
import './Feed.css';
 import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp,  } from 'firebase/firestore';
import { db } from './firebase';
import Post from './Post';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from "react-flip-move";


function Feed() {

const user = useSelector(selectUser)

  const [posts, setPosts] = useState([]);

  const [input, setInput] = useState('');

  
  useEffect(() => {

    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
    // Set up a listener for real-time updates on the 'posts' collection
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts
  

  const sendPost = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, 'posts'), {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timestamp: serverTimestamp(),
    });
    

    setInput(''); // clears input after submitting
  };



  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
               <input  value={input} onChange={e => setInput(e.target.value)}type='text' />
            <button onClick={sendPost} type='submit'>
              Send
            </button>
          </form>
        </div>
        <div className='feed_inputOptions'>
          <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
          <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
          <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
          <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E' />
        </div>
      </div>
      {/* Posts */}

      <FlipMove>


{posts.map(({ id, data: { name, description, message, photoUrl }}) => (
  <Post
    key={id}
    name={name}
    description={description}
    message={message}
    photoUrl={photoUrl}
  />
))}
      </FlipMove>

    </div>
  );
}

export default Feed;
