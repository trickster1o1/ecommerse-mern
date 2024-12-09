import { Metadata } from "next"

type Props = {
    params: {
        movieId: string;
    }
}

export const generateMetadata = async ({params}: Props) : Promise<Metadata> =>{
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`Silo ${params.movieId}`);
        }, 100);
    })
    return {
        title: `${title}`
    };
};

export default function ProductDetail({params}: Props) {
    return <h1>Product Detail {params.movieId}</h1>
} 