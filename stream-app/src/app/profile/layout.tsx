export default function ProfileLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <>
            <h1>Profile Nav</h1>
            {children}
        </>
    );
}