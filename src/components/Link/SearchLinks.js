import React, { useState, useEffect, useContext} from "react";
import LinkItem from './LinkItem';
import FirebaseContext from '../../firebase/context';

const SearchLinks = () => {
  const [filter, setFilter] = useState("");
  const [links, setLinks] = useState([]);
  const [filteredLinks, setFilteredLinks] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    getInitalLinks();
  })

  function getInitalLinks() {
    firebase.db.collection('links').get().then(snapshot => {
      const links = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      setLinks(links)
    })
  }

  function handleSearch(event) {
    event.preventDefault();
    const query = filter.toLowerCase();
    const matchedLinks = links.filter(link => {
      return (
        link.description.toLowerCase().includes(query) ||
        link.url.toLowerCase().includes(query) ||
        link.postedBy.name.toLowerCase().includes(query)
      );
    });
    setFilteredLinks(matchedLinks);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div>
        Search <input onChange={event => setFilter(event.target.value)} />
        <button>Ok</button>
        </div>
      </form>
      {filteredLinks.map((filteredLink, index) => (
        <LinkItem 
          key={filteredLink.id} 
          showCount={false}
          link={filteredLink}
          index={index}
          />
      ))}
    </div>
  )
}

export default SearchLinks;