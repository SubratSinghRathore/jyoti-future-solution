import React from 'react'
import { useState } from 'react';

export default function Footer() {
    //contact form
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "c08b1b28-bd5e-4947-9b2c-41fa1cc14212");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <>
            <section className="contact-section">
                <h2>Contact Us</h2>
                <div>
                    <form onSubmit={onSubmit}>
                        <input type="text" name="name" placeholder='Your Name' required />
                        <select name="courses" required>
                            <option value="">Select a Course</option>
                            <optgroup label="Engineering & IT">
                                <option value="BCA">BCA</option>
                                <option value="MCA">MCA</option>
                                <option value="B.Tech">B.Tech</option>
                                <option value="M.Tech">M.Tech</option>
                            </optgroup>
                            <optgroup label="Management">
                                <option value="BBA">BBA</option>
                                <option value="MBA">MBA</option>
                            </optgroup>
                            <optgroup label="Pharmacy & Medical">
                                <option value="B-Pharma">B-Pharma</option>
                                <option value="D-Pharma">D-Pharma</option>
                                <option value="M-Pharma">M-Pharma</option>
                                <option value="ANM">ANM</option>
                                <option value="GNM">GNM</option>
                                <option value="BSc Nursing">BSc Nursing</option>
                                <option value="MSc Nursing">MSc Nursing</option>
                                <option value="BAMS">BAMS</option>
                                <option value="OT">OT</option>
                                <option value="DMLT">DMLT</option>
                                <option value="BDS">BDS</option>
                            </optgroup>
                            <optgroup label="Education & Law">
                                <option value="B.Ed">B.Ed</option>
                                <option value="M.Ed">M.Ed</option>
                                <option value="LLB">LLB</option>
                                <option value="BA-LLB">BA-LLB</option>
                            </optgroup>
                            <optgroup label="Arts & Commerce">
                                <option value="BA">BA</option>
                                <option value="BSc">BSc</option>
                                <option value="B.Com">B.Com</option>
                                <option value="MA">MA</option>
                                <option value="MSc">MSc</option>
                                <option value="M.Com">M.Com</option>
                            </optgroup>
                            <optgroup label="Technical & Vocational">
                                <option value="ITI">ITI (All Branches)</option>
                                <option value="Polytechnic">Polytechnic</option>
                            </optgroup>
                        </select>

                        <input type="Number" name="number" placeholder='Mobile No' required />
                        <input type="email" name="email" placeholder='Your Mail' required />
                        <textarea name="message" placeholder='Course Detail' required></textarea>

                        <button type="submit">Send Inquiry</button>

                    </form>
                    <span>{result}</span>

                </div>

                <div className="contact-card">
                    <p><strong>Email:</strong> info@jyotifuturesolutions.com</p>
                    <p><strong>Phone:</strong> +91 831 833 1949</p>
                    <p><strong>Address:</strong> Kanpur, Uttar Pradesh, India</p>
                    <p><strong>Founder CEO:</strong> Anuwesh kumar</p>
                    <p><strong>Director :</strong> Vinay parihar</p>
                </div>
            </section>
        </>
    )
}
