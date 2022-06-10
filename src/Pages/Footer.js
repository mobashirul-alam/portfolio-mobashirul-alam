import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer class="footer footer-center p-4 bg-base-300 text-base-content font-bold">
            <div>
                <p>Copyright © {year} - All right reserved by Mobashirul Alam</p>
            </div>
        </footer>
    );
};

export default Footer;