import AppBar from '../Components/AppBar/AppBar';
import Drawer from '../Components/Drawer/Drawer';
import Section from '../Components/Section/Section';
import AuthWrapper from '../Components/AuthWrapper';
import { Head } from '@inertiajs/inertia-react';

const Main = (Comp, title) => (props) => {
    return (
        <AuthWrapper>
            {
                title && <Head title={title} />
            }
            <AppBar />
            <Drawer />
            <Section>
                <Comp {...props} />
            </Section>
        </AuthWrapper>
    )
}

export default Main
