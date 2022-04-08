import Image from 'next/image';
import arrow from '../../public/arrow.png';

export const Arrow = () => {
    return (
        <Image
            src={ arrow }
            alt="Figura do logotipo"
            width="189.17"
            height="189.64"
        />
    );
};