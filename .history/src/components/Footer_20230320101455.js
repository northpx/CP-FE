import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sing</h2>
              </div>
            </div>
            <div className="col-7"></div>
          </div>
        </div>
      </footer>
      <footer className="py-3"></footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Bac Pham Xuan 
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer