import React from 'react';
import { Link } from 'react-router-dom';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

const LinkItem = ({ link, index, showCount }) => {

    function getDomain(url) {
        return url.replace(/^https?:\/\//i, "");
    }

    return (
        <div className="flex items-start mt2">
            <div className="flex items-center">
                { showCount && (
                    <span className="gray">{index}.</span>
                )}
                <div className="vote-button">+</div>
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
                </div>
            </div>
        </div>
    )

}

export default LinkItem;