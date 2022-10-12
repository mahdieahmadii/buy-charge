import './App.css';
import { useState } from 'react';
import irancell from "./images/index.png";
import hamrahAval from "./images/hamrahAval.png"
import rightel from "./images/rightel.jpg";
import { IrancellPrice } from './components/IrancellPrice';
import { IrMciPrice } from './components/IrMciPrice';
import { RightelPrice } from './components/RightelPrice'


function App() {
  const [showIrancell, setShowIrancell] = useState(false);
  const [showIrmci, setShowshowIrmci] = useState(false);
  const [showRightel, setShowRightel] = useState(false);

  let operators = {
    irancell: ['0930', '0933', '0935', '0936', '0937', '0938', '0939', '0901', '0902', '0903', '0904', '0905', '0941'],
    irmci: ['0919', '0990', '0991', '0992', '0993', '0994'],
    rightel: ['0920', '0921', '0922']
  }

  function handleInputChange(e) {
    let element = e.target.value;
    if (element.length === 4 && operators.irancell.includes(element)) {
      setShowIrancell(true);
    } else if (element.length === 4 && operators.irmci.includes(element)) {
      setShowshowIrmci(true);
    } else if (element.length === 4 && operators.rightel.includes(element)) {
      setShowRightel(true);
    } else if (element.length < 4) {
      setShowRightel(false);
      setShowshowIrmci(false);
      setShowIrancell(false);
    }
  }

  return (<>
    <div className="bg-gray-50 relative flex min-h-screen items-center justify-center py-6 sm:py-12 my-back">

      <div className="p-10 shadow-lg bg-white bg-opacity-60 chargeForm">
        <h3 className="font-bold text-3xl mb-5 text-center">خرید شارژ</h3>
        <form className="p-5">
          <input type="number" onChange={handleInputChange} className="py-2 pl-2 mb-5 w-full" placeholder="شماره تلفن همراه خود را وارد نمایید" />
          <div className="flex  items-center justify-center">
            <div>
              <img className={showIrancell ? "grayscale-0 " : "grayscale"} src={irancell} />
            </div>
            <div>
              <img className={showIrmci ? "grayscale-0" : "grayscale"} src={hamrahAval} />
            </div>
            <div>
              <img className={showRightel ? "grayscale-0" : "grayscale"} src={rightel} />
            </div>
          </div>
          {showIrancell && <IrancellPrice />}
          {showIrmci && <IrMciPrice />}
          {showRightel && <RightelPrice />}
          <div>
          </div>
          <div className="btn-cont">
            <button className="mx-auto content-center justify-center bg-green-500 text-lg font-semibold text-white sm:col-span-2 sm:w-1/2 py-2 mt-5 hover:bg-green-800">خرید</button>
          </div>
        </form>
      </div>
    </div>
  </>)
}
export default App;
