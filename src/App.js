import './App.css';
import { useState, useEffect } from 'react';
import SearchBar from './components/search-bar/search-bar.component';
import CardList from './components/card-list/card-list.component';

const App = () => {
  const [cardList , setCardList] = useState([]);
  const [searchField , setSearchField] = useState('');
  const [filterList , setFilterList] = useState(cardList);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log('1')
        return response.json()
      })
      .then((users) => {
        console.log('2');
        setCardList(users)
      })
  }, []);

  useEffect(() => {
    console.log('4', cardList)
    const filterList = cardList.filter((card) => {
      return card.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterList(filterList);
  },[cardList, searchField])

  const searchFunc = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  }
  return (
    <div className="App">
      <h1>List card</h1>
      <SearchBar searchFunc={searchFunc} placeholder="Type to search"></SearchBar>
      <CardList cardList={filterList}></CardList>
    </div>
  );
}

export default App;
