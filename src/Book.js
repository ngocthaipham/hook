import React , {useState, useEffect} from 'react';

const Book = () => {
  const [booksList, setBooksList] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8080/books')
      .then(response => response.json())
      .then(data => {
        setBooksList(data);
      });
  },[])

  return (
    <pre>{JSON.stringify(booksList, null, 2)}</pre>
  )
}
  export default Book ;