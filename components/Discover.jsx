/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import DiscoverBook from "./DiscoverBook";
import Title from "./Title";

export default function Discover(props) {
  const { books } = props;
  const [booksA, setBooksA] = useState(books);

  const left = () => {
    let b = books.filter((element, indx) => {
      return indx != 0;
    });
    setBooksA(books);
  };

  const rigth = () => {
    let b = booksA.filter((element, indx) => {
      return indx != 0;
    });
    setBooksA(b);
  };
  return (
    <div className={`discover ${css(styles.group, styles.group_lyt4)}`}>
      <div className={css(styles.group, styles.group1_lyt)}>
        <div className={css(styles.flex, styles.flex_lyt)}>
          <Title title={"Discover new book"} linkName={"More"} />

          <div
            className={css(styles.container, styles.group, styles.group_lyt3)}
          >
            {books.length !== booksA.length && (
              <div onClick={left} className={css(styles.group5)} />
            )}
            <img src="/assets/linhas.svg" className={css(styles.lines)} />
            {booksA.map((book, idx) => (
              <div
                key={book.id}
                className={idx === 0 ? css(styles.item1) : css(styles.item)}
              >
                <div onClick={rigth}>
                  <DiscoverBook book={book} idx={idx} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Discover.inStorybook = true;

const styles = StyleSheet.create({
  lines: {
    position: "absolute",
    margin: "-32px 72vw",
    zIndex: "1",
  },
  container: {
    display: "flex",
  },
  item: {
    width: "375px",
    margin: "5px -40px",
  },
  item1: {
    width: "375px",
    margin: "0 -40px 0 0",
  },
  group: { display: "flex" },
  group_lyt4: {
    position: "relative",
    overflow: "visible",
    height: 212,
    flexGrow: 1,
    margin: 0,
  },
  flex: { display: "flex", flexDirection: "column" },
  flex_lyt: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: 0,
  },
  group1: { display: "flex" },
  group1_lyt: {
    position: "absolute",
    overflow: "visible",
    top: 9,
    height: "min-content",
    minHeight: 175,
    left: 19,
    right: 20,
  },
  flex: { display: "flex", flexDirection: "column" },
  flex_lyt: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: 0,
  },
  text_body: {
    font: '500 18px/1.2 "SFProDisplay", Helvetica, Arial, serif',
    color: "rgb(64,65,67)",
    letterSpacing: "0.5",
  },
  text_body_lyt: { position: "relative", flex: "0 0 auto", margin: 0 },
  flex1_spacer: { display: "flex", flex: "1 1 143px" },
  flex1_col: { display: "flex", flex: "0 0 auto", minWidth: 36 },
  more: {
    display: "flex",
    justifyContent: "flex-end",
    font: '500 14px/1.2 "SFProText", Helvetica, Arial, serif',
    color: "rgb(75,190,241)",
    textAlign: "right",
    letterSpacing: "0",
  },
  more_lyt: { position: "relative", flexGrow: 1, margin: "3px 0px 2px" },
  group_lyt3: {
    position: "relative",
    overflow: "visible",
    minHeight: 139,
    margin: "15px 0px 0px",
  },
  group: { display: "flex" },
  flex2: { display: "flex" },
  flex2_lyt: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: 0,
  },
  group_lyt: {
    position: "relative",
    overflow: "visible",
    flex: "0 1 127.86px",
    height: 139,
    margin: 0,
  },
  group: { display: "flex" },
  group_lyt2: {
    position: "relative",
    overflow: "visible",
    flex: "0 1 144.14px",
    height: 139,
    margin: 0,
  },
  group: { display: "flex" },
  group5: {
    display: "flex",
    backgroundColor: "rgb(69, 20, 117)",
  },
  group5_lyt: {
    position: "absolute",
    overflow: "visible",
    top: 0,
    height: 139,
    left: -127.86,
    right: 0,
  },
  group_lyt1: {
    position: "relative",
    overflow: "visible",
    flex: "0 1 59px",
    height: 139,
    margin: 0,
  },
  group: { display: "flex" },
  group5: {
    backgroundColor:
      "rgb(0" +
      "," +
      Math.floor(Math.random() * 20) +
      "," +
      Math.floor(Math.random() * 40) +
      ")",
    boxShadow: "2px 4px 48px 0px rgba(155,175,209,0.6235294117647059)",
    borderRadius: "5px 5px 5px 5px",
    width: "30px",
    margin: "5px 20px 15px -30px",
  },
});
