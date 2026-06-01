import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Portfolio: React.FC = () => {
    return (
        <div className="container my-5 text-white">
            <div className="text-center mb-5">
                <h2 className="display-6 fw-bold text-info">Мое портфолио</h2>
                <p className="text-white-50">Ниже представлены мои выполненные лабораторные и практические работы на React</p>
            </div>

            <div className="row g-4 mb-5">
                <div className="col-md-6">
                    <div className="card h-100 bg-dark text-white border-secondary shadow-sm">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-info fw-bold mb-3">Burger Constructor</h5>
                            <p className="card-text text-white flex-grow-1">
                                Интерактивное SPA-приложение для динамической сборки бургеров. Включает управление сложными
                                состояниями, расчет стоимости ингредиентов онлайн и формирование чека.
                            </p>
                            <NavLink to="burger-constructor" className="btn btn-outline-info mt-3 align-self-start">
                                Посмотреть детали
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 bg-dark text-white border-secondary shadow-sm">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-info fw-bold mb-3">User Management System</h5>
                            <p className="card-text text-white flex-grow-1">
                                Панель администрирования пользователей со строгой типизацией на TypeScript, валидацией
                                вводимых данных через формы и возможностью фильтрации списков.
                            </p>
                            <NavLink to="user-management" className="btn btn-outline-info mt-3 align-self-start">
                                Посмотреть детали
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-12 bg-dark p-4 rounded-3 border border-secondary">
                    <div className="text-info small mb-2 text-uppercase fw-bold">Выбранный проект:</div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;