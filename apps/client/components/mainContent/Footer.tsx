import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#eff1f3] text-black m-16 md:m-14 rounded-3xl mb-14 md:mb-28">
      <div className="mx-auto py-8 md:py-14 px-4">
        <div className="flex flex-col md:flex-row justify-around border-b border-gray-600 pb-8 md:pb-14 space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl md:text-2xl">HELP</h3>
            <ul className="text-base md:text-lg mt-2 space-y-1">
              <li>Games rules</li>
              <li>Deposit</li>
              <li>Withdrawal</li>
              <li>Support</li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="font-bold text-xl md:text-2xl">ABOUT COMPANY</h3>
            <ul className="text-base md:text-lg mt-2 space-y-1">
              <li>Privacy policy</li>
              <li>Terms and condition</li>
              <li>Public offers</li>
              <li>KYC Policy</li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h3 className="font-bold text-xl md:text-2xl">INFO</h3>
            <ul className="text-base md:text-lg mt-2 space-y-1">
              <li>Privacy</li>
              <li>Responsible Gambling</li>
              <li>Self-exclusion</li>
              <li>Dispute Resolution</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <h3 className="font-bold text-lg">FOLLOW US ON</h3>
          <div className="flex justify-center gap-8 md:gap-16 mt-4">
            <Link href={"/"}>
              <div className="w-10 h-10  flex items-center justify-center rounded-full">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111710.png"
                  alt="Telegram"
                />
              </div>
            </Link>
            <Link href={"/"}>
              <div className="w-10 h-10 flex items-center justify-center rounded-full">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
                  alt="Instagram"
                />
              </div>
            </Link>
            <Link href={"/"}>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png"
                  alt="Facebook"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
