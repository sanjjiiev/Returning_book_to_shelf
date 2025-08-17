
import React, { useState } from "react";

function DemoPage() {
  const [booksTaken, setBooksTaken] = useState(0);

  const takeBook = () => {
    setBooksTaken(booksTaken + 1);
  };

  const returnBooks = () => {
    setBooksTaken(0);
  };

  return (
    <div className="page">
      <h1>Demo: Returning Books</h1>
      <p>
        Click <strong>Take Book</strong> to borrow books, and{" "}
        <strong>Return Books</strong> to put them back.
      </p>
      <div className="buttons">
        <button onClick={takeBook}>Take Book</button>
        <button onClick={returnBooks}>Return All</button>
      </div>
      <div className="books">
        {booksTaken === 0 ? (
          <p>All books are on the shelf!</p>
        ) : (
          <p>
            Books with you:{" "}
            {"📚".repeat(booksTaken > 10 ? 10 : booksTaken)}{" "}
            {booksTaken > 10 && "(+ more)"}
          </p>
        )}
      </div>
    </div>
  );
}

export default DemoPage;
