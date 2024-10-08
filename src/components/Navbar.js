import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
import FAQModal from './FAQModal';
import { useState } from 'react';

function NavbarComponent({ handleSignInClick, handleReviewClick }) {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    const [showFAQModal, setShowFAQModal] = useState(false);

    const openFAQModal = () => setShowFAQModal(true);
    const closeFAQModal = () => setShowFAQModal(false);

    return (
        <>
            <Navbar expand="lg" className="fixed-top">
                <Container fluid>
                    <Link to="/" className="Site-Name">
                        {t('Putts For Birdies')}
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavDropdown title={t('OurFacilities')} id="facilities-dropdown">
                                <NavDropdown.Item as={Link} to="/Golf-Courses">
                                    {t('golfCourses')}
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Driving-Range">
                                    {t('DrivingRange')}
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Putting-Green">
                                    {t('PuttingChippingGreen')}
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={t('OurServices')} id="services-dropdown">
                                <NavDropdown.Item as={Link} to="/tournaments">
                                    {t('Tournaments')}
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/lessons">
                                    {t('Lessons')}
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/SummerCamp">
                                    {t('Summer Camp')}
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Link to="/WeeklySchedule" className="nav-link">{t('WeeklyCalendar')}</Link>
                            <NavDropdown title={t('Search')} id="search-dropdown">
                                <NavDropdown.Item as={Link} to="/Tournament-Search">
                                    {t('tournamentSearch')}
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/lessons">
                                    {t('lessonsSearch')}
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Summer-Camp-Search">
                                    {t('summerCampSearch')}
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Tee-Time-Search">
                                    {t('TeeTimeSearch')}
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="nav-link" onClick={handleSignInClick}>
                                {t('signIn')}
                            </Nav.Link>

                            <Nav.Link className="nav-link" onClick={handleReviewClick}>{t('review')}</Nav.Link>
                            <Button variant="info" className="nav-link" onClick={openFAQModal}>
                                {t('help')} / {t('faq')}
                            </Button>

                            <Button variant="outline-primary" onClick={() => changeLanguage('en')} className="nav-link ms-3">{t('English')}</Button>
                            <Button variant="outline-primary" onClick={() => changeLanguage('fr')} className="nav-link">{t('French')}</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <FAQModal show={showFAQModal} handleClose={closeFAQModal} />
        </>
    );
};

export default NavbarComponent;