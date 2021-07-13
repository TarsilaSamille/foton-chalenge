import { useRouter } from "next/router";
import useSwr from "swr";
import Detail from "../../components/Detail";

const fetcher = (url) => fetch(url).then((res) => res.json());

const url_books = "https://www.googleapis.com/books/v1/volumes/";

export default function Book() {
  const router = useRouter();
  const { data, error } = useSwr(
    router.query.id ? url_books + router.query.id : null,
    fetcher
  );
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
  return <Detail book={data} />;
}
