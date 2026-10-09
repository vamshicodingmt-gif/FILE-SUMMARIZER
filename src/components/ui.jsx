export function formatINR(n) {
  return '₹' + n.toLocaleString('en-IN');
}

export function Stars({ rating }) {
  return (
    <div className="stars" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(rating)}
      <span className="stars__empty">{'★'.repeat(5 - rating)}</span>
    </div>
  );
}
