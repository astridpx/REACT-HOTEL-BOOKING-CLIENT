import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import PersonTable from "../components/Person Table/PersonTable";

const AdminPage = () => {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload(false);
  };

  return (
    <>
      <div className="h-screen w-full relative bg-emerald-300  ">
        <div className="flex justify-between items-center w-full px-8 py-4 mb-4">
          <div
            className="p-1 bg-red-600 rounded-full cursor-pointer shadow-2xl md:p-2"
            onClick={() => navigate("/")}
          >
            <AiOutlineArrowLeft className="text-lg text-[#fcfffa] md:text:xl" />
          </div>

          <button
            type="button"
            className="ml-12 px-7 py-2 font-semibold rounded border border-gray-400 hover:bg-[#F04444] hover:text-[#fcfffa] transition cursor-pointer"
            onClick={Logout}
          >
            Logout
          </button>
        </div>
        {/* TABLE */}
        <section className="flex items-center justify-center h-4/5 w-full">
          <PersonTable />
        </section>
      </div>
    </>
  );
};

export default AdminPage;
