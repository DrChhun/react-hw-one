import { Message } from "./Message"

export const ClientMessage = ({ data }) => {
    return (
        <div>
            <div className="flex justify-between ml-6 py-4">
                <p>Client Messages</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
            </div>
            <hr />
            <div className=" mb-6">
                {data.Message.map((x, index) => (
                    <div key={index}>
                        <Message profile={x.img} name={x.name} date={x.date} message={x.message} />
                    </div>
                ))}
            </div>
        </div>
    )
}