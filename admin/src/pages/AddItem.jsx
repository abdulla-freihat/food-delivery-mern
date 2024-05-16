import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const AddItem = () => {
  const url = "http://localhost:8000";

  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const [errors, setErrors] = useState({
    name: false,
    description: false,
    price: false,
    image: false,
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: !data.name,
      description: !data.description,
      price: !data.price,
      image: !image,
    };

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      toast.error("Please fill out all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const res = await axios.post(`${url}/api/food/add`, formData);

      if (res.data.success) {
        toast.success(res.data.message);
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
        setImage(null);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="max-w-sm flex flex-col gap-5 mx-5 mt-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="image" className="text-md text-gray-500">
            Upload Product Image
          </label>
          <label htmlFor="image" className="border-dashed cursor-pointer">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              className="w-24"
              alt="Upload"
            />
          </label>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
              setErrors((prevErrors) => ({ ...prevErrors, image: false }));
            }}
            type="file"
            id="image"
           
            className="hidden"
          />
          {errors.image && <p className="text-red-500">Image is required</p>}

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-md text-gray-500">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={`border outline-none rounded-sm p-2 ${errors.name ? 'border-red-500' : 'border-gray-500'}`}
              placeholder="Type here"
             
              value={data.name}
              onChange={onChangeHandler}
            />
            {errors.name && <p className="text-red-500">Name is required</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-md text-gray-500">
              Product Description
            </label>
            <textarea
              name="description"
              id="description"
              className={`border outline-none rounded-sm p-2 resize-none ${errors.description ? 'border-red-500' : 'border-gray-500'}`}
              rows={6}
              placeholder="Write content here"
             
              value={data.description}
              onChange={onChangeHandler}
            />
            {errors.description && <p className="text-red-500">Description is required</p>}
          </div>

          <div className="flex gap-4 flex-wrap">
            <div className="flex flex-col gap-2">
              <label htmlFor="category" className="text-md text-gray-500">
                Product Category
              </label>
              <select
                name="category"
                id="category"
              
                onChange={onChangeHandler}
                className="border border-gray-500 outline-none rounded-sm p-2"
                value={data.category}
              >
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodels">Noodels</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="price" className="text-md text-gray-500">
                Product Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                
                className={`border outline-none rounded-sm p-2 ${errors.price ? 'border-red-500' : 'border-gray-500'}`}
                placeholder="Price"
                value={data.price}
                onChange={onChangeHandler}
              />
              {errors.price && <p className="text-red-500">Price is required</p>}
            </div>
          </div>
        </div>

        <button type="submit" className="bg-black text-white px-8 py-2 max-w-[120px] font-semibold">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddItem;
