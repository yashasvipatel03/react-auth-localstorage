import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Dashboard() {
    const navigate = useNavigate();

    // Logged-in user
    const [user, setUser] = useState(null);

    // Edit mode
    const [isEditing, setIsEditing] = useState(false);

    // Load currentUser on mount
    useEffect(() => {
        const currentUser = JSON.parse(
            localStorage.getItem("currentUser")
        );

        if (!currentUser) {
            navigate("/login");
        } else {
            setUser(currentUser);
        }
    }, [navigate]);

    // Prevent crash while loading
    if (!user) {
        return null;
    }

    // Handle input change
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    // Update user in localStorage (both currentUser + users list)
    const handleUpdate = () => {
        const users =
            JSON.parse(localStorage.getItem("users")) || [];

        const updatedUsers = users.map((u) =>
            u.email === user.email ? user : u
        );

        localStorage.setItem(
            "users",
            JSON.stringify(updatedUsers)
        );
        localStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        );

        setIsEditing(false);
        alert("Profile updated successfully!");
    };

    // Logout
    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        navigate("/login");
    };

    // Delete account
    const handleDelete = () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete your account?"
        );

        if (confirmDelete) {
            const users =
                JSON.parse(localStorage.getItem("users")) || [];

            const updatedUsers = users.filter(
                (u) => u.email !== user.email
            );

            localStorage.setItem(
                "users",
                JSON.stringify(updatedUsers)
            );
            localStorage.removeItem("currentUser");

            navigate("/");
        }
    };

    return (
        <div className="page-center">
            <div className="card">
                <h2>Welcome {user.name}</h2>

                {!isEditing ? (
                    <>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Age:</strong> {user.age}</p>
                        <p><strong>Nationality:</strong> {user.nationality}</p>
                        <p><strong>State:</strong> {user.state}</p>

                        <div className="edit-delete">
                            <button onClick={() => setIsEditing(true)}>
                            Edit
                        </button>
                        <button
                            className="delete-btn"
                            onClick={handleLogout}>
                            Logout
                        </button>
                        </div>
                        <button
                            className="delete-btn"
                            onClick={handleDelete}
                        >
                            Delete Account
                        </button>
                    </>
                ) : (
                    <>
                        <input
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                        />
                        <input
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                        />
                        <input
                            name="age"
                            type="number"
                            value={user.age}
                            onChange={handleChange}
                        />
                        <input
                            name="nationality"
                            value={user.nationality}
                            onChange={handleChange}
                        />
                        <input
                            name="state"
                            value={user.state}
                            onChange={handleChange}
                        />

                        <button onClick={handleUpdate}>
                            Update
                        </button>
                        <button
                            className="delete-btn"
                            onClick={() => setIsEditing(false)}
                        >
                            Cancel
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
