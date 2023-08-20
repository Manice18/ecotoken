const SearchBar = ({
  placeholderDetails,
  width,
}: {
  placeholderDetails: string;
  width: string;
}) => {
  return (
    <div className="mx-auto max-w-md">
      <div className="relative text-gray-800">
        <button type="submit" className="absolute left-0 top-0 ml-6 mt-3">
          <svg
            stroke="white"
            fill="white"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.25rem"
            width="1.25rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168Z"></path>
          </svg>
        </button>
        <input
          type="search"
          name="search"
          placeholder={placeholderDetails}
          className={`m-auto h-10 items-center rounded-full border border-white bg-inherit pl-[3.5rem] pr-10 font-Poppins text-sm text-white w-[${width}]`}
        />
      </div>
    </div>
  );
};

export default SearchBar;
