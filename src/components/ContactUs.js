import React from "react";

export const ContactUs = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <div className="row  d-flex  d-flex align-items-center">
        <div className="col-12 col-lg-6">
          <h4 className="text-center">HOW TO FIND US</h4>
          <p className="text-center text-lg-left">
            Adjacent to the North Cove Harbor, Le District is steps away from
            some of New York's most acclaimed destinations: City Hall, the
            Statue of Liberty Ferry, the New York Stock Exchange, World Trade,
            the 9/11 Memorial Museum, and Brookfield Place.
          </p>
          <h5 className="text-center">PRIVATE PARTIES AT LE DISTRICT</h5>
          <p className="text-center text-lg-left">
            Looking for a venue to host your next special event? Liberty Bistro
            is thrilled to offer a variety of spaces perfect for hosting you and
            your guests, with buyouts available for parties of up to 800
            people!.
          </p>
        </div>
        <div className="col-12 col-lg-6">
          <div className="contact-form">
            <div className="text-center" action="#!">
              <p className="h4 mb-4">CONTACT US</p>
              <input
                type="text"
                id="defaultContactFormName"
                className="form-control mb-4"
                placeholder="Name"
              />
              <input
                type="email"
                id="defaultContactFormEmail"
                class="form-control mb-4"
                placeholder="E-mail"
              />
              <div className="form-group">
                <textarea
                  className="form-control rounded-0"
                  id="exampleFormControlTextarea2"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <button className="btn btn-outline-light btn-block" type="submit">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
