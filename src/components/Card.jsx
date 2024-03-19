export const Card = ({ props, parentFunc }) => {
    return (
        <>
            <div className="space-y-3 bg-white p-6 rounded-2xl">
                <div className="flex justify-between">
                    <p className="text-xs text-slate-500">{props.startDate}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </div>
                <p className="font-semibold">{props.company}</p>
                <h2 className={`font-bold text-lg`}>{props.name}</h2>
                <p className={`${props.type == "Full Time" ? "bg-red-200 px-[15px] text-sm w-fit rounded-full text-red-600 font-semibold" : props.type == "Part Time" ? "bg-purple-200 px-[15px] text-sm w-fit rounded-full text-purple-600 font-semibold" : "bg-yellow-200 px-[15px] text-sm w-fit rounded-full text-yellow-600 font-semibold"}`}>{props.type}</p>
                <hr />
                <div className="w-full flex justify-end">
                    <button onClick={() => parentFunc(props.name, props.company, props.type, props.startDate, props.endDate, props.detail)} className="bg-purple-500 text-sm px-4 text-white py-2 rounded-full">See Detail</button>
                </div>
            </div>
        </>
    )
}