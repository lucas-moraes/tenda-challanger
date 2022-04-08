import Image from 'next/image';
import logo from '../../public/logo.png';

export const Logo = () => {
    return (
        <Image
            src={ logo }
            alt="Figura do logotipo"
            width="117.21"
            height="38"
        />
    );
};