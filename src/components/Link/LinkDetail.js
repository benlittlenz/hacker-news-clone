import React, { useEffect, useContext } from "react";
import FirebaseContext from '../../firebase/context';
import LinkItem from './LinkItem';

const LinkDetail = props => {
  const { firebase } = useContext(FirebaseContext);
  const [link, setLink] = useState(null);
  const [commentText, setCommentText] = useState('');
  const linkId = props.match.params.linkId;

  useEffect(() => {
    getLink()
  }, [])

  function getLink() {
    const linkRef = firebase.db.collection('links').doc(linkId);
    linkRef.get().then(doc => {
      setLink({
        ...doc.data(),
        id: doc.id
      })
    })
  }

  function handleAddComment() {
    
  }

  return !link ? (
    <div>Loading...</div>
  ) : (
    <div>
      <LinkItem 
        showCount={false}
        link={link}

      />
      <textarea
        onChange={event => setCommentText(event.target.value)}
        value={commentText}
        rows="6"
        cols="60"
      />
      <div>
        <button className="button"
          onClick={handleAddComment}  
        >Add Comment</button>
      </div>
    </div>
  )
}

export default LinkDetail;