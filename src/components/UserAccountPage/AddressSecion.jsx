import React from "react";
import AddAddressInitButton from "../AccountPages/AddAddressInitButton";
import AddAdressFroms from "../AccountPages/AddAdressFroms";

const AddressSecion = () => {
  return (
    <>
      {/* <ProfileNavbar /> */}
      <div
        className={`${open ? "" : "hidden"} `}
        onClick={() => setOpen(false)}
      >
        <AddAddressInitButton />
      </div>

      <div className={`${open ? "hidden" : ""} `}>
        <AddAdressFroms />
      </div>
      {/* <CardSIdeBar
        open={openModal}
        setOpen={setOpenModal}
        cart={cart}
        dispatch={dispatch}
      /> */}
    </>
  );
};

export default AddressSecion;
