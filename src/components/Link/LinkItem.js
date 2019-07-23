import React, { useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import FirebaseContext from '../../firebase/context';

const LinkItem = ({ link, index, showCount, history }) => {
    const { firebase, user } = useContext(FirebaseContext);

    function getDomain(url) {
        return url.replace(/^https?:\/\//i, "");
    }

    function handleVote() {
        console.log('clicked')
        if(!user) {
            history.push('/login')
        } else {
            const voteRef = firebase.db.collection('links').doc(link.id);
            voteRef.get().then(doc => {
                if(doc.exists) {
                    const prevVotes = doc.data().votes;
                    const vote = {
                        votedBy: {
                            id: user.uid,
                            name: user.displayName
                        }
                    }
                    const updatedVotes = [...prevVotes, vote]
                    voteRef.update({ votes: updatedVotes })
                }
            })
        }
    }

    function handleDeleteLink() {
        const linkRef = firebase.db.collection('links').doc(link.id);
        linkRef.delete().then(console.log(link.id))
    }

    const postedByAuthUser = user && user.uid === link.postedBy.id

    return (
        <div className="flex items-start mt2">
            <div className="flex items-center">
                { showCount && (
                    <span className="gray">{index}.</span>
                )}
                <div 
                    style={{fontSize: '20px', color: 'green', cursor: 'pointer'}}
                    className="vote-button"
                    onClick={handleVote}    
                >+</div>
            </div>
            <div className="ml1">
                <div>
                    {link.description} 
                    <span className="link">({getDomain(link.url)})</span>
                </div>
                <div className="f6 lh-copy gray">
                    {link.votes.length} Votes by: {link.postedBy.name} {distanceInWordsToNow(link.created)}
                    { " | "}
                    <Link to={`/link/${link.id}`}>
                        {link.comments.length > 0 
                            ? `${link.comments.length} Comments`
                            : 'Discus'}
                    </Link>
                    {postedByAuthUser && (
                        <>
                            { " | "}
                            <span 
                                className="delete-button"
                                onClick={handleDeleteLink}
                                >Delete</span>
                        </>
                    )}
                </div>
            </div>
        </div>
    )

}

export default withRouter(LinkItem);