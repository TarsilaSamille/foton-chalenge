import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import DetailBar from "./DetailBar";

export default function Detail(props) {
  const { book } = props;
  const ats = book && book.volumeInfo.authors;
  const author = ats ? ats.join(", ") : "unknow";
  return (
    <div className={`detail ${css(styles.group, styles.group_lyt)}`}>
      <img src="/assets/boll.svg" className={css(styles.boll)} />
      <img
        src="/assets/a204866660fca19db5804e63e1c071ad.png"
        className={css(styles.image, styles.image_lyt)}
      />
      <img
        src="/assets/a204866660fca19db5804e63e1c071ad.png"
        className={css(styles.image, styles.image_lyt)}
      />
      <img src="/assets/curvas.svg" className={css(styles.curvas)} />
      <div className={css(styles.flex, styles.flex_lyt)}>
        <a className={css(styles.cover_group, styles.cover_group_lyt)} href="/">
          <img
            src="/assets/seta.svg"
            className={css(styles.image, styles.image_lyt1)}
          />
        </a>

        <img
          src={
            "http://books.google.com/books/content?id=" +
            book.id +
            "&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
          }
          className={css(styles.group1, styles.group1_lyt)}
        />
        <div className={css(styles.flex1, styles.flex1_lyt)}>
          <h3 className={css(styles.subtitle_box, styles.subtitle_box_lyt)}>
            <div className={css(styles.subtitle)}>
              <span className={css(styles.subtitle_span0)}>{"Hooked"}</span>
              <span className={css(styles.subtitle_span1)}>{" : "}</span>
              <span className={css(styles.subtitle_span2)}>
                {book.volumeInfo.title}
              </span>
            </div>
          </h3>
          <div className={css(styles.nir_eyal, styles.nir_eyal_lyt)}>
            {author}
          </div>

          <div className={css(styles.group2, styles.group2_lyt)}>
            <div
              className={css(
                styles.paragraph_body_box,
                styles.paragraph_body_box_lyt
              )}
            >
              <pre className={css(styles.paragraph_body)}>
                {book.volumeInfo.description &&
                  book.volumeInfo.description
                    .replace(/<[p>]+>/g, "\n")
                    .replace(/<[^>]+>/g, "")}
              </pre>
            </div>
          </div>
        </div>

        <div className={css(styles.fixed)}>
          <DetailBar />
        </div>
      </div>
    </div>
  );
}

Detail.inStorybook = true;

const styles = StyleSheet.create({
  fixed: {
    position: "fixed",
    bottom: "5%",
    width: "85%",
    margin: "0 auto",
    left: 0,
    right: 0,
  },
  boll: {
    position: "absolute",
  },

  curvas: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  group: { display: "flex", backgroundColor: "rgb(255,253,250)" },
  group_lyt: {
    position: "relative",
    overflow: "hidden",
    minHeight: 812,
    flexGrow: 1,
    margin: 0,
  },
  image: { background: "var(--src) center center / contain no-repeat" },
  image_lyt: {
    position: "absolute",
    top: 0,
    height: 236,
    left: 46,
    flexGrow: 1,
    right: 103,
    margin: "86px 0px 490px",
  },
  flex: { display: "flex", flexDirection: "column" },
  flex_lyt: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: "50px 8px 53px 20px",
  },
  cover_group: {
    display: "flex",
    backgroundColor: "rgba(255,255,255,0.011764705882352941)",
  },
  cover_group_lyt: {
    position: "relative",
    overflow: "visible",
    minHeight: 24,
    width: 24,
    minWidth: 24,
    margin: "0px 0px 0px 7px",
  },
  image_lyt1: {
    position: "relative",
    height: 14,
    width: 14,
    minWidth: 14,
    margin: 5,
  },
  group1: {
    display: "flex",
    background: "var(--src) center center / contain no-repeat",
    backgroundColor: "rgb(255,240,0)",
    margin: "0 auto",
    left: 0,
    right: 0,
  },
  group1_lyt: {
    position: "relative",
    overflow: "visible",
    minHeight: 229,
    width: 153,
    minWidth: 153,
  },
  flex1: { display: "flex", flexDirection: "column" },
  flex1_lyt: {
    position: "relative",
    overflow: "visible",
    margin: "36px 0px 0px",
  },
  subtitle: {
    margin: 0,
    font: '24px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(55,56,59)",
  },
  subtitle_box: {},
  subtitle_box_lyt: { position: "relative", margin: 0 },
  subtitle_span0: {
    font: '700 1em/1.2 "SF Pro Display", Helvetica, Arial, serif',
    color: "#37383bff",
    letterSpacing: "1.5",
  },
  subtitle_span1: {
    font: '1em/1.2 "SF Pro Display", Helvetica, Arial, serif',
    color: "#37383bff",
    letterSpacing: "0",
  },
  subtitle_span2: {
    font: '1em/1.2 "SF Pro Display", Helvetica, Arial, serif',
    color: "#37383bff",
    letterSpacing: "0.5",
  },
  nir_eyal: {
    font: '500 16px/1.2 "SFProDisplay", Helvetica, Arial, serif',
    color: "rgb(255,106,121)",
    letterSpacing: "0.6705880165100098",
  },
  nir_eyal_lyt: { position: "relative", margin: "9px 0px 0px" },
  group2: { display: "flex" },
  group2_lyt: {
    position: "relative",
    overflow: "visible",
    minHeight: 196,
    margin: "10px 4px 0px 0px",
  },
  paragraph_body: {
    overflow: "visible",
    marginTop: 0,
    marginBottom: 0,
    margin: 0,
    font: '14px/1.7857142857142858 "SFProText", Helvetica, Arial, serif',
    color: "rgb(50,50,50)",
    letterSpacing: "0.20000000298023224",
    whiteSpace: "pre-wrap",
  },
  paragraph_body_box: { opacity: 0.6000000238418579 },
  paragraph_body_box_lyt: { position: "relative", flexGrow: 1, margin: 0 },
  cover_group1: { position: "relative" },
  cover_group1_lyt: {
    position: "relative",
    minHeight: 56,
    margin: "64px 12px 0px 0px",
  },
});
