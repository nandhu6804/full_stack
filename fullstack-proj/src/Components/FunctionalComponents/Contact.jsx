import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // Importing Link from react-router-dom
import FAQ from "./FAQ";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [greeting, setGreeting] = useState("");

    // Dynamic Greeting Based on Time of Day
    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting("Good Morning!");
        else if (hour < 18) setGreeting("Good Afternoon!");
        else setGreeting("Good Evening!");
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setError("All fields are required!");
            return;
        }

        setIsSending(true);
        try {
            const response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess("🎉 Message sent successfully! We'll be in touch soon.");
                setFormData({ name: "", email: "", message: "" });
            } else {
                const errorMessage = await response.text();
                setError(`🚨 Error: ${errorMessage}`);
            }
        } catch (err) {
            console.error(err);
            setError("🚨 Network error. Please try again later.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div
            style={{
                maxWidth: "800px",
                margin: "0 auto",
                padding: "20px",
                fontFamily: "Arial, sans-serif",
                background: "linear-gradient(to right, #e0f7fa, #ffffff)",
                borderRadius: "12px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
        >
            {/* Greeting Section */}
            <h1
                style={{
                    textAlign: "center",
                    fontSize: "2.5rem",
                    color: "#00796b",
                    fontWeight: "bold",
                }}
            >
                {greeting} 👋
            </h1>
            <p style={{ textAlign: "center", fontSize: "1.2rem", color: "#004d40" }}>
                We'd love to hear from you. Get in touch with us today!
            </p>

            {/* Contact Details */}
            <div
                style={{
                    marginBottom: "20px",
                    background: "#ffffff",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
            >
                <h2 style={{ color: "#00796b" }}>Our Contact Details</h2>
                <p>
                    📞 <strong>Phone:</strong> +91-9876543210
                </p>
                <p>
                    📧 <strong>Email:</strong> contact@example.com
                </p>
                <p>
                    📍 <strong>Address:</strong> Ponnar Hostel, Kongu Engineering College,
                    Perundurai, Tamil Nadu
                </p>
                <div style={{ marginTop: "10px" }}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: "10px" }}>
                        <img src="/icons/facebook.png" alt="Facebook" style={{ width: "24px" }} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: "10px" }}>
                        <img src="/icons/twitter.png" alt="Twitter" style={{ width: "24px" }} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/instagram.png" alt="Instagram" style={{ width: "24px" }} />
                    </a>
                </div>
            </div>

            {/* Contact Form */}
            <div
                style={{
                    background: "#ffffff",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
            >
                <h2 style={{ color: "#00796b" }}>Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "15px" }}>
                        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "4px",
                                border: "1px solid #ddd",
                                boxShadow: "inset 0px 1px 2px rgba(0, 0, 0, 0.1)",
                            }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "4px",
                                border: "1px solid #ddd",
                                boxShadow: "inset 0px 1px 2px rgba(0, 0, 0, 0.1)",
                            }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "4px",
                                border: "1px solid #ddd",
                                boxShadow: "inset 0px 1px 2px rgba(0, 0, 0, 0.1)",
                            }}
                            required
                        ></textarea>
                    </div>
                    {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
                    {success && <p style={{ color: "green", fontWeight: "bold" }}>{success}</p>}
                    <button
                        type="submit"
                        style={{
                            background: "linear-gradient(to right, #00796b, #004d40)",
                            color: "white",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "4px",
                            fontWeight: "bold",
                            cursor: isSending ? "not-allowed" : "pointer",
                            opacity: isSending ? "0.6" : "1",
                        }}
                        disabled={isSending}
                    >
                        {isSending ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>

            {/* Quick Help Section */}
            <div
                style={{
                    marginTop: "20px",
                    background: "#ffffff",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
            >
                <h3 style={{ color: "#00796b" }}>Need Quick Help?</h3>
                <p>💡 Check our <a href="/FAQ" style={{ color: "#00796b" }}>FAQs</a> or reach out via our social media.</p>
            </div>
        </div>
    );
};

export default ContactPage;