import React from 'react';

function Header({ heading, pages }) {
  return (
    <div>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container heading py-5">
          <h1 className="display-4 animated text-white slideInDown mb-4" style={{textShadow: "2px 2px 4px #000000"}}>
            {heading}
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {pages}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
