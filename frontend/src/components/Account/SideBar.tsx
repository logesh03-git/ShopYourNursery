import { NavLink } from "react-router-dom";
import edit from "../../assets/icons/edit.png";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Order from "../../svgIcons/Order";
// import Cart from "../../svgIcons/Cart";
// import Favorite from "../../svgIcons/Favorite";
import At from "../../svgIcons/At";
import Support from "../../svgIcons/Support";
import Question from "../../svgIcons/Question";
import Rule from "../../svgIcons/Rule";
export default function SideBar() {
  const config = [
    { id: 1, name: "Orders", link: "orders", icon: <Order size={22} /> },
    // { id: 2, name: "Your Cart", link: "your-cart", icon: <Cart size={20} /> },
    // { id: 3, name: "Wishlist", link: "wishlist", icon: <Favorite size={20} /> },
    {
      id: 4,
      name: "Address Book",
      link: "address-book",
      icon: <At size={20} />,
    },
    {
      id: 5,
      name: "Help and Support",
      link: "help",
      icon: <Support size={20} />,
    },
    { id: 6, name: "FAQ", link: "faqs", icon: <Question size={20} /> },
    {
      id: 7,
      name: "Terms & Conditions",
      link: "terms",
      icon: <Rule size={20} />,
    },
  ];
  return (
    <div className="w-[25rem] flex-shrink-0 bg-[#F5F5F5] h-fit px-6 py-7 rounded-[0.9375rem]">
      <div className="flex flex-col gap-y-[0.3rem]">
        <div className="flex justify-between gap-x-4 items-center">
          <h2 className="font-Poppins font-medium">Cameron Williamson</h2>
          <NavLink
            to="edit-profile"
            className={
              "underline text-xs font-Poppins flex items-center gap-x-1"
            }
          >
            <img src={edit} className="h-[0.7rem]" />
            Edit Profile
          </NavLink>
        </div>
        <div>
          <p className="text-[#3A3A3A] font-Poppins">(239) 555-0108</p>
        </div>
      </div>
      <div className="bg-[#A8A8A8] w-full h-[1px] my-6"></div>
      <div className="flex flex-col gap-y-4">
        {config.map((item) => (
          <NavLink
            to={item?.link}
            className={({ isActive }) =>
              `p-[0.6rem] flex gap-x-4 justify-between items-center  rounded-[0.9375rem] ${
                isActive && "bg-[#ddf2d0]"
              } hover:bg-[#ddf2d0]`
            }
          >
            <div className="flex gap-x-3 items-center">
              {item?.icon}

              <h6 className="text-lg">{item.name}</h6>
            </div>
            <ArrowForwardIosOutlinedIcon fontSize="small" />
          </NavLink>
        ))}
      </div>
      <button className="bg-[#FFFFFF] border-[#D9D9D9] border text-[#3A3A3A] font-Poppins py-3 px-10 rounded-[1.75106rem] w-full mt-10">
        Log Out
      </button>
    </div>
  );
}
