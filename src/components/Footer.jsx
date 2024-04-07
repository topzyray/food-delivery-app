import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-black text-[#AAA7B1] pt-[40px] pb-[38px] sm:pt-[128px] sm:pb-[111px] px-6 md:px-10 lg:px-28">
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-5 sm:gap-0">
        <div>
          <p>© 2023 Pizza. All right reserved</p>
        </div>
        <div>
          <ul className="flex gap-4 sm:gap-6 md:gap-10">
            <li>Privacy</li>
            <li>Policy</li>
            <li>Terms</li>
            <li>Servies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
