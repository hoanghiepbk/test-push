
const SearchBar = ({searchFunc , placeholder}) => {
  return (
    <div>
      <input type="search" placeholder={placeholder} onChange={searchFunc}/>
    </div>
  )
}

export default SearchBar;
