import React from 'react';

const Footer = () => {
    return (
        <footer className="bg text-center text-white bg">
        <div className="container p-4 pb-0">
            <section className="mb-4">
            {/* <!-- Facebook --> */}
                <a className="btn btn-primary btn-floating m-1 bg-fb" href="https://fr-fr.facebook.com/"
                    role="button"><i class="fab fa-facebook-f"></i></a>

                {/* <!-- Twitter --> */}
                <a className="btn btn-primary btn-floating m-1 bg-tw"  href="https://twitter.com/?lang=fr"
                    role="button"><i class="fab fa-twitter"></i></a>

                {/* <!-- Instagram --> */}
                <a className="btn btn-primary btn-floating m-1 bg-inst"  href="https://www.instagram.com/?hl=fr"
                    role="button"><i class="fab fa-instagram"></i></a>

                {/* <!-- Linkedin --> */}
                <a className="btn btn-primary btn-floating m-1 bg-lkd" href="https://www.linkedin.com/"
                    role="button"><i class="fab fa-linkedin-in"></i></a>
            </section>
        </div>
        
        <div className="text-center text-dark p-3">
        © 2021 Copyright: Groupomonia
        </div>

    </footer>
    );
};

export default Footer;