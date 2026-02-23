import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <Menu />
            <div style={{ paddingTop: '0.7rem' }}>
                <div style={{ marginTop: '3.5rem' }}>
                    <Outlet /> </div>
            </div>
            <Footer />
        </>
    );
}