import './search.css';
import {useState} from "react";
import {searchStore} from "@/store/store";
import {observer} from "mobx-react";
import Link from 'next/link';

const Search = observer (() => {
    const [showResults, setShowResults] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    const handleInputChange = (event: { target: { value: string; }; }) => {
        setSearchInput(event.target.value);
        searchStore.setSearchQuery(event.target.value);
        setShowResults(true);
    };

    return (
        <div className="search-container">
          <div className="search-bar">
            <input
                type="text"
                placeholder="Search a movie..."
                value={searchInput}
                onChange={handleInputChange}
                onFocus={() => setShowResults(true)}
                onBlur={() => setTimeout(() => setShowResults(false), 300)}
            />
          </div>
          {showResults && (
            <div className="search-results">
              {searchStore.filteredMovies
                  .slice(0, 5) // Slice the array to only include the first 5 movies
                  .map((movie, index) => (
                      <Link key={index} href={`/movies/${movie.slug}`} legacyBehavior>
                        <div><a onClick={() => setSearchInput('')}>{movie.title}</a></div>
                      </Link>
                  ))
              }
            </div>
          )}
        </div>
    );
});

export default Search;
