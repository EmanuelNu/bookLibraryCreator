import Book from "../components/book.js";
import Layout from "../components/layout.js";
import { useAppContext } from "../store/store.js";

export default function Index() {
  const bookContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  };

  const store = useAppContext();

  return (
    <Layout>
      <div style={bookContainer}>
        {store.items.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  );
}
