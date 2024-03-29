import React from "react";
import logo from '../assets/Sample Logo.png'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton
} from "@material-tailwind/react";

const StickyNavbar = () => {
    const [openNav, setOpenNav] = React.useState(false);
 
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    }, []);
   
    const navList = (
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          className="p-1 font-normal text-lightblue"
        >
          <a href="#" className="flex items-center">
            Pages
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="p-1 font-normal text-lightblue"
        >
          <a href="#" className="flex items-center">
            Account
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center text-lightblue">
            Blocks
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center text-lightblue">
            Docs
          </a>
        </Typography>
      </ul>
    );
   
    return (
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
            <div className="flex items-center justify-between text-blue-gray-900">
                <div className='text-lg'>
                    <a href="/">
                        <img src={logo} alt="logo" className='h-6'/>
                    </a>
                </div>
                <div className="mr-4 hidden lg:block">{navList}</div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-x-1">
                    <Button
                        variant="text"
                        size="sm"
                        color="light-blue"
                        className="hidden lg:inline-block duration-500"
                    >
                        <span>Log In</span>
                    </Button>
                    <Button
                        variant="gradient"
                        size="sm"
                        color="light-blue"
                        className="hidden lg:inline-block"
                    >
                        <span>Sign in</span>
                    </Button>
                    </div>
                    <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                    >
                    {openNav ? (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                        </svg>
                    ) : (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        </svg>
                    )}
                    </IconButton>
                </div>
            </div>
            <MobileNav open={openNav}>
            {navList}
            <div className="flex items-center gap-x-1">
                <Button fullWidth variant="text" size="sm" color="light-blue" className="">
                <span>Log In</span>
                </Button>
                <Button fullWidth variant="gradient" size="sm" color="light-blue" className="">
                <span>Sign in</span>
                </Button>
            </div>
            </MobileNav>
        </Navbar>
    );
}

export default StickyNavbar
