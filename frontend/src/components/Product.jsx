import { useSelector } from "react-redux";

const Product = () => {
  const products = useSelector((state) => state.productReducer.products);

  return (
    <div className="flex flex-row flex-wrap gap-6 justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-gray-300 shadow-lg rounded-lg p-4 w-70 h-96 flex flex-col justify-between overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-50 w-full object-cover rounded"
          />
          <h2 className="text-lg font-bold mt-2 line-clamp-2 text-gray-900">{product.title}</h2>
          <p className="text-gray-600 text-sm mt-1 line-clamp-3">{product.description}</p>
          <span className="text-purple-700 font-semibold mt-2">${product.price}</span>
        </div>
      ))}
    </div>
  );
};

export default Product;
