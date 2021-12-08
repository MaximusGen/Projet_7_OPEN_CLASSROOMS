import React from 'react';

const Footer = () => {
    return (
        <footer class="bg text-center text-white bg">
        {/* <!-- Grid container --> */}
        <div class="container p-4 pb-0">
            {/* <!-- Section: Social media --> */}
            <section class="mb-4">
                {/* <!-- Facebook --> */}
                <a class="btn btn-primary btn-floating m-1" style="background-color: #3b5998;" href="#!"
                    role="button"><i class="fab fa-facebook-f"></i></a>

                {/* <!-- Twitter --> */}
                <a class="btn btn-primary btn-floating m-1" style="background-color: #55acee;" href="#!"
                    role="button"><i class="fab fa-twitter"></i></a>

                {/* <!-- Instagram --> */}
                <a class="btn btn-primary btn-floating m-1" style="background-color: #ac2bac;" href="#!"
                    role="button"><i class="fab fa-instagram"></i></a>

                {/* Linkedin */}
                <a class="btn btn-primary btn-floating m-1" style="background-color: #0082ca;" href="#!"
                    role="button"><i class="fab fa-linkedin-in"></i></a>

            </section>

        </div>

        {/* <!-- Copyright --> */}

        <div class="text-center text-dark p-3">
            © 2021 Copyright: Groupomonia
        </div>

    </footer>
    );
};

export default Footer;