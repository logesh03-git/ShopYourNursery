

const Filter = () => {
  return (
    <div className="flex items-center justify-between p-4 mx-auto max-w-7xl px-4">
      <div className="flex gap-4">
        <button className="text-2xl"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M9.66669 21.6666C9.28891 21.6666 8.97225 21.5388 8.71669 21.2833C8.46114 21.0277 8.33336 20.711 8.33336 20.3333V12.3333L0.600026 2.46659C0.266693 2.02214 0.216693 1.55547 0.450026 1.06659C0.683359 0.577696 1.08891 0.333252 1.66669 0.333252H20.3334C20.9111 0.333252 21.3167 0.577696 21.55 1.06659C21.7834 1.55547 21.7334 2.02214 21.4 2.46659L13.6667 12.3333V20.3333C13.6667 20.711 13.5389 21.0277 13.2834 21.2833C13.0278 21.5388 12.7111 21.6666 12.3334 21.6666H9.66669ZM11 11.3999L17.6 2.99992H4.40003L11 11.3999Z" fill="#878787"/>
          </svg> {/* Filter icon */}
        </button>
        <select className=" rounded-md px-4 py-2">
          <option>Care level</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Difficult</option>
        </select>
        <select className=" rounded-md px-4 py-2">
          <option>Light</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <select className=" rounded-md px-4 py-2">
          <option>Size</option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
        <select className=" rounded-md px-4 py-2">
          <option>Type</option>
          <option>Indoor</option>
          <option>Outdoor</option>
        </select>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search your plant"
          className="border border-gray-300 rounded-md px-4 py-2 w-72"
        />
        <i className="fas fa-search absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-500"></i>
      </div>
    </div>
  );
};

export default Filter;
