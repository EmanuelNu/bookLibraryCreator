import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import { useAppContext } from "../store/store";

export default function View() {
  const [item, setItem] = useState(null);
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);

  if (!item) {
    return <Layout>"Not found Item"</Layout>;
  }

  return (
    <Layout>
      <h2>{item?.title}</h2>
      <div>
        {item?.cover ? (
          <img src={item?.cover} width="200" alt={item.title} />
        ) : (
          ""
        )}
      </div>
      <p>{item?.completed ? "✓ Readed" : "❎ Not readed"}</p>
      <p>{item?.intro}</p>
      <p>{item?.review}</p>
    </Layout>
  );
}
