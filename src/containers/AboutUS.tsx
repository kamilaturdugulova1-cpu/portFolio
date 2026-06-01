import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div className="container my-5 text-white">
            <div className="row justify-content-center">
                <div className="col-md-8 bg-dark p-5 rounded-3 border border-secondary shadow">
                    <h2 className="mb-4 text-info">Обо мне</h2>
                    <p className="lh-lg mb-3">
                        Привет! Меня зовут Камила. Я — <strong>Frontend Developer</strong> и студентка <strong>Attractor School</strong>.
                        Моя ключевая специализация заключается в разработке клиентской стороны веб-приложений.
                        Я создаю отзывчивые, высокопроизводительные интерфейсы, полностью концентрируясь на написании
                        чистой бизнес-логики, построении масштабируемой архитектуры компонентов и обеспечении
                        стабильного взаимодействия приложения с сервером.
                    </p>
                    <p className="lh-lg text-muted">
                        В рамках обучения я глубоко изучаю и применяю на практике современный стандарт JavaScript (ES6+),
                        строго типизированный TypeScript, библиотеку React и экосистему React Router для управления
                        клиентским роутингом (SPA). В работе со стилями и интерфейсом я использую фреймворк Bootstrap,
                        препроцессор Sass/SCSS и методологию БЭМ для модульной структуры кода.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;