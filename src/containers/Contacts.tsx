import React from 'react';

const Contacts: React.FC = () => {
    const contactPhoneNumber: string = "+996222060210";

    return (
        <div className="container my-5 text-white">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card bg-dark text-white border-secondary shadow">
                        <div className="card-header border-secondary p-3">
                            <h3 className="card-title text-info mb-0">Contacts</h3>
                        </div>
                        <div className="card-body p-4">
                            <ul className="list-group list-group-flush bg-transparent">
                                <li className="list-group-item bg-transparent text-white border-secondary px-0 d-flex justify-content-between">
                                    <span className="text-muted">Телефон:</span>
                                    <a href={`tel:${contactPhoneNumber}`} className="text-info text-decoration-none fw-bold">
                                        {contactPhoneNumber}
                                    </a>
                                </li>
                                <li className="list-group-item bg-transparent text-white border-secondary px-0 d-flex justify-content-between">
                                    <span className="text-muted">Локация:</span>
                                    <span className="fw-semibold">Бишкек, Kyrgyzstan</span>
                                </li>
                                <li className="list-group-item bg-transparent text-white border-none px-0 d-flex justify-content-between">
                                    <span className="text-muted">Специализация:</span>
                                    <span className="text-info fw-semibold">Frontend Developer</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;