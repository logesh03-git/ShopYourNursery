import { useState, useEffect } from "react";

const defaultData = {
  fullname: "",
  contact: "",
  email: "",
  apartment: "",
  street: "",
  city: "",
  state: "",
  country: "",
  zipcode: "",
};
export default function AddressForm({
  setAddressList,
  setSelectAdd,
  index,
  edit,
  editData,
  handleAdd,
}: any) {
  const [checked, setChecked] = useState(false);

  const data = edit ? editData : defaultData;
  const [formData, setFormData] = useState({ ...data });
  useEffect(() => {
    setFormData({ ...data });
  }, [data]);

  const handleEditAdd = () => {
    setAddressList((prev: any) => {
      const addList = prev.filter((item: any) => item.id != editData.id);
      return [...addList, formData];
    });
    if (checked) {
      console.log(index);
      setSelectAdd(index - 1);
      setChecked(false);
    }
    handleAdd();
  };

  const handleSubmit = () => {
    setAddressList((prev: any) => [...prev, { id: index + 1, ...formData }]);
    setFormData(defaultData);
    if (checked) {
      setSelectAdd(index);
    }
  };
  const handleChange = (e: any) => {
    if (e.target.name == "check") {
      console.log(e.target);
      setChecked(e.target.checked);
    } else {
      console.log(e.target.name);
      setFormData((prev: any) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  return (
    <div className="bg-[#F5F5F5] rounded-[0.9375rem] px-8 py-6">
      <h1 className="font-Poppins font-medium text-lg mb-3">
        {edit ? "Edit Address" : "Add Address"}
      </h1>
      <form className="flex flex-col gap-y-6">
        <div className="flex gap-x-5 w-full">
          <div className="flex flex-col gap-y-1 w-full text-sm">
            <label>Full Name</label>
            <input
              name="fullname"
              value={formData.fullname}
              type="text"
              className="py-2 px-2"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-y-1 w-full text-sm">
            <label>Email</label>
            <input
              name="email"
              value={formData.email}
              type="email"
              className="py-2 px-2"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-y-1 w-full text-sm">
            <label>Contact number</label>
            <input
              name="contact"
              value={formData.contact}
              type="tel"
              className="py-2 px-2"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex gap-x-5 w-full">
          <div className="flex flex-col gap-y-1 w-full text-sm">
            <label>Apartment</label>
            <input
              name="apartment"
              value={formData.apartment}
              type="text"
              className="py-2 px-2"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-y-1 w-full text-sm">
            <label>Street</label>
            <input
              name="street"
              value={formData.street}
              type="text"
              className="py-2 px-2"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-y-1 w-full text-sm">
            <label>City</label>
            <input
              name="city"
              value={formData.city}
              type="text"
              className="py-2 px-2"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex gap-x-5 w-full">
          <div className="flex flex-col gap-y-1 w-full text-sm">
            <label>State</label>
            <input
              name="state"
              value={formData.state}
              type="text"
              className="py-2 px-2"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-y-1 w-full text-sm">
            <label>Country</label>
            <input
              name="country"
              value={formData.country}
              type="text"
              className="py-2 px-2"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-y-1 w-full text-sm">
            <label>Zip Code</label>
            <input
              name="zipcode"
              value={formData.zipcode}
              type="number"
              className="py-2 px-2"
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
      <div className="flex justify-between gap-x-10 mt-5 items-center">
        <label className="flex gap-x-2 items-center text-sm">
          <input
            type="checkbox"
            name="check"
            onChange={handleChange}
            defaultChecked={checked}
          />
          Select this address for shipping
        </label>
        <button
          onClick={edit ? handleEditAdd : handleSubmit}
          className="text-xs py-2 px-3 shadow-down border-[0.5px] border-[#8EBD72] bg-white rounded-xl"
        >
          Save Address
        </button>
      </div>
    </div>
  );
}
