import { useState } from "react";

const SendMessage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    // Handle form submission logic here
    alert(name);
    alert(email);
    e.preventDefault();
    handleToggle();
  };

  return (
    <div className="fixed bottom-0 right-2 w-64 ">
      <div
        className={`bg-white shadow-lg rounded p-4 transition-all duration-500 ease-in-out transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ transformOrigin: "bottom" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
          className="absolute right-1 top-1 cursor-pointer"
          onClick={handleToggle}
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
        {isOpen && (
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e?.target?.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send
              </button>
            </div>
          </form>
        )}
      </div>
      {!isOpen && (
        <button
          onClick={handleToggle}
          className="absolute bottom-0 right-2 bg-red-700 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send message
        </button>
      )}
    </div>
  );
};

export default SendMessage;
