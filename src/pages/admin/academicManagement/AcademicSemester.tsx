import { useGetAllSemestersQuery } from "@/redux/features/academicSemester/acadamicSemesterApi";

const AcademicSemester = () => {

    const {data} = useGetAllSemestersQuery(undefined);
    console.log(data)
    return (
        <div>
            <h1>This is academic semester</h1>
        </div>
    );
};

export default AcademicSemester;