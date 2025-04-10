import React from 'react';

export const NewTicketPage = () => {
  return (
    <div className="">
      <div className="">
      <div className="bg-[#DBE3EA] py-5 px-4 lg:px-0">
        <div className="max-w-7xl m-auto text-xl font-bold">New Ticket</div>
      </div>

        <div className='mx-4'>
        <div className='bg-gradient-to-r max-w-7xl my-11  m-auto rounded-xl from-[#020124] via-[#1a1c80] to-[#01001f] text-white p-5 w-full'>
        <form className="space-y-6 ">
          {/* Company Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company-name" className="block text-sm font-medium text-gray-200 pb-3">Company Name</label>
              <input
                type="text"
                id="company-name"
                name="company-name"
                placeholder="Type Company Name"
                className="w-full bg-transparent p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 pb-3">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Type Email"
                className="w-full p-3 bg-transparent  border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Priority and Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-200 pb-3">Priority</label>
              <select
                id="priority"
                name="priority"
                className="w-full p-3 bg-transparent  border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Select Priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-200 pb-3">Category</label>
              <select
                id="category"
                name="category"
                className="w-full bg-transparent p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Select Category</option>
                <option>Networking</option>
                <option>Hardware</option>
                <option>Software</option>
              </select>
            </div>
          </div>

          {/* Issue Summary */}
          <div>
            <label htmlFor="issue-summary" className="block text-sm font-medium text-gray-200 pb-3">Issue Summary</label>
            <textarea
              id="issue-summary"
              name="issue-summary"
              placeholder="Type Here..."
              rows="4"
              className="w-full bg-transparent p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Details Description */}
          <div>
            <label htmlFor="details-description" className="block text-sm font-medium text-gray-200 pb-3">Details Description</label>
            <textarea
              id="details-description"
              name="details-description"
              placeholder="Type Here..."
              rows="4"
              className="w-full bg-transparent p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* File Upload */}
          <div>
            <label htmlFor="upload-file" className="block text-sm font-medium text-gray-200 pb-3">Upload File</label>
            <input
              type="file"
              id="upload-file"
              name="upload-file"
              className="w-full bg-transparent p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              className="px-6 bg-transparent p-3 border border-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 bg-transparent p-3 border border-gray-700 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Ticket
            </button>
          </div>
        </form>
        </div>
        </div>
      </div>
    </div>
  );
};
