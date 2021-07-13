/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";

export default function DiscoverBook(props) {
  const { book, idx } = props;
  const main = idx === 0;
  return (
    <div className={css(styles.flex2, styles.flex2_lyt)}>
      <div className={css(styles.group, styles.group_lyt)} />
      <div className={css(styles.group, styles.group_lyt2)}>
        <div
          className={
            main
              ? css(styles.group5, styles.group5_lyt)
              : css(styles.group5_side, styles.group5_side_lyt)
          }
        >
          <div
            className={
              main ? css(styles.flex3, styles.flex3_lyt) : css(styles.flex3)
            }
          >
            <div className={css(styles.flex3_spacer)} />
            <div className={css(styles.flex4, styles.flex4_lyt)}>
              <h2 className={css(styles.title, styles.title_lyt)}>
                {book.volumeInfo.title}
              </h2>
              <div className={css(styles.author, styles.author_lyt)}>
                {book.volumeInfo.authors}
              </div>
              <div className={css(styles.flex5, styles.flex5_lyt)}>
                <img
                  src="/assets/data.svg"
                  alt="me"
                  className={css(styles.icon, styles.icon_lyt)}
                />
                <div className={css(styles.flex5_spacer)} />
                <div
                  className={css(
                    styles.small_text_body_box,
                    styles.small_text_body_box_lyt
                  )}
                >
                  <div className={css(styles.small_text_body)}>
                    <span className={css(styles.small_text_body_span0)}>
                      {"120+"}
                    </span>
                    <a href={main ? "/detalhes/" + book.id : ""}>
                      <span className={css(styles.small_text_body_span1)}>
                        {" Read Now"}
                      </span>
                    </a>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className={css(styles.group, styles.group_lyt1)}>
              <img
                src="/assets/77b931648e4c9368e5b98c0c8aa499ce.png"
                alt="me"
                className={css(styles.icon, styles.image_lyt)}
              />
            </div>
            <a href={"/detalhes/" + book.id}>
              <img
                src={
                  "http://books.google.com/books/content?id=" +
                  book.id +
                  "&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
                }
                alt="me"
                className={css(styles.icon, styles.img_lyt)}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

DiscoverBook.inStorybook = true;

const styles = StyleSheet.create({
  group: { display: "flex" },
  group_lyt4: {
    position: "relative",
    overflow: "visible",
    height: 212,
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
  flex1: { display: "flex" },
  flex1_lyt: { position: "relative", overflow: "visible", margin: 0 },
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
    backgroundColor: "#00173D",
    boxShadow: "2px 4px 48px 0px rgba(155,175,209,0.6235294117647059)",
    borderRadius: "5px 5px 5px 5px",
  },
  group5_lyt: {
    position: "absolute",
    overflow: "visible",
    top: 0,
    height: 139,
    left: -127.86,
    right: 0,
  },
  group5_side: {
    display: "flex",
    backgroundColor: "#451475",
    boxShadow: "2px 4px 48px 0px rgba(155,175,209,0.6235294117647059)",
    borderRadius: "5px 5px 5px 5px",
  },
  group5_side_lyt: {
    position: "absolute",
    overflow: "visible",
    top: 0,
    height: 129,
    left: -127.86,
    right: 0,
  },
  flex3: {
    display: "flex",
    background: "var(--src) center center / contain no-repeat",
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: 0,
  },
  flex3_lyt: {
    backgroundImage: "url('/assets/ffc538b883a47468674098bc143bc8ed.png')",
    backgroundSize: "cover",
  },
  flex3_lyt: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: 0,
    backgroundImage: "url('/assets/ffc538b883a47468674098bc143bc8ed.png')",
    backgroundSize: "cover",
  },
  flex3_spacer: { display: "flex", flex: "0 0 auto", minWidth: 20 },
  flex4: { display: "flex", flexDirection: "column" },
  flex4_lyt: {
    position: "relative",
    overflow: "visible",
    flex: "0 1 1000px",
    flexWrap: "nowrap",
    alignItems: "stretch",
    margin: "17px 0px 20px",
    justifyContent: "space-around",
    zIndex: 1,
    margin: "20px 0 0 0",
  },
  title: {
    font: '700 27px/1.2 "Playfair Display", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    letterSpacing: "2",
  },
  title_lyt: { position: "relative", margin: 0 },
  author: {
    font: '14px/1.2 "SFProDisplay", Helvetica, Arial, serif',
    color: "rgb(231,232,226)",
    letterSpacing: "1.2888890504837036",
  },
  author_lyt: { position: "relative", margin: "9px 0px 0px" },
  flex5: { display: "flex" },
  flex5_lyt: {
    position: "relative",
    overflow: "visible",
    margin: "29px 0px 0px",
    bottom: "20%",
  },
  icon: { background: "var(--src) center center / contain no-repeat" },
  icon_lyt: {
    position: "relative",
    height: 16,
    width: 16,
    minWidth: 16,
    margin: 0,
  },
  flex5_spacer: { display: "flex", flex: "0 1 2px" },
  small_text_body: {
    font: '10px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(231,232,226)",
    letterSpacing: "0.020634999498724937",
  },
  small_text_body_box: {},
  small_text_body_box_lyt: { position: "relative", margin: "2px 0px" },
  small_text_body_span0: {
    font: '700 1em/1.2 "SF Pro Display", Helvetica, Arial, serif',
    color: "#e7e8e2ff",
    letterSpacing: "0.020634999498724937",
  },
  small_text_body_span1: {
    font: '1em/1.2 "SF Pro Display", Helvetica, Arial, serif',
    color: "#e7e8e2ff",
    letterSpacing: "0.020634999498724937",
  },
  group_lyt1: {
    position: "relative",
    overflow: "visible",
    flex: "0 1 59px",
    height: 139,
    margin: 0,
  },
  group: { display: "flex" },
  image: { background: "var(--src) center center / contain no-repeat" },
  image_lyt: {
    position: "absolute",
    top: 3.8,
    height: 107.2,
    width: 57.37,
    right: -22.37,
  },
  img: { background: "var(--src) center center / contain no-repeat" },
  img_lyt: {
    position: "relative",
    height: 109,
    width: 73,
    minWidth: 73,
    margin: "15px 20px 15px 0px",
  },
});
