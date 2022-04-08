import Image from 'next/image';
import backImg from '../../public/back-img-left.png';

export const BackImageLeft = () => {
    return (
        <Image
            src={ backImg }
            alt="Figura do background"
            width="600"
            height="300"
        />
    );
};