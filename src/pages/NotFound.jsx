import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gradient from "../assets/gradient.jpg";

const NotFound = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${gradient})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="max-w-lg text-center space-y-8 bg-white p-10 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
        <p className="text-2xl font-semibold text-gray-700">
          Oops! We can't find that page.
        </p>
        <p className="text-gray-600">
          It looks like the page you're looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
