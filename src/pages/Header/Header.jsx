import { Link, NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <section className="flex justify-between items-center px-10 shadow-md py-7 my-5">
        <div className="">
          <h1 className="text-4xl font-bold">Amazon</h1>
        </div>
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">products</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </section>
        </div>
    );
};

export default Header;