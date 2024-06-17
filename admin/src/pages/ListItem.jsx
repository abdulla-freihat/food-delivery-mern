import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ListItem = () => {
  const url = "http://localhost:8000";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const res = await axios.get(`${url}/api/food/food-list` );

      if (res.data.success) {
        setList(res.data.data);
      } else {
        toast.error("Failed to fetch.");
      }
    } catch (err) {
      toast.error("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const deleteFood = async (foodId) => {
    try {
      const res = await axios.post(`${url}/api/food/delete`, { id: foodId });

      await fetchList();

      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-5 mx-5 mt-5">
        <p className="text-gray-500 font-bold text-xl">All Food List</p>

        {list.length === 0 ? (
          <p className="text-center text-gray-500">No items available</p>
        ) : (
          <div>
            <div className="grid hidden md:grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] gap-[10px] p-2 border border-gray-500">
              <b className="text-gray-500 text-sm">Image</b>
              <b className="text-gray-500 text-sm">Name</b>
              <b className="text-gray-500 text-sm">Category</b>
              <b className="text-gray-500 text-sm">Price</b>
              <b className="text-gray-500 text-sm">Action</b>
            </div>

            {list.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[1fr_3fr_1fr] gap-[15px] md:grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center md:gap-[10px] p-2 border border-gray-500"
              >
                <img
                  src={`${url}/images/${item.image}`}
                  className="w-20"
                  alt={item.name}
                />
                <p className="text-sm text-gray-500">{item.name}</p>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-sm text-gray-500">${item.price}</p>
                <p
                  className="text-red-500 cursor-pointer hover:text-red-600 text-xl"
                  onClick={() => deleteFood(item._id)}
                >
                  X
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListItem;
