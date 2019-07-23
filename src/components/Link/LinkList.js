import React, { useContext, useEffect, useState } from "react";
import FirebaseContext from '../../firebase/context';
import LinkItem from './LinkItem';

const LinkList = ({ location }) => {
  const { firebase } = useContext(FirebaseContext);
  const [links, setLinks] = useState([]);
  const isNewPage = location.pathname.includes('new');

  useEffect(() => {
    getLinks()
  }, [])

  function getLinks() {
    firebase.db
      .collection('links')
      .orderBy('created', 'desc')
      .onSnapshot(handleSnapshot)
  }

  function handleSnapshot(snapshot) {
    const links = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })
    setLinks(links);
  }

  function renderLinks() {
    if(isNewPage) {
      return links
    } else {
      const topLinks = links.slice().sort((link1, link2) => 
        link2.votes.length - link1.votes.length
      )
      return topLinks;
    }
  }

  return (
    <div>
      {renderLinks().map((link, index) => (
        <LinkItem key={link.id} showCount={true} link={link} index={index + 1} />
      ))}
    </div>
  )
}

export default LinkList;