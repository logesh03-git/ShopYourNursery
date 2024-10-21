import { FaChevronRight } from "react-icons/fa6";
import { useLocation, Link } from "react-router-dom";
import { breadCrumbMap } from "../../constants/breadcrumbsmap";
type propsType = {
  plantName?: string;
};
export default function BreadCrumb({ plantName }: propsType) {
  const pathnames = useLocation()
    .pathname.split("/")
    .filter((x) => x);
  return (
    <div className="flex gap-x-1">
      {pathnames.map((value, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        // console.log(routeTo);
        const bread = breadCrumbMap.get(value);
        return (
          <li key={index} className="flex">
            {isLast ? (
              <div className="font-Poppins font-semibold">{plantName}</div>
            ) : (
              <Link to={routeTo} className="flex gap-x-1 items-center">
                <span className="text-[#9F9F9F] font-Poppins font-medium">
                  {bread}
                </span>
                <span className="text-sm">
                  <FaChevronRight />
                </span>
              </Link>
            )}
          </li>
        );
      })}
    </div>
  );
}
