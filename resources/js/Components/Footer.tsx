import React from "react";

function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full py-4 bg-[#0A0A0A] text-white text-center">
            <p>
                &copy; {new Date().getFullYear()} MyBazar. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
