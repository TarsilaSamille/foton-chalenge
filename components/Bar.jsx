import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";

export default function Bar(props) {
  return (
    <div
      className={`bar ${css(styles.content_box, styles.content_box_lyt)}`}
      href="https://www.w3schools.com"
    >
      <a className={css(styles.flex, styles.flex_lyt)} href="#">
        <img
          src="/assets/casa.svg"
          alt="me"
          className={css(styles.image, styles.image_lyt)}
        />
        <div className={css(styles.link, styles.link_lyt, styles.active)}>
          {"Home"}
        </div>
      </a>

      <a className={css(styles.flex, styles.flex_lyt)} href="#">
        <img
          src="/assets/book.svg"
          alt="me"
          className={css(styles.image, styles.image_lyt, styles.l_lyt)}
        />
        <div className={css(styles.link, styles.link_lyt)}>{"Libraries"}</div>
      </a>

      <a className={css(styles.flex, styles.flex_lyt)} href="#">
        <img
          src="/assets/person.svg"
          alt="me"
          className={css(styles.image, styles.image_lyt)}
        />
        <div className={css(styles.link, styles.link_lyt)}>{"Profile"}</div>
      </a>
    </div>
  );
}

const styles = StyleSheet.create({
  content_box: {
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "rgb(255,255,255)",
  },
  content_box_lyt: {
    position: "absolute",
    overflow: "visible",
    top: 0,
    bottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0,
    ":hover": {
      color: "rgb(192,191,192)",
    },
  },
  content_box_spacer: { display: "flex", flex: "0 1 52px" },
  flex: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  flex_lyt: {
    position: "relative",
    overflow: "visible",
    flex: "0 1 30px",
    margin: "10px 0px 9px",
    textDecoration: "none",
  },
  image: { background: "var(--src) center center / contain no-repeat" },
  image_lyt: {
    position: "relative",
    height: 17.78,
    width: 16,
    minWidth: 16,
    margin: "0px 9px 0px 5px",
  },
  l_lyt: { margin: "0px 0px 0px 11px !important" },
  link: {
    font: '10px/1.2 "SF Pro Display", Helvetica, Arial, serif',
    color: "rgb(192,191,192)",
    letterSpacing: "0",
  },
  link_lyt: { position: "relative", margin: "10.22px 0px 0px" },
  libraries_lyt: { position: "relative", margin: "10px 0px 0px" },
  active: {
    color: "rgb(50,50,50)!important",
  },
});
