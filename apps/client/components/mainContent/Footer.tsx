const Footer = () => {
  return (
    <div className="bg-gray-800 text-white m-4 md:m-14 rounded-3xl mb-14 md:mb-28">
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
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full">
              <img src="telegramLogo.png" alt="Telegram" className="w-8 md:w-10" />
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full">
              <img src="instagramLogo.png" alt="Instagram" className="w-8 md:w-10" />
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full">
              <img src="facebookLogo.png" alt="Facebook" className="w-8 md:w-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;