import React, { useState } from "react";
import { useUser } from "../../store/contextApis";

const Profile = () => {
  const { profile, setProfile } = useUser();

  const [profileData, setProfileData] = useState({
    name: profile.Name.toUpperCase(),
    profilePicture:
      "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    email: profile.Email,
    phone: profile.PhoneNo,
    address: "",
    city: "",
    state: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...profileData });

  const handleToggleEdit = () => {
    setIsEditing((prevState) => !prevState);
    setEditedData({ ...profileData });
  };

  const handleSave = () => {
    setProfileData({ ...editedData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedData({ ...profileData });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container h-screen w-screen flex justify-center mt-4 items-center lg:mt-0">
      <div className="bg-slate-700/60 rounded-lg min-w-[80%] max-w-[80%] h-[85%] mt-8 mx-8 p-8 flex flex-col justify-around border-2 shadow-2xl border-[#c606b9] lg:min-w-[70%] lg:max-w-[70%] lg:h-[75%] lg:max-h-[75%] lg:relative lg:mt-24">
        {/* profile picture */}
        <div className="flex justify-center items-center lg:absolute lg:-top-12 lg:left-1/2 lg:-translate-x-1/2">
          <img
            src={profileData.profilePicture}
            alt="Profile"
            className="rounded-full w-32 h-32 object-cover border-4 border-white"
          />
        </div>

        {/* Name */}
        <div className="text-center mt-4 lg:absolute lg:mt-0 lg:top-20 lg:left-1/2 lg:-translate-x-1/2">
          <h2 className="text-2xl font-semibold ">
            <input
              readOnly
              type="text"
              name="name"
              value={editedData.name}
              onChange={handleChange}
              className="bg-transparent w-[70%] text-center focus:outline-none focus:border-blue-500 mt-2 border-b border-gray-300"
            />
            {/* profileData.name */}
          </h2>
        </div>

        <div className="lg:mt-36">
          {/* Contact information */}
          <div className="lg:w-full lg:px-8">
            <h3 className="text-lg font-semibold mb-2 underline">
              Contact Information
            </h3>
            <div className="flex flex-col gap-3 lg:flex-row lg:justify-start lg:gap-24 lg:items-center">
              {/* email */}
              <div className="flex items-center gap-2">
                <label htmlFor="Email">Email-: </label>
                <p name="Email" className="">
                  {profileData.email}
                </p>
              </div>

              {/* Phone no */}
              <p className="flex items-center gap-2">
                <label htmlFor="pnone">PhoneNo-:</label>
                <input
                  readOnly
                  type="text"
                  name="phone"
                  value={editedData.phone}
                  onChange={handleChange}
                  placeholder="Phone no"
                  className="bg-transparent w-full p-2 focus:outline-none focus:border-blue-500 border rounded-lg border-none"
                />
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="mt-4 lg:w-full lg:px-8">
            <h3 className="text-lg font-semibold mb-2 underline">Address</h3>
            <div className="flex flex-col gap-3 lg:flex-row lg:justify-start lg:gap-32 lg:items-center">
              <p className="flex justify-between">
                {isEditing ? (
                  <input
                    type="text"
                    name="address"
                    value={editedData.address}
                    onChange={handleChange}
                    placeholder="Landmark"
                    className="bg-transparent p-2 w-full rounded-lg focus:outline-none focus:border-blue-500 border border-gray-300"
                  />
                ) : (
                  <>
                    <label htmlFor="address">Landmark-: </label>
                    {profileData.address}
                  </>
                )}
              </p>
              <p className="flex justify-between">
                {isEditing ? (
                  <input
                    type="text"
                    name="city"
                    value={editedData.city}
                    onChange={handleChange}
                    placeholder="City/Pin-code"
                    className="bg-transparent p-2 w-full rounded-lg focus:outline-none focus:border-blue-500 border border-gray-300"
                  />
                ) : (
                  <>
                    <label htmlFor="city">City-: </label>

                    {profileData.city}
                  </>
                )}
              </p>
              <p className="flex justify-between">
                {isEditing ? (
                  <input
                    type="text"
                    name="state"
                    value={editedData.state}
                    onChange={handleChange}
                    placeholder="State"
                    className="bg-transparent p-2 w-full rounded-lg focus:outline-none focus:border-blue-500 border border-gray-300"
                  />
                ) : (
                  <>
                    <label htmlFor="State">State-: </label>
                    {profileData.state}
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 border-t pt-6">
            {isEditing ? (
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 mr-2 focus:outline-none"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  className="bg-slate-500  px-4 py-2 rounded-xl hover:bg-slate-700 mr-2 focus:outline-none"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 mr-2 focus:outline-none"
                  onClick={handleToggleEdit}
                >
                  Edit Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
