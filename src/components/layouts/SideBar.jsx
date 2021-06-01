import './SideBar.scss';
import './Icon.scss';
import './Custom.scss';

function SideBar() {
    // const linkColor = document.querySelectorAll('.sidebar__box-item')
    // function colorLink(index) {
    //     if (linkColor) {
    //         linkColor.forEach(l => l.classList.remove('active'))
    //         linkColor[index].classList.add('active')
    //     }
    // }
    // linkColor.forEach(l => l.addEventListener('click', colorLink(l)))
    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar__logo-box">
                <div><span>Admin</span>LTE</div>
            </div>
            <div className="sidebar__user-box">
                <div className="sidebar__user-box__row">
                    <div className="avatar"></div>
                    <div className="active-status">
                        <div className="username">Phạm Tiến Ánh</div>
                        <div className="display-flex">
                            <i className="active-status__icon"></i>
                            <div className="active-status__text">Online</div>
                        </div>
                    </div>
                </div>
                <input type="text" placeholder="Search..."></input>
            </div>
            <div className="sidebar__box">
                <div className="sidebar__box__header">MAIN NAVIGATION</div>
                <a className="sidebar__box-item active" href='foo'>
                    <div className="icon icon-dashboard "></div>
                    <div className="text">Dashboard</div>
                    <span></span>
                </a>
                <a className="sidebar__box-item" href='foo'>
                    <div className="icon icon-dashboard"></div>
                    <div className="text">Layout</div>
                    <span></span>
                </a>
                <a className="sidebar__box-item" href='foo'>
                    <div className="icon icon-dashboard"></div>
                    <div className="text">Widgets</div>
                    <span></span>
                </a>
                <a className="sidebar__box-item" href='foo'>
                    <div className="icon icon-dashboard"></div>
                    <div className="text">Charts</div>
                    <span></span>
                </a>
                <a className="sidebar__box-item" href='foo'>
                    <div className="icon icon-dashboard"></div>
                    <div className="text">Elements</div>
                    <span></span>
                </a>
                <a className="sidebar__box-item" href='foo'>
                    <div className="icon icon-dashboard"></div>
                    <div className="text">Forms</div>
                    <span></span>
                </a>
                <a className="sidebar__box-item" href='foo'>
                    <div className="icon icon-dashboard"></div>
                    <div className="text">Tables</div>
                    <span></span>
                </a>
            </div>
        </div>
    );
}

export default SideBar;