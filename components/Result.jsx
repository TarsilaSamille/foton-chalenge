import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import Link from "next/link";

export default function Result(props) {
  const { book } = props;

  const ats = book.volumeInfo.authors;
  const author = ats
    ? "by " + ats[0].split(" ")[0] + " " + ats[0].split(" ")[ats.length]
    : "unknow";

  return (
    <div className={css(styles.flex, styles.flex_lyt)}>
      <a href={`/detalhes/${book.id}`} className={css(styles.link)}>
        <img
          src={
            "http://books.google.com/books/content?id=" +
            book.id +
            "&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
          }
          className={css(styles.img, styles.img_lyt)}
        />
        <div
          className={css(styles.small_text_body, styles.small_text_body_lyt)}
        >
          {book.volumeInfo.title}
        </div>
        <div
          className={css(styles.small_text_body1, styles.small_text_body1_lyt)}
        >
          {author}
        </div>
      </a>
    </div>
  );
}

const styles = StyleSheet.create({
  flex: { display: "flex", flexDirection: "column" },
  flex_lyt: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: "12px 9px",
    width: 120,
    maxWidth: 100,
  },
  link: {
    textDecoration: "none",
    textAlign: "left",
  },
  img: { background: "var(--src) center center / cover no-repeat" },
  img_lyt: {
    position: "relative",
    height: 150,
    width: 100,
    minWidth: 100,
    margin: 0,
  },
  small_text_body: {
    font: '700 12px/1.2 "SF Pro Display", Helvetica, Arial, serif',
    letterSpacing: "0",
    opacity: 0.8,
    color: "#313131",
    maxHeight: 100,
    overflow: "hidden",
  },
  small_text_body_lyt: { position: "relative", margin: "10px 0px 0px" },
  small_text_body1: {
    font: '900 10px/1.2 "Roboto", Helvetica, Arial, serif',
    letterSpacing: "0",
    opacity: 0.8,
    color: "#313131",
  },
  small_text_body1_lyt: { position: "relative", margin: "5px 0px 0px" },
});
