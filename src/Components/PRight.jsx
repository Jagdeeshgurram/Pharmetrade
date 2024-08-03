import React, { useState } from "react";
import { Link } from "react-router-dom";
// import addcart from "../assets/addcart.png";
// import fav from "../assets/fav.png";
// import other from "../assets/other.png";
import other from "../assets/compare1_Icon.png";
import addcart from "../assets/cartw_icon.png";
import fav from "../assets/Wishlist1_icon.png";
import nature from "../assets/img1.png";
import Items from "./Items";
import next from "../assets/Next_icon.png";
// import next from "../assets/Icons/Next_icon.png"
// import previous from "../assets/Icons/Previous_icon.png"
import previous from "../assets/Previous_icon.png";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import search from "../assets/search-icon.png";
import { useNavbarContext } from "./NavbarContext";
import { useNavigate } from "react-router-dom";
import emptyHeart from "../assets/Wishlist1_icon.png";
import filledHeart from "../assets/wishlist2_icon.png";

function PRight({ topMargin, addCart, wishList }) {
  const { pop, setPop } = useNavbarContext();
  const navigate = useNavigate();
  const images = Array(115).fill(nature);
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [favoriteItems, setFavoriteItems] = useState({});

  const handleClose = (event) => {
    event.stopPropagation();
    console.log("Clicked to close Items");
    setPop(false);
  };

  function handleCart(index) {
    const prolist = {
      id: index,
      src: images[index],
      price: "$50.99",
      rate: "SKU 6545555",
      rates: "UPN member price:",
      ratesupn: "$45.00",
    };
    addCart(prolist);
  }

  function handleClick(index) {
    setFavoriteItems(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
    // alert("Add 1 item into wishlist");
    const prolist = {
      id: index,
      src: images[index],
      price: "$50.99",
      rate: "SKU 6545555",
      rates: "UPN member price:",
      ratesupn: "$45.00",
    };
    wishList(prolist);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(images.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "white",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: ` calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <div className="w-full mt-1 h-full overflow-y-scroll">
      <div className=" flex justify-between bg-blue-900 p-2 rounded-lg">
        <div className="text-2xl text-white"> Rx Drug</div>

        <Search>
          <SearchIconWrapper>
            <img src={search} className="w-4" />
            {/* <SearchIcon /> */}
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>

      <div className="w-[95%]">
        <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-8">
          {currentItems.map((img, index) => (
            <div
              key={index + indexOfFirstItem}
              className="w-full max-w-md border p-2 rounded-xl shadow-md"
            >
              {/* <Link to={`/detailspage/${index + indexOfFirstItem}`}> */}
                <div className="flex justify-center relative">
                  {/* <img
                    src={fav}
                    alt="Favorite"
                    className="h-8 p-[6px]  absolute left-0 "
                    onClick={() => handleClick(index + indexOfFirstItem)}
                  /> */}
                   <img
                    onClick={() => handleClick(index + indexOfFirstItem)}
                    src={favoriteItems[index] ? filledHeart : emptyHeart}
                    className="h-8 p-[6px]  absolute left-0 "
                  alt="Favorite Icon"
                />
                
                <Link to={`/detailspage/${index + indexOfFirstItem}`}>
                  <img
                    src={img}
                    alt={`nature-${index + indexOfFirstItem}`}
                    className="h-36 w-32 pl-3  bg-foots rounded-lg"
                  />
                  </Link>
                </div>
              {/* </Link> */}
              <div className="w-full py-1">
                <h2 className="text-fonts">SKU 6545555</h2>
                <div className="flex gap-1 items-center">
                  <h1 className="text-fonts font-semibold">$50.99</h1>
                  {/* <span className="text-[10px] line-through">($45.69)</span> */}
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-full mt-4 px-1">
                <div className="text-foot text-xs">UPN Member Price:</div>
                <div className="text-base font-semibold">$45.00</div>
              </div>
              <div
                className="flex bg-blue-900 p-1 rounded-md justify-center"
                onClick={() => handleCart(index + indexOfFirstItem)}
              >
                <img src={addcart} alt="Add to cart" className="h-8 p-[6px]" />
                <button className="text-white font-semibold">ADD</button>
              </div>
              {/*<ul className="flex flex-row justify-around border bg-gray-100 border-gray-300 shadow-md rounded-xl  py-2">
              <li>
                <img
                  src={addcart}
                  alt="Add to cart"
                  className="h-8 p-[6px]"
                  onClick={() => handleCart(index + indexOfFirstItem)}
                />
              </li>
            
               <li>
                <img
                  src={fav}
                  alt="Favorite"
                  className="h-8 p-[6px]"
                  onClick={() => handleClick(index + indexOfFirstItem)}
                />
              </li>
              <li>
                <img src={other} alt="Other" className="h-8 p-[6px]" />
              </li> 
            </ul>*/}
              {pop && <Items topMargin={topMargin} onClose={handleClose} />}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end my-2">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="mx-2 px-4 border p-2 text-white rounded-lg"
        >
          <img src={previous} className="w-2" />
        </button>
        <span className="mx-2 px-4 flex items-center  bg-white text-black rounded-lg">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="mx-2 px-4 border p-2 text-white rounded-lg"
        >
          <img src={next} className="w-2" />
        </button>
      </div>
    </div>
  );
}

export default PRight;
