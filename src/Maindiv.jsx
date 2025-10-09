import PillNav from './PillNav';
import Orb from './Orb';


export default function Maindiv() {
    const menuItems = [
        { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
        { label: 'About', ariaLabel: 'Learn about me', link: '/about' },
        { label: 'Services', ariaLabel: 'View our services', link: '/services' },
        { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
    ];


    return (
        <div>




            <div style={{ height: '100vh', background: '#1a1a1a', position: 'relative' }}>
                <PillNav
                    position="left"
                    items={menuItems}
                    menuButtonColor="#fff"
                    openMenuButtonColor="#fff"
                    changeMenuColorOnOpen={true}
                    colors={['#B19EEF', '#5227FF']}
                    accentColor="#ff6b6b"
                    onMenuOpen={() => console.log('Menu opened')}
                    onMenuClose={() => console.log('Menu closed')}
                />
            </div>

            <div className='absolute w-[100%] top-0 h-[80%]'>
                <Orb
                    amplitude={1}
                    distance={0}
                    enableMouseInteraction={true}
                />
            </div>
        </div>
    )
}
