import { useState } from "react";
import { ClientMessage } from "./components/ClientMessage";
import { Navbar } from "./components/Navbar";
import { Project } from "./components/Project";
import { Sidebar } from "./components/Sidebar";
import messageData from "./data/messageData.json"
import project from "./data/projectData.json"

const App = () => {
  const pullData = (name, company, type, startDate, endDate, description) => {
    setPopUpData({
      name: name,
      company: company,
      type: type,
      startDate: startDate,
      endDate: endDate,
      description: description
    });
    setPopUp(true);
  }

  const pullFormData = () => {
    setFormPopUp(true);
  }

  const addNewData = (event) => {
    event.preventDefault();
    const positionPattern = /^[a-zA-Z\s]+$/;
    const companyPattern = /^[a-zA-Z\s]+$/;
    const startDatePattern = /^\d{4}-\d{2}-\d{2}$/;
    const endDatePattern = /^\d{4}-\d{2}-\d{2}$/;

    setPositionError(
      !position.trim() ? '*Position is Empty' : !positionPattern.test(position) ? 'Please enter a valid position.' : ''
    );

    setCompanyError(
      !company.trim() ? '*Company is Empty' : !companyPattern.test(company) ? 'Please enter a valid company name.' : ''
    );

    setTypeError(!type ? '*Type is Empty' : '');

    setStartDateError(
      !startDate.trim()
        ? '*Start Date is Empty'
        : !startDatePattern.test(startDate)
          ? 'Please enter a valid start date (YYYY-MM-DD).'
          : ''
    );

    setEndDateError(
      !endDate.trim()
        ? '*End Date is Empty'
        : !endDatePattern.test(endDate)
          ? 'Please enter a valid end date (YYYY-MM-DD).'
          : new Date(startDate) > new Date(endDate)
            ? (() => { setEndDate(''); return '*End date < Start date'; })
            : ''
    );

    setDescriptionError(!description.trim() ? '*Description is Empty' : '');

    if (company != '' && description != '' && endDate != '' && position != '' && type != '' && startDate != '') {
      setProjectData([...projectData, {
        company: company,
        detail: description,
        endDate: endDate,
        id: projectData.length + 1,
        name: position,
        startDate: startDate,
        type: type
      }])
      setCompany('')
      setEndDate('')
      setStartDate('')
      setPosition('')
      setType('')
      setDescription('')
    }
  }

  const [positionError, setPositionError] = useState('');
  const [companyError, setCompanyError] = useState('');
  const [typeError, setTypeError] = useState('');
  const [startDateError, setStartDateError] = useState('');
  const [endDateError, setEndDateError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [projectData, setProjectData] = useState(project?.Data);
  const [popUp, setPopUp] = useState(false);
  const [formPopUp, setFormPopUp] = useState(false);
  const [popUpData, setPopUpData] = useState();
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [type, setType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="bg-[#f7f7f7] h-screen py-16">
      <div className=" bg-white pb-0 max-w-7xl h-[95%] p-8 grid grid-cols-12  rounded-3xl mx-auto">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-11 overflow-hidden">
          <Navbar />
          <div className="grid grid-cols-12 h-[95%]">
            <div className="col-span-9 overflow-y-scroll no-scrollbar">
              <Project formFunc={pullFormData} func={pullData} projectData={projectData} />
            </div>
            <div className="col-span-3 overflow-y-scroll no-scrollbar">
              <ClientMessage data={messageData} />
            </div>
          </div>
        </div>
      </div>

      {/* popup card */}
      <div className={`absolute ${popUp ? "block" : "hidden"} top-0 w-full  h-full bg-black/50`}>
        <div className={`w-1/2 ${popUpData?.type == 'Full Time' ? 'bg-red-200' : popUpData?.type == 'Part Time' ? 'bg-purple-200' : 'bg-yellow-200'} relative h-auto rounded-2xl mx-auto top-1/3`}>
          <div onClick={() => setPopUp(false)} className="p-1 rounded-full bg-gray-200 absolute right-3 top-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>
          <div className="p-8">
            <h2 className="mb-2 font-bold">{popUpData?.company}</h2>
            <p>Position: {popUpData?.name} ( {popUpData?.type} )</p>
            <p>Duration: From {popUpData?.startDate} to {popUpData?.endDate}</p>
            <p>Description: {popUpData?.description}</p>
          </div>
        </div>
      </div>

      {/* popup form */}
      <div className={`absolute ${formPopUp ? "block" : "hidden"} top-0 w-full  h-full bg-black/50`}>
        <form onSubmit={addNewData} className="bg-white p-8 space-y-4 w-1/2 rounded-2xl mx-auto relative top-20" action="">
          <div className="flex items-center w-full justify-center relative">
            <h2 className="text-xl font-bold">Input Your Information</h2>
            <div onClick={() => setFormPopUp(false)} className="p-1 rounded-full bg-gray-200 absolute right-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="space-x-2">
              <label className="font-semibold text-sm">POSITION</label>
              <span className="text-red-500">{positionError}</span>
            </div>
            <input onChange={(e) => setPosition(e.target.value)} value={position} className="py-2 px-4 border-2 border-blue-500 rounded-md" type="text" placeholder="UX-UI Design" />
          </div>
          <div className="flex flex-col">
            <div className="space-x-2">
              <label className="font-semibold text-sm">COMPANY</label>
              <span className="text-red-500">{companyError}</span>
            </div>
            <input onChange={(e) => setCompany(e.target.value)} value={company} className="py-2 px-4 border-2 border-blue-500 rounded-md" type="text" placeholder="UX-UI Design" />
          </div>
          <div className="flex flex-col">
            <div className="space-x-2">
              <label className="font-semibold text-sm">TYPE</label>
              <span className="text-red-500">{typeError}</span>
            </div>
            <select onChange={(e) => setType(e.target.value)} value={type} className="py-2 px-4 border-2 border-blue-500 rounded-md">
              <option value="">---Choose Any Option---</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>
          <div className="flex gap-4">
            <div className="flex w-full flex-col">
              <div className="space-x-2">
                <label className="font-semibold text-sm">START DATE</label>
                <span className="text-red-500">{startDateError}</span>
              </div>
              <input onChange={(e) => setStartDate(e.target.value)} value={startDate} className="py-2 px-4 border-2 border-blue-500 rounded-md" type="date" placeholder="UX-UI Design" />
            </div>
            <div className="flex w-full flex-col">
              <div className="space-x-2">
                <label className="font-semibold text-sm">END DATE</label>
                <span className="text-red-500">{endDateError}</span>
              </div>
              <input onChange={(e) => setEndDate(e.target.value > startDate ? e.target.value : setEndDateError('End date < Start date'))} value={endDate} className="py-2 px-4 border-2 border-blue-500 rounded-md" type="date" placeholder="UX-UI Design" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="space-x-2">
              <label className="font-semibold text-sm">DESCRIPTION</label>
              <span className="text-red-500">{descriptionError}</span>
            </div>
            <textarea onChange={(e) => setDescription(e.target.value)} value={description} className="py-2 px-4 border-2 border-blue-500 rounded-md" type="text" placeholder="Descript what you do..." />
          </div>
          <div className="flex justify-end w-full">
            <button className="bg-blue-500 hover:bg-blue-600 duration-300 text-white px-4 py-4 rounded-lg" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div >
  )
}

export default App;