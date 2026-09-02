export default function ProductCard({ name, price, imageUrl }) {
  return (
    <div>
      <img
        src={imageUrl}
        alt={name}
        className="h-64 w-full rounded-md object-contain"
      />
      <p className="min-h-12">{name}</p>
      <p>R {price}</p>
      <button
        type="button"
        className="mt-auto rounded-md w-full bg-black px-4 py-2 text-white transition active:translate-y-1"
      >
        Add to Cart
      </button>
    </div>
  );
}
