import React, { Component } from "react";

import useSwr from "swr";
import Link from "next/link";
import Home from "../components/Home";
import Layout from "../components/layout";
import { StyleSheet, css } from "aphrodite/no-important";
import Bar from "../components/Bar";
import SearchForm from "../components/SearchForm";

const fetcher = (url) => fetch(url).then((res) => res.json());
const url_books = "https://www.googleapis.com/books/v1/volumes?q=hooked";

export default function Index() {
  const { data, error } = useSwr(url_books, fetcher);
  const loading = {
    font: "1em/1.2 Helvetica, Arial, serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    lineHeight: "29px",
    color: "rgb(255,105,125)",
    margin: "50% 0",
  };
  if (error) return <div>Failed to load books</div>;
  if (!data) return <center style={loading}>Loading...</center>;
  return (
    <Layout>
      <div className={css(styles.all)}>
        <div className={css(styles.search)}>
          <SearchForm books={data.items} />
        </div>

        <div className={css(styles.fixed)}>
          <div className={css(styles.cover_group, styles.cover_group_lyt1)}>
            <Bar />
          </div>
        </div>
      </div>
    </Layout>
  );
}

const styles = StyleSheet.create({
  all: {
    background: "#FBF6F1",
  },
  loading: {
    font: "1em/1.2 Helvetica, Arial, serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    lineHeight: "29px",
    color: "rgb(255,105,125)",
    margin: "50% 0",
  },
  search: {
    position: "relative",
    top: "50px",
  },
  cover_group: { position: "relative" },
  cover_group_lyt: { position: "relative", height: 48, flexGrow: 1, margin: 0 },
  fixed: {
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
