import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";

export default function DetailBar(props) {
  return (
    <div className={css(styles.cover_group, styles.cover_group_lyt)}>
      <div className={css(styles.flex, styles.flex_lyt1)}>
        <div className={css(styles.flex1, styles.flex1_lyt)}>
          <img
            src="/assets/obook.svg"
            className={css(styles.image, styles.image_lyt)}
          />
          <div className={css(styles.flex1_spacer)} />
          <div className={css(styles.read, styles.read_lyt)}>{"Read"}</div>
        </div>

        <div className={css(styles.group, styles.group_lyt)}>
          <div className={css(styles.rect, styles.rect_lyt)} />
        </div>

        <div className={css(styles.flex2, styles.flex2_lyt)}>
          <img
            src="/assets/fone.svg"
            className={css(styles.image, styles.image_lyt)}
          />
          <div className={css(styles.flex2_spacer)} />
          <div className={css(styles.listen, styles.listen_lyt1)}>
            {"Listen"}
          </div>
        </div>

        <div className={css(styles.flex_spacer)} />
        <div className={css(styles.flex_col)}>
          <div className={css(styles.rect, styles.rect_lyt1)} />
        </div>
        <div className={css(styles.flex_spacer1)} />

        <div className={css(styles.flex, styles.flex_lyt)}>
          <img
            src="/assets/share.svg"
            className={css(styles.image, styles.image_lyt2)}
          />
          <div className={css(styles.flex3_spacer)} />
          <div className={css(styles.share, styles.share_lyt)}>{"Share"}</div>
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  cover_group: {
    display: "flex",
    backgroundColor: "rgb(255,255,255)",
    boxShadow: "3px 3px 23px 0px rgba(108,103,70,0.12941176470588237)",
    borderRadius: "2px 2px 2px 2px",
  },
  cover_group_lyt: {
    position: "relative",
    overflow: "visible",
    minHeight: 56,
    flexGrow: 1,
    margin: "64px 12px 0px 0px",
  },
  flex: { display: "flex" },
  flex_lyt1: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: "19px 20px 19px 22px",
    justifyContent: "center",
  },
  flex1: { display: "flex" },
  flex1_lyt: {
    position: "relative",
    overflow: "visible",
    flex: "0 1 64px",
    margin: "1px 0px 0px",
  },
  image: { background: "var(--src) center center / contain no-repeat" },
  image_lyt: {
    position: "relative",
    height: 16,
    width: 16,
    minWidth: 16,
    margin: "0px 0px 1px",
  },
  flex1_spacer: { display: "flex", flex: "0 0 auto", minWidth: 10 },
  read: {
    font: '700 14px/1.2 "SF Pro Display", Helvetica, Arial, serif',
    color: "rgb(64,65,68)",
  },
  read_lyt: { position: "relative", flex: "0 0 auto", margin: 0 },
  group: { display: "flex" },
  group_lyt: {
    position: "relative",
    overflow: "visible",
    flex: "0 1 45px",
    height: 18,
    margin: 0,
  },
  rect: { backgroundColor: "rgb(152,152,152)" },
  rect_lyt: { position: "absolute", top: 1, height: 16, left: 18.5, width: 1 },
  flex2: { display: "flex" },
  flex2_lyt: {
    position: "relative",
    overflow: "visible",
    flex: "0 1 72px",
    margin: "0px 0px 1px",
  },
  image_lyt1: {
    position: "relative",
    height: 17,
    width: 18,
    minWidth: 18,
    margin: 0,
  },
  flex2_spacer: { display: "flex", flex: "0 0 auto", minWidth: 9 },
  listen: {
    font: '700 14px/1.2 "SF Pro Display", Helvetica, Arial, serif',
    color: "rgb(64,65,68)",
    letterSpacing: "1",
  },
  listen_lyt: { position: "relative", flex: "0 0 auto", margin: 0 },
  flex_spacer: { display: "flex", flex: "0 0 auto", minWidth: 21.5 },
  flex_col: { display: "flex", flex: "0 0 auto", minWidth: 1 },
  rect_lyt1: {
    position: "relative",
    height: 16,
    flexGrow: 1,
    margin: "0px 0px 2px",
  },
  flex_spacer1: { display: "flex", flex: "0 0 auto", minWidth: 23.5 },
  flex_lyt: {
    position: "relative",
    overflow: "visible",
    flex: "0 1 66px",
    margin: "1px 0px 0px",
  },
  image_lyt2: {
    position: "relative",
    height: 16,
    width: 12.8,
    minWidth: 12.8,
    margin: "0px 0px 1px",
  },
  flex3_spacer: { display: "flex", flex: "0 0 auto", minWidth: 10.2 },
  share: {
    font: '700 14px/1.2 "SF Pro Display", Helvetica, Arial, serif',
    color: "rgb(64,65,68)",
    letterSpacing: "1",
  },
  share_lyt: { position: "relative", flex: "0 0 auto", margin: 0 },
});
