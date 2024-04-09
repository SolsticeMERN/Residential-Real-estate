import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="footer flex flex-col md:flex-row justify-around p-10 bg-gray-900 text-slate-200">
      <nav>
        <h6 className="footer-title">Company</h6> 
        <Link to='about' className="link link-hover">About us</Link>
        <a className="link link-hover">Contact</a>
        <Link to='/agents' className="link link-hover">Agents</Link>
        <a className="link link-hover">Press kit</a>
      </nav> 
      <nav>
        <h6 className="footer-title">Legal</h6> 
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav> 
      <form>
        <h6 className="footer-title">Newsletter</h6> 
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label> 
          <div className="join">
            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
    );
};

export default Footer;