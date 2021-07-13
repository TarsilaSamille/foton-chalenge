import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import Result from "./Result";
import Home from "./Home";

const url_books = "https://www.googleapis.com/books/v1/volumes?q=";

function SearchForm(props) {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [indx, setIndx] = useState(0);

  useEffect(() => {
    if (query !== "") searchBook();
  }, [query]);

  useEffect(() => {}, [books, indx]);

  const searchBook = async () => {
    const request = await fetch(url_books + query + "&startIndex=" + indx);
    const response = await request.json();
    setBooks(books ? books.concat(response.items) : response.items);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setIndx(0);
    setBooks([]);
    setSearch(e.target.value);
    setQuery(search);
  };
  const handleClick = (e) => {
    setIndx(indx + 10);
    searchBook();
  };

  return (
    <div>
      <div
        className={`search ${css(styles.content_box, styles.content_box_lyt)}`}
      >
        <div className={css(styles.content_box_spacer)} />
        <img
          src={"/assets/searchIcon.svg"}
          className={css(styles.cover_group, styles.cover_group_lyt)}
        />
        <div className={css(styles.content_box_spacer1)} />
        <div className={css(styles.content_box_col)}>
          <input
            className={css(styles.search_book, styles.search_book_lyt)}
            type="text"
            placeholder="Search book"
            value={search}
            onChange={handleChange}
          />
        </div>
      </div>
      {search === "" ? (
        <Home books={props.books} />
      ) : (
        <center>
          <div className={css(styles.flex, styles.flex_lyt)}>
            <div className={css(styles.flex1, styles.flex1_lyt)}>
              {books && books.map((b, indx) => <Result key={indx} book={b} />)}
            </div>
          </div>
          <button onMouseUp={handleClick} className={css(styles.load)}>
            load more
          </button>
        </center>
      )}
    </div>
  );
}

export default SearchForm;

const styles = StyleSheet.create({
  load: {
    background: " #f3f3f3",
    padding: "10px",
    borderRadius: "10px",
    border: "solid 1px #aaa",
    display: "inline-block",
    marginBottom: 100,
  },
  flex: { display: "flex" },
  flex_lyt: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: 20,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  flex1: {
    display: "contents",
  },

  content_box: {
    display: "inline-flex",
    backgroundColor: "rgb(254,253,253)",
    borderRadius: "10px 10px 10px 10px",
    marginLeft: "20px",
  },
  content_box_lyt: {
    position: "relative",
    overflow: "visible",
    minHeight: 48,
    flexGrow: 1,
    minWidth: "87vw",
  },
  content_box_spacer: { display: "flex", flex: "0 0 auto", minWidth: 19 },
  cover_group: {
    display: "flex",
    background: "var(--src) center center / cover no-repeat",
  },
  cover_group_lyt: {
    position: "relative",
    overflow: "visible",
    flex: "0 1 10.67px",
    height: 16,
    margin: "17.33px 0px 20px",
  },
  content_box_spacer1: { display: "flex", flex: "0 0 auto", minWidth: 11.83 },
  content_box_col: { display: "flex", flex: "0 0 auto", minWidth: 294.5 },
  search_book: {
    display: "flex",
    justifyContent: "center",
    font: '18px/1.125 "SFProText", Helvetica, Arial, serif',
    textAlign: "center",
    letterSpacing: "0",
    width: "80%",
    border: "none",
    textAlign: "initial",
    ":focus": {
      outline: "none",
    },
  },
  search_book_lyt: {
    position: "relative",
    margin: "15px 0px",
  },
});
