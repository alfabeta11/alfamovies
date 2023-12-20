export default function Lector({id, mediaType}: {id: string, mediaType: string}) {
    const source = `https://vidsrc.to/embed/${mediaType}/${id}`;
    return (
        <div className="relative w-full flex justify-center mb-4">
            <iframe src={source} allowFullScreen className="aspect-[16/9] w-full rounded-md mb-3 hover:shadow-sm hover:shadow-cyan-800">
            </iframe>
        </div>
    )
}