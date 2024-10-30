import ContactForm from "./ContactForm";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="px-[5vw]">
      <div className="flex items-end justify-start mb-[77px]">
        <div className="w-full">
          <h1 className="w-full text-[#2e4d1a] mb-6 text-5xl font-normal font-Philosopher leading-loose">
            Reach Out to Us
          </h1>
          <div className="flex gap-x-10 justify-center w-full">
            <ContactForm />
            <div className="w-[20rem] relative border-none overflow-hidden self-end">
              <img
                className=""
                src={
                  "https://s3-alpha-sig.figma.com/img/18d4/c9f1/34bd4c6ff1cd27cc027d911a1b9fb5b8?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y1A4HwRN7lI6sZZQu8pbAxZQYZURVd~NAmJd8fw28lrsEMBBed0~PAaMcqJPWaKsQrvukE9ZnTB3-VGedTmuGz5IYBQ-Z0WgpKAid3LM288kRmidpsN7TfbEeoVuR7TibxyVlWLhPs9qPvEHm6S6jbQcwPihCr~i3KnjUvy~bke~qr47H3OLGTV35u-kNuOixerg2Mme4srFjGy5xixEJs9S51w-KrtEH8AbAHm3KPION-0jvdz9eyLpmTOVmWGn13fBCNJp12400QCWvsclCv8C6QBGIsMn~l94dA2DcBfrBtrAiVw0qcmALDfs~ptxsPb0G11R-KvXcPuUtrfxMA__"
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex  mt-[161px] gap-8 justify-start items-start">
        <div className="flex justify-start flex-col gap-8 border-none border-black w-full">
          <h1 className="w-[51rem] text-[#2e4d1a] text-5xl font-normal font-Philosopher leading-loose">
            Find a Nursery Near You
          </h1>
          <div className="flex gap-x-10 justify-between w-full ">
            <div className="overflow-hidden w-[40rem] h-[25rem] rounded-[15px] border-[2px] border-[#447128]">
              <img
                className="w-full h-full"
                src="https://s3-alpha-sig.figma.com/img/80e0/a779/384b8025d6760654091a5b46e5fa2f4c?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LHYYD-1pQ6DzhB2sc40lvH4nmReLX01BSNT56rppLYl-W~RTxCe5MfIKYP6nP3QJbyGkhxwIveLvi-WHs1pw5Bwn7LS7fWUpfRr4kHUd9Is7JRgMcKA07dCmeJBGEzI8LTpV-iGRPqhvl2HTuWGaqgGQJYjtikosS~FyeasVnfY9HOqeggma-hiZTPuqiZi-KCWUV0eH42prlwzqCuFb0oKYX2nSqhmUucP~jCuobMtrzBhmbM-mXNEux1Lns6TMnm3nQSQcGr1V97CUjhaNuAZrw~ZUlpfvlaK4j6Qm8k9NqPeIPjr5Fqhf-vXU-am0KKIhMXd8k2m1NqSlQWhIrw__"
              />
            </div>
            <div className="flex flex-col gap-[42px]">
              <div className="w-[565px] h-[100px] flex-col justify-start items-start gap-3 inline-flex">
                <label className=" self-stretch text-black text-[16.82px] font-normal font-Poppins">
                  Enter Zip-code{" "}
                </label>
                <input
                  className="pl-[27px] pr-[340px] pt-[18px] pb-[17px] bg-neutral-100 rounded-[10px] border border-[#bcbcbc] justify-start items-center inline-flex"
                  placeholder="eg: 45453"
                  type="text"
                />
              </div>
              <div className="w-[555px] h-[143.01px] flex-col justify-start items-start gap-[13px] inline-flex">
                <div className="h-[58px] flex-col justify-start items-start gap-[9px] flex">
                  <p className="self-stretch text-black text-base font-normal font-Poppins">
                    EcoEden Nurseries
                  </p>
                  <p className="self-stretch text-black text-[16.82px] font-light font-Poppins">
                    6391 Elgin St. Celina, Delaware 10299
                  </p>
                </div>
                <hr className="h-[0px] w-[555px] border border-[#afafaf]" />
                <div className="h-[58px] flex-col justify-start items-start gap-[9px] flex">
                  <p className="self-stretch text-black text-base font-normal font-Poppins">
                    BotanicalBliss Nursery
                  </p>
                  <p className="self-stretch text-black text-[16.82px] font-light font-Poppins">
                    3517 W. Gray St. Utica, Pennsylvania 57867
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-start items-center  mb-[241px] gap-[83px] ">
        <div className="w-[663px] h-[289px] flex-col justify-start items-start gap-[50px] inline-flex">
          <h1 className="self-stretch text-[#2e4d1a] text-[32px] font-normal font-['Philosopher'] leading-loose">
            Prefer a Direct Contact?
          </h1>
          <div className="h-[207px] flex-col justify-start items-start gap-[21px] flex">
            <p className="self-stretch">
              <span className="text-black text-2xl font-semibold font-['Poppins']">
                General Inquiries
              </span>
              <span className="text-black text-2xl font-normal font-['Poppins']">
                : contact@shopyournursery.com
              </span>
            </p>
            <p className="self-stretch">
              <span className="text-black text-2xl font-semibold font-['Poppins']">
                Vendor Partnerships
              </span>
              <span className="text-black text-2xl font-normal font-['Poppins']">
                : vendort@shopyournursery.com
              </span>
            </p>
            <p className="self-stretch">
              <span className="text-black text-2xl font-semibold font-['Poppins']">
                Orders and Shipping
              </span>
              <span className="text-black text-2xl font-normal font-['Poppins']">
                : orders@shopyournursery.com
              </span>
            </p>
            <p className="self-stretch">
              <span className="text-black text-2xl font-semibold font-['Poppins']">
                Phone Support
              </span>
              <span className="text-black text-2xl font-normal font-['Poppins']">
                : +1 800 123 4567
              </span>
            </p>
          </div>
        </div>
        <div className="w-[602px] h-[215px] mt-[6.5rem] flex flex-col justify-start items-center relative bg-neutral-100 rounded-[15px]">
          <h1 className="w-[201px] left-[201px] top-[42px] absolute text-black text-2xl font-semibold font-['Poppins'] leading-loose">
            Connect with Us
          </h1>
          <div className="h-[50px] left-[94px] top-[125px] flex gap-[80px] absolute">
            <NavLink to="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="50"
                viewBox="0 0 32 50"
                fill="none"
              >
                <path
                  d="M8.03882 50V26.5385H0V18.0913H8.03882V10.8762C8.03882 5.2066 12.7874 0 23.7291 0C28.1592 0 31.4351 0.32775 31.4351 0.32775L31.177 8.21605C31.177 8.21605 27.8361 8.19095 24.1904 8.19095C20.2446 8.19095 19.6125 9.5942 19.6125 11.9233V18.0913H31.4906L30.9738 26.5385H19.6125V50H8.03882Z"
                  fill="#737373"
                />
              </svg>
            </NavLink>
            <NavLink to="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="50"
                viewBox="0 0 49 50"
                fill="none"
              >
                <path
                  d="M24.6107 1.30025C22.9246 -0.433418 20.2096 -0.433418 18.5521 1.30025L2.37688 18.2185C0.719348 19.9522 0.719348 22.7918 2.37688 24.5554C4.09157 26.3488 6.83507 26.2293 8.43544 24.5554L24.6107 7.63712C25.4134 6.79644 25.8643 5.65686 25.8643 4.46869C25.8643 3.28052 25.4134 2.14094 24.6107 1.30025ZM32.6983 9.75938C32.3022 9.34004 31.8305 9.0071 31.3105 8.77987C30.7905 8.55264 30.2326 8.43563 29.669 8.43563C29.1054 8.43563 28.5475 8.55264 28.0275 8.77987C27.5075 9.0071 27.0358 9.34004 26.6397 9.75938L10.4645 26.6776C10.0636 27.0919 9.74525 27.5852 9.528 28.1291C9.31075 28.673 9.19888 29.2566 9.19888 29.8461C9.19888 30.4355 9.31075 31.0191 9.528 31.563C9.74525 32.1069 10.0636 32.6002 10.4645 33.0145C12.1792 34.8079 14.9227 34.6585 16.5231 33.0145L32.6983 16.0962C34.3558 14.3626 34.3558 11.5229 32.6983 9.75938ZM35.7276 29.8461L47.6732 42.3405C49.3593 44.0741 49.3593 46.9138 47.6732 48.6773C45.9871 50.4409 43.2722 50.4409 41.6147 48.6773L29.669 36.1829L24.6107 41.4736C22.9246 43.2073 20.2096 43.2073 18.5521 41.4736C16.866 39.7101 16.866 36.8704 18.5521 35.1069L34.7273 18.2185C35.1234 17.7992 35.5951 17.4662 36.1151 17.239C36.6351 17.0118 37.1931 16.8948 37.7566 16.8948C38.3202 16.8948 38.8781 17.0118 39.3981 17.239C39.9181 17.4662 40.3898 17.7992 40.7859 18.2185C42.4434 19.9522 42.4434 22.7918 40.7859 24.5554L35.7276 29.8461ZM9.06416 41.1747C9.06416 36.4221 4.32019 29.2184 4.32019 29.2184C4.32019 29.2184 0.490723 37.528 0.490723 41.1747C0.490723 44.8214 2.20541 47.1529 4.32019 47.1529H5.23469C7.34948 47.1529 9.06416 45.9274 9.06416 41.1747Z"
                  fill="#737373"
                />
              </svg>
            </NavLink>
            <NavLink to="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="50"
                viewBox="0 0 49 50"
                fill="none"
              >
                <path
                  d="M48.4471 5.93938C46.6655 6.91571 44.7267 7.61837 42.7296 7.89204C44.803 6.32721 46.3557 3.85505 47.0963 0.939379C45.1507 2.40971 43.0193 3.44074 40.7966 3.98671C39.8677 2.72508 38.7441 1.72 37.496 1.03411C36.2479 0.348219 34.902 -0.00378538 33.5421 3.06982e-05C28.04 3.06982e-05 23.6151 5.66571 23.6151 12.6184C23.6151 13.5947 23.7083 14.571 23.8597 15.5104C15.6211 14.963 8.27344 9.96304 3.38856 2.30772C2.49848 4.23905 2.03205 6.43809 2.03779 8.67606C2.03779 13.0548 3.7903 16.9157 6.46272 19.1864C4.88782 19.1076 3.3498 18.5577 1.97375 17.5814V17.7367C1.97375 23.8684 5.3856 28.9497 9.93279 30.1184C9.079 30.4001 8.2007 30.5442 7.31859 30.5473C6.67232 30.5473 6.06098 30.466 5.44382 30.355C6.70143 35.355 10.3636 38.9867 14.7245 39.105C11.3127 42.5 7.03912 44.497 2.39877 44.497C1.56619 44.497 0.797651 44.4601 0 44.3417C4.40163 47.929 9.62421 50 15.2485 50C33.5071 50 43.4982 30.784 43.4982 14.1051C43.4982 13.5577 43.4982 13.0104 43.469 12.463C45.402 10.6657 47.0963 8.43937 48.4471 5.93938Z"
                  fill="#737373"
                />
              </svg>
            </NavLink>
            <NavLink to="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="50"
                viewBox="0 0 54 50"
                fill="none"
              >
                <path
                  d="M52.873 7.81051C52.5656 6.29808 51.9629 4.91883 51.1252 3.8108C50.2875 2.70276 49.2442 1.90482 48.0998 1.49682C43.8871 2.98023e-07 27 0 27 0C27 0 10.1129 -2.98023e-07 5.90022 1.48885C4.75526 1.89553 3.71144 2.69304 2.87361 3.80127C2.03577 4.90951 1.43341 6.28946 1.12701 7.80255C-2.41399e-07 13.3758 0 25 0 25C0 25 -2.41399e-07 36.6242 1.12701 42.1895C1.74777 45.2627 3.57991 47.6831 5.90022 48.5032C10.1129 50 27 50 27 50C27 50 43.8871 50 48.0998 48.5032C50.4261 47.6831 52.2522 45.2627 52.873 42.1895C54 36.6242 54 25 54 25C54 25 54 13.3758 52.873 7.81051ZM21.6362 35.6688V14.3312L35.6183 24.9204L21.6362 35.6688Z"
                  fill="#737373"
                />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
