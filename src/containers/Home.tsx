import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="container text-center my-5 py-5 text-white">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    <h1 className="display-4 fw-bold mb-3">Турдугулова Камила Алмазовна</h1>
                    <p className="lead text-muted mb-4">Frontend Developer</p>
                    <div className="d-inline-block bg-secondary bg-opacity-25 border border-secondary rounded-pill px-4 py-2">
                        <span className="text-info fw-semibold">React & TypeScript Developer</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;