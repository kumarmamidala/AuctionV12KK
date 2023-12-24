import React from "react";
import toast from "react-hot-toast";
import "./Appointment.css";

const Appointment = () => {
  const handleAppointment = (event) => {
    event.preventDefault();
    toast.success("Appointment Successful!!", {
      position: "top-right",
    });
    event.target.reset();
  };
  return (
    <div className="py-12 bg-[#F8FAFE]">
      <div className="hero">
        <div className="hero-content flex flex-col lg:flex-row md:mx-20">
          <div className="text-center flex flex-column justify-center lg:!text-left mx-10">
            <h5 className="text-5xl font-bold text-[#fbcb04] font-sans title">
              Make an Appointment!
            </h5>
            <p className="py-8 text-xl paragraph">
              Get personalized help with a one-on-one appointment. Our experts
              are here to answer your questions and guide you through the
              bidding process. Book now and unlock your online potential with
              confidence.
            </p>
          </div>
          <form
            className="card w-full  shadow-md shadow-[#02355a] bg-base-100"
            onSubmit={handleAppointment}
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#fbcb04] !pb-2 !mb-2 heading">
                    First Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#fbcb04] heading">
                    Last Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered input-lg w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#fbcb04] heading">
                    Appointment Date
                  </span>
                </label>
                <input
                  type="datetime-local"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* <input
                className=" mt-5  w-full  custom-btn main-button"
                type="submit"
                value="Appointment"
              /> */}
              <button class="custom-btn main-button w-full mt-4">
                Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
