/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import Discover from "./Discover";
import Currently from "./Currently";
import Bar from "./Bar";
import Title from "./Title";

export default function Home(props) {
  return (
    <div className={`home ${css(styles.content_box, styles.content_box_lyt)}`}>
      <div className={css(styles.group, styles.group_lyt2)}>
        <div className={css(styles.group, styles.group_lyt1)}>
          <h3 className={css(styles.subtitle_box, styles.subtitle_box_lyt)}>
            <pre className={css(styles.subtitle)}>
              <span className={css(styles.subtitle_span0)}>{"Hi, "}</span>
              <span className={css(styles.subtitle_span1)}>
                {"Mehmed Al Fatih  👋"}
              </span>
              <span className={css(styles.subtitle_span2)}> </span>
            </pre>
          </h3>
        </div>
      </div>

      <div className={css(styles.flex, styles.flex_lyt)}>
        <div className={css(styles.component, styles.component_lyt)}>
          <Discover books={props.books} />
        </div>
        <div className={css(styles.component, styles.component_lyt1)}>
          <Currently books={props.books} />
        </div>
      </div>
      <div className={css(styles.flex1, styles.flex1_lyt)}>
        <div className={css(styles.flex1_row)}>
          <Title title={"Reviews of The Days"} linkName={"All video"} />
        </div>
        <img
          src="/assets/0a67f21ffd03b36205611ee74ad1f5e9.png"
          className={css(styles.image, styles.image_lyt)}
        />
      </div>
    </div>
  );
}

Home.inStorybook = true;

const styles = StyleSheet.create({
  content_box: { display: "flex" },
  content_box_lyt: {
    position: "relative",
    overflow: "hidden",
    minHeight: 812,
    flexGrow: 1,
    margin: 0,
  },
  group: { display: "flex" },
  group_lyt: {
    position: "absolute",
    overflow: "visible",
    top: 0,
    height: 112,
    left: 0,
    flexGrow: 1,
    right: 0,
    margin: "0px 0px 700px",
  },
  group1: { display: "flex" },
  group1_lyt: {
    position: "absolute",
    overflow: "visible",
    top: 50,
    height: "min-content",
    minHeight: 48,
    left: 19,
    right: 20,
  },
  cover_group: { position: "relative" },
  cover_group_lyt: { position: "relative", height: 48, flexGrow: 1, margin: 0 },
  group_lyt2: {
    position: "absolute",
    overflow: "visible",
    top: 0,
    height: 66,
    left: 0,
    flexGrow: 1,
    right: 0,
    margin: "0px ",
  },
  group: { display: "flex" },
  group_lyt1: {
    position: "absolute",
    overflow: "visible",
    top: 16,
    height: 28,
    left: 19,
    right: 99,
  },
  group: { display: "flex" },
  subtitle: {
    overflow: "visible",
    marginTop: 0,
    marginBottom: 0,
    font: '24px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0",
    whiteSpace: "pre-wrap",
  },
  subtitle_box: {},
  subtitle_box_lyt: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0,
  },
  subtitle_span0: {
    font: '1em/1.2 "SF Pro Display", Helvetica, Arial, serif',
    color: "#55575bff",
    letterSpacing: "0",
  },
  subtitle_span1: {
    font: '1em/1.2 "SF Pro Display", Helvetica, Arial, serif',
    color: "#ff6a79ff",
    letterSpacing: "0",
  },
  subtitle_span2: {
    font: '1em/1.2 "SF Pro Display", Helvetica, Arial, serif',
    color: "#55575bff",
    letterSpacing: "0",
  },
  subtitle1: {
    display: "flex",
    justifyContent: "flex-end",
    font: '24px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(85,87,91)",
    textAlign: "right",
    letterSpacing: "0",
  },
  subtitle1_lyt: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0,
  },
  flex: { display: "flex", flexDirection: "column", flexWrap: "wrap" },
  flex_lyt: {
    position: "absolute",
    overflow: "visible",
    top: 178,
    bottom: 242,
    left: 0,
    flexGrow: 1,
    right: 0,
    margin: "-90px 0 0 0",
  },
  component: { position: "relative", flex: "0 0 auto" },
  component_lyt: { position: "relative", height: 212, margin: 0 },
  component_lyt1: { position: "relative", height: 180, margin: 0 },
  flex1: { display: "flex", flexDirection: "column" },
  flex1_lyt: {
    position: "absolute",
    overflow: "visible",
    height: 217,
    bottom: 7,
    left: 20,
    right: 20,
    margin: "60px 0",
  },
  flex1_row: { display: "flex", flex: "0 1 28.5px" },
  flex2: { display: "flex" },
  flex2_lyt: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: "0px 0px 7.5px",
  },
  text_body: {
    font: '500 18px/1.2 "SFProDisplay", Helvetica, Arial, serif',
    color: "rgb(64,65,67)",
    letterSpacing: "0.5",
  },
  text_body_lyt: { position: "relative", flex: "0 0 auto", margin: 0 },
  flex2_spacer: { display: "flex", flex: "1 1 101px" },
  flex2_col: { display: "flex", flex: "0 0 auto", minWidth: 59 },
  all_video: {
    display: "flex",
    justifyContent: "flex-end",
    font: '500 14px/1.2 "SFProText", Helvetica, Arial, serif',
    color: "rgb(75,190,241)",
    textAlign: "right",
    letterSpacing: "0",
  },
  all_video_lyt: { position: "relative", flexGrow: 1, margin: "3px 0px 2px" },
  image: { background: "var(--src) center center / contain no-repeat" },
  image_lyt: { position: "relative", height: 181, margin: "7.5px 0px 0px" },
  group4: {
    position: "absolute",
    overflow: "visible",
    height: 59,
    bottom: 4,
    left: 0,
    right: 0,
    display: "flex",
    position: "fixed",
  },
  cover_group_lyt1: {
    position: "relative",
    height: 59,
    flexGrow: 1,
    margin: 0,
  },
});
