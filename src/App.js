import { useState } from "react";
import Follower from "./Follower";
import { useFetch } from "./useFetch";

function App() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  let { data, displayedData, loading } = useFetch(page, perPage);
  let totalPages = Math.ceil(data.length / perPage);
  let pageNumbers = [];
  for (let page = 0; page < totalPages; page++) {
    pageNumbers.push(page + 1);
  }
  const nextPage = () => {
    if (page > data.length / perPage) {
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
        <label>How many per Followers per Page?</label>
        <br></br>
        <button
          className={perPage === 5 ? "active" : null}
          onClick={() => {
            setPerPage(5);
            setPage(1);
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            setPerPage(10);
            setPage(1);
          }}
          className={perPage === 10 ? "active" : null}
        >
          10
        </button>
        <button
          className={perPage === 16 ? "active" : null}
          onClick={() => {
            setPerPage(16);
            setPage(1);
          }}
        >
          16
        </button>
        <div className="followers-container">
          {displayedData.map((item) => {
            return <Follower key={item.id} {...item}></Follower>;
          })}
        </div>

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
