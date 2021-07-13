import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import Title from "./Title";

export default function Currently(props) {
  const { books } = props;
  const book = books[0];
  return (
    <div className={`currently ${css(styles.group, styles.group_lyt1)}`}>
      <div className={css(styles.group1, styles.group1_lyt)}>
        <div className={css(styles.flex, styles.flex_lyt)}>
          <Title title={"Currently Reading"} linkName={"All"} />
          <a href={"/detalhes/" + book.id}>
            <div className={css(styles.group, styles.group_lyt)}>
              <div className={css(styles.cover_group, styles.cover_group_lyt)}>
                <div className={css(styles.flex2, styles.flex2_lyt)}>
                  <h4 className={css(styles.title, styles.title_lyt)}>
                    {book.volumeInfo.title}
                  </h4>
                  <div className={css(styles.author, styles.author_lyt)}>
                    {book.volumeInfo.authors}
                  </div>

                  <div className={css(styles.flex3, styles.flex3_lyt)}>
                    <img
                      src="/assets/bookIcon.svg"
                      alt="me"
                      className={css(styles.icon, styles.icon_lyt)}
                    />
                    <div className={css(styles.flex3_spacer)} />
                    <div
                      className={css(
                        styles.author1_box,
                        styles.author1_box_lyt
                      )}
                    >
                      <div className={css(styles.author1)}>
                        <span className={css(styles.author1_span0)}>
                          {"Chapter"}
                        </span>
                        <span className={css(styles.author1_span1)}> </span>
                        <span className={css(styles.author1_span2)}>{"2"}</span>
                        <span className={css(styles.author1_span3)}>
                          {" From 9"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={
                  "http://books.google.com/books/content?id=" +
                  book.id +
                  "&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
                }
                alt="book"
                className={css(styles.img, styles.img_lyt)}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

Currently.inStorybook = true;

const styles = StyleSheet.create({
  group: { display: "flex" },
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
    position: "absolute",
    overflow: "visible",
    top: 2,
    height: 166,
    left: 0,
    right: 20,
  },
  group_lyt: {
    position: "relative",
    overflow: "visible",
    flex: "0 0 auto",
    minHeight: 130,
    margin: "15px 24px 0px 0px",
  },
  group: { display: "flex" },
  cover_group: {
    display: "flex",
    backgroundColor: "rgb(239,246,220)",
    backgroundImage: "url('/assets/cur.svg')",
    boxShadow: "0px 3px 45px 0px rgba(122,142,67,0.11764705882352941)",
    borderRadius: "0px 3px 3px 0px",
    backgroundPosition: "220PX -19PX",
    backgroundRepeat: "no-repeat",
  },
  cover_group_lyt: {
    position: "absolute",
    overflow: "visible",
    top: 15,
    bottom: 15,
    minHeight: 100,
    left: 0,
    flexGrow: 1,
    right: 0,
    inset: "15px  0 0px -15PX",
  },
  flex2: { display: "flex", flexDirection: "column" },
  flex2_lyt: {
    position: "relative",
    overflow: "visible",
    minWidth: 99,
    margin: "10px 0 0 130px ",
  },
  title: {
    font: '700 20px/1.2 "Playfair Display", Helvetica, Arial, serif',
    color: "rgb(42,43,39)",
    letterSpacing: "2",
  },
  title_lyt: { position: "relative", margin: 0 },
  author: {
    font: '10px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(117,120,109)",
    letterSpacing: "0",
  },
  author_lyt: { position: "relative", margin: "8px 0px 0px" },
  flex3: { display: "flex" },
  flex3_lyt: {
    position: "relative",
    overflow: "visible",
    margin: "20px 0px 0px",
  },
  icon: { background: "var(--src) center center / contain no-repeat" },
  icon_lyt: {
    position: "relative",
    height: 16,
    width: 16,
    minWidth: 16,
    margin: 0,
  },
  flex3_spacer: { display: "flex", flex: "0 0 auto", minWidth: 3 },
  author1: {
    font: '10px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0.020634999498724937",
  },
  author1_box: {},
  author1_box_lyt: {
    position: "relative",
    flex: "0 0 auto",
    margin: "2px 0px",
  },
  author1_span0: {
    font: '1em/1.2 "SF Pro Display", Helvetica, Arial, serif',
    color: "#2b2c27ff",
    letterSpacing: "0.020634999498724937",
  },
  author1_span1: {
    font: '700 1em/1.2 "SF Pro Display", Helvetica, Arial, serif',
    color: "#2b2c27ff",
    letterSpacing: "0.020634999498724937",
  },
  author1_span2: {
    font: '700 1em/1.2 "SF Pro Display", Helvetica, Arial, serif',
    color: "#ff6a79ff",
    letterSpacing: "0.020634999498724937",
  },
  author1_span3: {
    font: '1em/1.2 "SF Pro Display", Helvetica, Arial, serif',
    color: "#2b2c27ff",
    letterSpacing: "0.020634999498724937",
  },
  img: { background: "var(--src) center center / cover no-repeat" },
  img_lyt: {
    position: "relative",
    height: 130,
    width: 88,
    minWidth: 88,
    margin: "0px 0px 0px 20px",
  },
  up: {
    margin: "0px 0px 0px 20px",
  },
});
