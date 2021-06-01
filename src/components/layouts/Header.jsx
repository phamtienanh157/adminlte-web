import './Header.scss';
import './Icon.scss';
import './Custom.scss';


function Header() {

  const toggle = () => {
    document.getElementById("sidebar").classList.toggle("hidden");
    document.getElementById("header").classList.toggle("wide");
    document.getElementById("gallery").classList.toggle("wide");
  }

  return (
    <div className="header display-flex" id="header">
      <div className="header-icon icon-bars" onClick={toggle}></div>
      <div className="display-flex">
        <div className="header-icon icon-mail"></div>
        <div className="header-icon icon-bell"></div>
        <div className="header-icon icon-flag"></div>
        <div className="header__user-menu display-flex">
          <div className="avatar"></div>
          <span>Phạm Tiến Ánh</span>
        </div>
        <div className="header-icon icon-setting"></div>
      </div>
    </div>
  )
}
export default Header;
