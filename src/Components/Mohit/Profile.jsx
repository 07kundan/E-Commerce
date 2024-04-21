import React, { useState } from "react";

const Profile = () => {
    const [profileData, setProfileData] = useState({
        name: "John Doe",
        profilePicture:
            "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
        occupation: "Software Developer",
        email: "johndoe@example.com",
        phone: "+1234567890",
        address: "123 Main Street",
        city: "City",
        state: "State",
        zip: "ZIP",
        country: "Country",
        interests: "Reading, Coding, Traveling",
        savedCards: ["Card ending in 1234", "Card ending in 5678"],
        shoppingList: ["Item 1", "Item 2", "Item 3"],
        orders: [
            { id: 1, date: "2022-04-15", total: "$50" },
            { id: 2, date: "2022-04-10", total: "$30" },
            { id: 3, date: "2022-04-05", total: "$20" },
        ],
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
        <div className="container mx-auto mt-8">
            <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center justify-center">
                    <img
                        src={profileData.profilePicture}
                        alt="Profile"
                        className="rounded-full w-32 h-32 object-cover border-4 border-white"
                    />
                </div>
                <div className="text-center mt-4">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        {isEditing ? (
                            <input
                                type="text"
                                name="name"
                                value={editedData.name}
                                onChange={handleChange}
                                className="text-2xl text-center font-semibold text-gray-800 focus:outline-none focus:border-blue-500 border-b border-gray-300"
                            />
                        ) : (
                            profileData.name
                        )}
                    </h2>
                    <p className="text-gray-600">{profileData.occupation}</p>
                </div>
                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                        Contact Information
                    </h3>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-600">
                                Email:{" "}
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="email"
                                        value={editedData.email}
                                        onChange={handleChange}
                                        className="text-gray-600 focus:outline-none focus:border-blue-500 border-b border-gray-300"
                                    />
                                ) : (
                                    profileData.email
                                )}
                            </p>
                            <p className="text-gray-600">
                                Phone:{" "}
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="phone"
                                        value={editedData.phone}
                                        onChange={handleChange}
                                        className="text-gray-600 focus:outline-none focus:border-blue-500 border-b border-gray-300"
                                    />
                                ) : (
                                    profileData.phone
                                )}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                        Address
                    </h3>
                    <div>
                        <p className="text-gray-600">
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="address"
                                    value={editedData.address}
                                    onChange={handleChange}
                                    className="text-gray-600 focus:outline-none focus:border-blue-500 border-b border-gray-300"
                                />
                            ) : (
                                profileData.address
                            )}
                        </p>
                        <p className="text-gray-600">
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="city"
                                    value={editedData.city}
                                    onChange={handleChange}
                                    className="text-gray-600 focus:outline-none focus:border-blue-500 border-b border-gray-300"
                                />
                            ) : (
                                profileData.city
                            )}
                            ,{" "}
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="state"
                                    value={editedData.state}
                                    onChange={handleChange}
                                    className="text-gray-600 focus:outline-none focus:border-blue-500 border-b border-gray-300"
                                />
                            ) : (
                                profileData.state
                            )}
                            ,{" "}
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="zip"
                                    value={editedData.zip}
                                    onChange={handleChange}
                                    className="text-gray-600 focus:outline-none focus:border-blue-500 border-b border-gray-300"
                                />
                            ) : (
                                profileData.zip
                            )}
                        </p>
                        <p className="text-gray-600">
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="country"
                                    value={editedData.country}
                                    onChange={handleChange}
                                    className="text-gray-600 focus:outline-none focus:border-blue-500 border-b border-gray-300"
                                />
                            ) : (
                                profileData.country
                            )}
                        </p>
                    </div>
                </div>
                <div className="mt-8 border-t pt-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                        Saved Cards
                    </h3>
                    {profileData.savedCards.map((card, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center"
                        >
                            <p className="text-gray-600">{card}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8 border-t pt-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                        Shopping List
                    </h3>
                    {profileData.shoppingList.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center"
                        >
                            <p className="text-gray-600">{item}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8 border-t pt-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                        Orders
                    </h3>
                    {profileData.orders.map((order, index) => (
                        <div key={index} className="flex justify-between">
                            <p className="text-gray-600">{order.id}</p>
                            <p className="text-gray-600">{order.date}</p>
                            <p className="text-gray-600">{order.total}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8 border-t pt-6">
                    {isEditing ? (
                        <div className="flex justify-end">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2 focus:outline-none"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                            <button
                                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 mr-2 focus:outline-none"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <div className="flex justify-end">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2 focus:outline-none"
                                onClick={handleToggleEdit}
                            >
                                Edit Profile
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
