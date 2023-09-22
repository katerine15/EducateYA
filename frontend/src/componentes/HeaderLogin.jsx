import React from "react";
import LogoSenaBlanco from '../img/LogoSenaBlanco.png';

const HeaderLogin = () => {
    return (
        <header className="bg-[#39A900] py-4 px-5">
        <div className="container mx-auto flex justify-between items-center">
          <img
            src={LogoSenaBlanco}
            alt="Logo"
            className="h-12 w-12"
          />
          <h1 className="text-white text-2xl font-bold font-['Work Sans'] mx-auto">SENA CENTRO AGROPECUARIO</h1>
        </div>
      </header>
    )
}

export default HeaderLogin