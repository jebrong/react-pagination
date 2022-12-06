import { useState } from "react";
import Follower from "./Follower";
import { useFetch } from "./useFetch";

function App() {
  const [page, setPage] = useState(1);
  let { data, displayedData, loading } = useFetch(page);
  let totalPages = Math.ceil(data.length / 6);
  let pageNumbers = [];
  for (let page = 0; page < totalPages; page++) {
    pageNumbers.push(page + 1);
  }
  const nextPage = () => {
    if (page > data.length / 6) {
      return;
    }
    setPage((e) => {
      return (e = e + 1);
    });
  };
  const prevPage = () => {
    if (page === 1) {
      return;
    }
    setPage((e) => {
      return (e = e - 1);
    });
  };

  if (loading) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="item-container">
        {displayedData.map((item) => {
          return <Follower key={item.id} {...item}></Follower>;
        })}

        <button
          className={"pre-button " + (page === 1 ? "disabled" : null)}
          onClick={prevPage}
        >
          PREV
        </button>

        {pageNumbers.map((numb, index) => {
          return (
            <button
              className={numb === page ? "active" : null}
              key={index}
              onClick={() => {
                setPage(numb);
              }}
            >
              {numb}
            </button>
          );
        })}

        <button
          className={
            "increase-btn " + (page > totalPages - 1 ? "disabled" : null)
          }
          onClick={nextPage}
        >
          NEXT
        </button>
      </div>
    );
  }
}

export default App;
