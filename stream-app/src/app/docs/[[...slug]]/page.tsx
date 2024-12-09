export default function Docs({params}:{
    params: {
        slug: string[];
    }
}) {
    return <h1>Documents {params.slug?.length ? params.slug[0] : null}</h1>;
}