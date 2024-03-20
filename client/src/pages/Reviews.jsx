import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav/Navbar'; // Import Nav component
import Footer from '../components/Footer/Footer'; // Import Footer component
import './reviews.css'; // Import the reviews.css stylesheet

function ReviewsPage() {
  // Use the useParams hook to get the productId from the URL
  const { productId } = useParams();
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to submit the comment for the productId
    console.log(`Comment submitted for product ${productId}: ${comment}`);
    // You can also send the comment to your backend for storage
  };

  return (
    <>
      <Nav /> {/* Include Nav component */}
      <div className="container">
        <h2>Submit a Review for Product {productId}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              className="form-control"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>
      </div>
      <Footer /> {/* Include Footer component */}
    </>
  );
}

export default ReviewsPage;
