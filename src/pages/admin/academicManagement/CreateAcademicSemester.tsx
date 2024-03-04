import PHForm from "@/components/form/UniForm";
// import PHInput from "@/components/form/UniInput";
import PHSelect from "@/components/form/UniSelect";
import { monthOptions } from "@/constant/global";
// import { academicSemesterSchema } from "@/schemas/academicManagement.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { z } from "zod";

const nameOptions = [
    {
        value:'01',
        label:'Autumn'
    },
    {
        value:'02',
        label:'Summer'
    },
    {
        value:'03',
        label:'Fall'
    },
]

const currentYear = new Date().getFullYear();
console.log(currentYear)
const yearOptions = [0,1,2,3,4].map(number => ({
    value:String(currentYear+ number),
    label: String(currentYear+ number),
}))
console.log(yearOptions)

const CreateAcademicSemester = () => {
    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        const name = nameOptions[Number(data?.name)-1]?.label;
        const semesterData = {
            name,
            code:data.name,
            year: data.year,
            startMonth:data.startMonth,
            endMonth:data.endMonth,
        }
        console.log(semesterData)
    }
    const academicSemesterSchema = z.object({
        name:z.string({required_error: 'Name is required.'}),
        year:z.string({required_error: 'Year is required.'}),
        startMonth:z.number({required_error:'Start Month is required'}),
        endMonth:z.number({required_error:'End Month is required'}),
    })
    
    return (
        <Flex justify="center" align="center">
        <Col span={6}>
        <PHForm onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}>
            {/* <PHInput type="text" name="name" label="Name"/>
            <PHInput type="text" name="year" label="Year"/> */}
            <PHSelect label="Name" name="name" options={nameOptions}/>
            <PHSelect label="Year" name="year" options={yearOptions}/>
            <PHSelect label="Start Month" name="startMonth" options={monthOptions}/>
            <PHSelect label="End Month" name="endMonth" options={monthOptions}/>
            <Button htmlType="submit">Submit</Button>
        </PHForm>
        </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;