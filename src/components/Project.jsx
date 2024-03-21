import { Card } from "./Card"
import { ProjectStatus } from "./ProjectStatus"

const data = {
    "statusCard": [
        {
            "title": "Finish Project",
            "number": 13,
            "type": "finish"
        },
        {
            "title": "Upcomming",
            "number": 13,
            "type": "upcomming"
        },
        {
            "title": "Total Project",
            "number": 13,
            "type": "total"
        },
        {
            "title": "In Progress",
            "number": 4,
            "type": "progress"
        }
    ]
}

export const Project = ({ formFunc, func, projectData }) => {

    const dataFromChild = (name, company, type, startDate, endDate, detail) => {
        func(name, company, type, startDate, endDate, detail)
    }

    return (
        <div className="bg-[#f7f7f7] min-h-full h-auto p-8 mb-8 rounded-t-3xl space-y-4">
            <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Projects</h2>
                <button onClick={() => formFunc()} className="bg-gray-200 px-4 py-3 rounded-lg text-xs font-bold">ADD NEW PROJECTS</button>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {data?.statusCard?.map((x, index) => (
                    <div key={index}>
                        <ProjectStatus title={x.title} number={x.number} type={x.type} />
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-3 gap-4">
                {projectData?.map((x, index) => (
                    <div key={index} index={index}>
                        <Card parentFunc={dataFromChild} props={x} />
                    </div>
                ))}
            </div>
        </div>
    )
}