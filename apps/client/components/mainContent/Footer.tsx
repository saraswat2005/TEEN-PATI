const Footer = () => {
    return (
      <div className="bg-gray-800 text-white m-14 rounded-3xl mb-28">
        <div className="mx-auto py-14">
            <div className="flex justify-around border-b border-gray-600 pb-14">
                <div className="text-left">
                <h3 className="font-bold text-2xl">HELP</h3>
                <ul className="text-lg mt-2 space-y-1">
                    <li>Games rules</li>
                    <li>Deposit</li>
                    <li>Withdrawal</li>
                    <li>Support</li>
                </ul>
                </div>
    
                <div className="text-center">
                <h3 className="font-bold text-2xl">ABOUT COMPANY</h3>
                <ul className="text-lg mt-2 space-y-1">
                    <li>Privacy policy</li>
                    <li>Terms and condition</li>
                    <li>Public offers</li>
                    <li>KYC Policy</li>
                </ul>
                </div>
    
                <div className="text-right">
                <h3 className="font-bold text-2xl">INFO</h3>
                <ul className="text-lg mt-2 space-y-1">
                    <li>Privacy</li>
                    <li>Responsible Gambling</li>
                    <li>Self-exclusion</li>
                    <li>Dispute Resolution</li>
                </ul>
                </div>
            </div>
  
          <div className="text-center mt-4">
            <h3 className="font-bold text-lg">FOLLOW US ON</h3>
            <div className="flex justify-center gap-16 mt-3">
              <div className="w-16 h-16 flex items-center justify-center rounded-full">
                <img src="telegramLogo.png" alt="Telegram" width={40} />
              </div>
              <div className="w-16 h-16 flex items-center justify-center rounded-full">
                <img src="instagramLogo.png" alt="Instagram"  width={40}/>
              </div>
              <div className="w-16 h-16 flex items-center justify-center">
                <img src="facebookLogo.png" alt="Facebook" width={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
  
export default Footer;
