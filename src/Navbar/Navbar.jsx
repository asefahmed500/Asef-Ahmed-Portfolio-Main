
import asefcv from "../assets/Asef Ahmed.pdf"


const Navbar = () => {
  const navoptions = (
    <>
      <li><a href="#introduction">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#contact">Contact</a></li>
    </>
  );

  return (
    <div className="max-w-5xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {/* SVG for mobile menu */}
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navoptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Asef Ahmed</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navoptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a href={asefcv} className="btn btn-outline btn-success">Hire Me</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


