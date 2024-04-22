import React from "react";

const Rewards = () => {
    // Dummy data for rewards
    const dummyRewards = [
        {
            id: 1,
            title: "Free Coffee",
            description: "Enjoy a complimentary coffee on your next visit.",
            points: 50,
        },
        {
            id: 2,
            title: "Discount Coupon",
            description: "Get 20% off on your next purchase.",
            points: 100,
        },
        {
            id: 3,
            title: "Movie Ticket",
            description:
                "Get a free movie ticket for any movie of your choice.",
            points: 150,
        },
    ];

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-5xl font-semibold text-center text-white mb-10">
                Rewards
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center">
                {dummyRewards.map((reward) => (
                    <div
                        key={reward.id}
                        className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                {reward.title}
                            </h3>
                            <p className="text-gray-600 mb-2">
                                {reward.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700">
                                    Points: {reward.points}
                                </span>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">
                                    Redeem
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rewards;
