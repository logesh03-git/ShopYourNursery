import { useState } from "react";
import AddressCard from "../../components/Address/AddressCard";
import OrderSummary from "../../components/Address/OrderSummary";
import AddressForm from "../../components/Address/AddressForm";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useLocation, useNavigate } from "react-router-dom";
import PlusIcon from "../../svgIcons/PlusIcon";
export default function AddressPage() {
  const location = useLocation();
  const products =
    location.state &&
    JSON.parse(location.state.products).filter(
      (product: any) => product.count != 0
    );
  const priceSummary =
    location.state && JSON.parse(location.state.priceSummary);
  const navigate = useNavigate();
  const [addressList, setAddressList] = useState([
    {
      id: 1,
      fullname: "William J",
      contact: "(406) 555-0120",
      email: "tranthuy.nute@gmail.com",
      apartment: "",
      street: "502 Preston Rd",
      city: "Inglewood",
      state: "Maine",
      country: "United States",
      zipcode: "98380",
    },
    {
      id: 2,
      fullname: "Emily R",
      contact: "(512) 555-0241",
      email: "emilyr.stone@gmail.com",

      apartment: "Apt 204",
      street: "783 Willowbrook Dr",
      city: "Portland",
      state: "Oregon",
      country: "United States",
      zipcode: "97205",
    },
  ]);
  const [selectAdd, setSelectAdd] = useState(0);
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState({});
  const handleEdit = (index: number) => {
    setEdit(true);
    setEditData(addressList[index]);
  };
  const handleAdd = () => {
    setEdit(false);
  };
  console.log(addressList);
  return (
    <div>
      <div className="flex gap-x-10 w-full py-10 px-[4vw] max-w-[1600px] overflow-hidden">
        <div>
          <div className="flex flex-col max-w-[50rem] gap-y-4 w-full border-none">
            <div className="flex gap-x-3 overflow-scroll no-scrollbar">
              {addressList?.map((address, index) => (
                <AddressCard
                  key={address.id}
                  address={address}
                  setSelectAdd={setSelectAdd}
                  flag={index == selectAdd ? true : false}
                  index={index}
                  handleEdit={handleEdit}
                />
              ))}
              <div className="flex justify-center items-center">
                <button
                  className="flex justify-center items-center"
                  onClick={handleAdd}
                >
                  <PlusIcon size={"48"} />
                </button>
              </div>
            </div>
            <div>
              <AddressForm
                setAddressList={setAddressList}
                setSelectAdd={setSelectAdd}
                index={addressList.length}
                edit={edit}
                editData={editData}
                handleAdd={handleAdd}
              />
            </div>
          </div>
          <div className="mt-3 flex gap-x-8 justify-between items-center">
            <button
              onClick={() => navigate(-1)}
              className="flex justify-center items-center"
            >
              <ChevronLeftIcon />
              Back
            </button>
            <button
              onClick={() =>
                navigate("/orderplaced", {
                  state: {
                    products: JSON.stringify(products),
                    priceSummary: JSON.stringify(priceSummary),
                  },
                })
              }
              className="bg-[#7AA262] w-full py-2 rounded-full text-[#F3F3F3] font-medium font-Poppins text-center max-w-[20rem]"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
        <OrderSummary />
      </div>
    </div>
  );
}
