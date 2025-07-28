
import "./about.css"
function About() {
  return (
    <>
    <section className="page-hero">
        <div className="page-hero-content">
            <h1>Наша кофейная история</h1>
            <p>Страсть к идеальному кофе с 2010 года</p>
        </div>
    </section>

    <section className="container">
        <div className="about-story">
            <div className="about-text">
                <h2>Как всё начиналось</h2>
                <p>В 2010 году два энтузиаста кофе — Алексей и Мария — открыли маленькую обжарочную в центре Москвы. Их цель была проста: делиться лучшим кофе, который они сами хотели бы пить каждый день.</p>
                <p>Начиная с нескольких килограммов зерен из Эфиопии и Колумбии, сегодня мы работаем напрямую с 37 фермерами из 15 стран мира. Каждую неделю мы обжариваем более 500 кг кофе для истинных ценителей.</p>
                <a href="contact.html" className="btn">Наши контакты</a>
            </div>
            <div className="about-image">
                <img src="https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Наша первая обжарочная"/>
            </div>
        </div>
    </section>

    <section className="mission-values">
        <div className="container">
            <h2 className="section-title">Наши принципы</h2>
            <div className="values-grid">
                <div className="value-card">
                    <div className="value-icon">
                        <i className="fas fa-seedling"></i>
                    </div>
                    <h3>Прямые поставки</h3>
                    <p>Мы работаем напрямую с фермерами, без посредников. Это гарантирует справедливую цену для производителей и высочайшее качество для вас.</p>
                </div>
                <div className="value-card">
                    <div className="value-icon">
                        <i className="fas fa-fire"></i>
                    </div>
                    <h3>Свежая обжарка</h3>
                    <p>Мы обжариваем кофе небольшими партиями несколько раз в неделю. Вы всегда получаете максимально свежий продукт.</p>
                </div>
                <div className="value-card">
                    <div className="value-icon">
                        <i className="fas fa-award"></i>
                    </div>
                    <h3>Экспертиза</h3>
                    <p>Наш Q-грейдер (сертифицированный специалист по оценке кофе) лично тестирует каждую партию перед обжаркой.</p>
                </div>
                <div className="value-card">
                    <div className="value-icon">
                        <i className="fas fa-recycle"></i>
                    </div>
                    <h3>Устойчивое развитие</h3>
                    <p>Мы используем биоразлагаемую упаковку и поддерживаем экологические инициативы на кофейных фермах.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="container team">
        <h2 className="section-title">Наша команда</h2>
        <div className="team-grid">
            <div className="team-card">
                <div className="team-image">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Алексей Петров"/>
                </div>
                <div className="team-info">
                    <h3 className="team-name">Алексей Петров</h3>
                    <p className="team-position">Основатель, главный обжарщик</p>
                    <p>Q-грейдер, автор курсов по обжарке кофе. В индустрии с 2005 года.</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-telegram"></i></a>
                    </div>
                </div>
            </div>
            <div className="team-card">
                <div className="team-image">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Мария Смирнова"/>
                </div>
                <div className="team-info">
                    <h3 className="team-name">Мария Смирнова</h3>
                    <p className="team-position">Сооснователь, директор по закупкам</p>
                    <p>Лично посещает фермы и отбирает лучшие лоты. Говорит на 4 языках.</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <div className="team-card">
                <div className="team-image">
                    <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Иван Козлов"/>
                </div>
                <div className="team-info">
                    <h3 className="team-name">Иван Козлов</h3>
                    <p className="team-position">Шеф-бариста</p>
                    <p>Чемпион России по латте-арт 2018-2020. Проводит мастер-классы.</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-youtube"></i></a>
                        <a href="#"><i className="fab fa-vk"></i></a>
                    </div>
                </div>
            </div>
            <div className="team-card">
                <div className="team-image">
                    <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Ольга Иванова"/>
                </div>
                <div className="team-info">
                    <h3 className="team-name">Ольга Иванова</h3>
                    <p className="team-position">Менеджер по клиентскому опыту</p>
                    <p>Поможет подобрать идеальный кофе и ответит на все вопросы.</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-whatsapp"></i></a>
                        <a href="#"><i className="fas fa-envelope"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="partners">
        <div className="container">
            <h2 className="section-title">Наши партнеры</h2>
            <div className="partners-grid">
                <div className="partner-logo">
                    <img src="https://via.placeholder.com/150x80?text=Ethiopia+Coffee" alt="Ethiopia Coffee Union"/>
                </div>
                <div className="partner-logo">
                    <img src="https://via.placeholder.com/150x80?text=Colombia+Export" alt="Colombia Coffee Exporters"/>
                </div>
                <div className="partner-logo">
                    <img src="https://via.placeholder.com/150x80?text=Specialty+Association" alt="Specialty Coffee Association"/>
                </div>
                <div className="partner-logo">
                    <img src="https://via.placeholder.com/150x80?text=Organic+Certified" alt="Organic Certified"/>
                </div>
                <div className="partner-logo">
                    <img src="https://via.placeholder.com/150x80?text=Fair+Trade" alt="Fair Trade"/>
                </div>
            </div>
        </div>
    </section>
</>
  );
}
export default About;