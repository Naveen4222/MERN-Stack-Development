export const Home = () => {
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>MERN Stack learning </p>
                            <h1>Welcome to Naveen MERN Stack</h1>
                            <p>
                                Learning and building with the MERN stack one project at a time.
                                Exploring React, Node.js, Express, and MongoDB through practical development.
                                Focused on creating real-world applications and improving full-stack skills.
                                Continuously learning, building, and refining the codebase.

                            </p>
                            <div className="btn btn-group">
                                <a href="/contact"><button className="btn">connect now</button></a>
                                <a href="/service">
                                    <button className="btn">Learn more</button></a>
                            </div>
                        </div>
                        {/* hero images */}
                        <div className="hero-image">
                            <img src="/images/home.png" alt="Home" />
                        </div>
                    </div>
                </section>

                {/* 2nd section */}
        <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-image">
                            <img src="/images/home.png" alt="Home" />
                        </div>
                        <div className="hero-content">
                            <p>MERN Stack learning </p>
                            <h1>Welcome to Naveen MERN Stack</h1>
                            <p>
                                Learning and building with the MERN stack one project at a time.
                                Exploring React, Node.js, Express, and MongoDB through practical development.
                                Focused on creating real-world applications and improving full-stack skills.
                                Continuously learning, building, and refining the codebase.

                            </p>
                            <div className="btn btn-group">
                                <a href="/contact"><button className="btn">connect now</button></a>
                                <a href="/service">
                                    <button className="btn">Learn more</button></a>
                            </div>
                        </div>
                        {/* hero images */}
                        
                    </div>
                </section>

            </main >
        </>
    )
}