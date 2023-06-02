async function getBooksData() {
    try {
      const response = await fetch("https://anapioficeandfire.com/api/books");
      const books = await response.json();
  
      books.slice(0, 10).forEach(book => {
        displayBookDetails(book);
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  function displayBookDetails(book) {
    const booksContainer = document.getElementById("books-container");
  
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");
  
    const titleElement = document.createElement("h2");
    titleElement.textContent = book.name;
  
    const isbnElement = document.createElement("p");
    isbnElement.textContent = `ISBN: ${book.isbn}`;
  
    const pagesElement = document.createElement("p");
    pagesElement.textContent = `Pages: ${book.numberOfPages}`;
  
    const authorsElement = document.createElement("p");
    authorsElement.textContent = `Authors: ${book.authors.join(", ")}`;
  
    const publisherElement = document.createElement("p");
    publisherElement.textContent = `Publisher: ${book.publisher}`;
  
    const releasedElement = document.createElement("p");
    releasedElement.textContent = `Released: ${book.released}`;
  
    const charactersElement = document.createElement("p");
    charactersElement.textContent = `Characters: ${book.characters.slice(0, 5).join(", ")}`;
  
    bookElement.appendChild(titleElement);
    bookElement.appendChild(isbnElement);
    bookElement.appendChild(pagesElement);
    bookElement.appendChild(authorsElement);
    bookElement.appendChild(publisherElement);
    bookElement.appendChild(releasedElement);
    bookElement.appendChild(charactersElement);
  
    booksContainer.appendChild(bookElement);
  }
  
  getBooksData();