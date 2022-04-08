import Image from 'next/image';
import backImg from '../../public/back-img-right.png';

export const BackImageRight = () => {
    return (
        <Image
            src={ backImg }
            alt="Figura do background"
            width="700"
            height="400"
        />
    );
};