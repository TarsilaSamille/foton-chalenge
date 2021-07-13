import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";

export default function Title(props) {
  return (
    <div className={css(styles.flex, styles.flex_lyt)}>
      <div className={css(styles.text_body, styles.text_body_lyt)}>
        {props.title}{" "}
      </div>
      <div className={css(styles.more, styles.more_lyt)}>{props.linkName}</div>
    </div>
  );
}
const styles = StyleSheet.create({
  flex: { display: "flex" },
  flex_lyt: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: 0,
    maxWidth: "85vw",
  },
  text_body: {
    font: '500 18px/1.2 "SFProDisplay", Helvetica, Arial, serif',
    color: "rgb(64,65,67)",
    letterSpacing: "0.5",
  },
  more: {
    font: '500 14px/1.2 "SFProText", Helvetica, Arial, serif',
    color: "rgb(75,190,241)",
    textAlign: "right",
    letterSpacing: "0",
  },
  more_lyt: { position: "relative", flexGrow: 1, margin: "3px 0px 2px" },
});
