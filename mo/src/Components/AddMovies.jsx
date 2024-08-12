import React from 'react';

const AddMovies = () => {

  return (
    <section className="bg-white">
      <div className="container m-auto max-w-4xl py-24 flex">
        {/* Image Upload Section */}
        <div className="flex-shrink-0 w-1/3 p-4">
          <div className="bg-gray-200 h-full flex items-center justify-center border border-gray-300 rounded-md">
            {/* Placeholder text as there is no functionality */}
            <p className="text-gray-500">No image selected</p>
          </div>
          <input
            type="file"
            className="mt-4"
          />
        </div>

        {/* Form Section */}
        <div className="w-2/3 p-4">
          <div className="bg-white justify-end px-6 py-8 mb-4 m-4 md:m-0 bg-red-1">
            <form>
              <h2 className="text-3xl text-center mb-6">
                Add Movies/Series
              </h2>

              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-gray-700 mb-2"
                >
                  Movie/Series Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Movie / series name"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Movie/Series Description"
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="country"
                  className="block text-gray-700 mb-2"
                >
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="border rounded w-full py-2 px-3"
                >
                  {/* Country options */}
                  <option value="South Africa">South Africa</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="India">India</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Japan">Japan</option>
                  <option value="Brazil">Brazil</option>
                  <option value="China">China</option>
                  <option value="Italy">Italy</option>
                  <option value="Spain">Spain</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Russia">Russia</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Norway">Norway</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Switzerland">Switzerland</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-gray-700 mb-2"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="border rounded w-full py-2 px-3"
                />
              </div>

              <div className='flex justify-center gap-8 p-9'>
                <div className="">
                  <input
                    type="radio"
                    id="option1"
                    name="type"
                    value="option1"
                    className="mr-1 accent-blue-500"
                  />
                  <label htmlFor="option1" className="">Movie</label>
                </div>

                <div className="">
                  <input
                    type="radio"
                    id="option2"
                    name="type"
                    value="option2"
                    className="mr-2 mr-2 accent-blue-500"
                  />
                  <label htmlFor="option2" className="">Series</label>
                </div>
              </div>

              <div>
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="button" 
                >
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddMovies;
