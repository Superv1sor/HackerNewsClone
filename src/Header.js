import SearchForm from "./SearchForm";

export default function Header({setQuery}) {
    return (
    <header className="SearchHeader container">
        <div className="SearchHeader_search">
            <a className="SearchHeader_logo" href="/">
                <img src="//d3nb9u6x572n0.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png" />
                <div className="SearchHeader_label">Search<br />Hacker News Clone</div>
            </a>
            <div className="SearchHeader_container">
                <span className="SearchIcon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>
                <SearchForm setQuery={setQuery} />
            </div>
        </div>
    </header>
    );
}
