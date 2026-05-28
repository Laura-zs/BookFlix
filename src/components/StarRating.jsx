export default function StarRating({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push("full");
    } else if (i - rating < 1) {
      stars.push("half");
    } else {
      stars.push("empty");
    }
  }

  return (
    <div className="flex items-center gap-1">
      {stars.map((type, index) => (
        <span key={index} className="text-yellow-400 text-4xl">
          {type === "full" && "★"}
          {type === "half" && "⯨"}
          {type === "empty" && "☆"}
        </span>
      ))}
      <span className="ml-2 text-gray-400 text-sm">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}