import PHForm from "@/components/form/UniForm";
// import PHInput from "@/components/form/UniInput";
import PHSelect from "@/components/form/UniSelect";
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";


const CreateAcademicSemester = () => {
    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }
    return (
        <Flex justify="center" align="center">
        <Col span={6}>
        <PHForm onSubmit={onSubmit}>
            {/* <PHInput type="text" name="name" label="Name"/>
            <PHInput type="text" name="year" label="Year"/> */}
            <PHSelect label="name"/>
            <Button htmlType="submit">Submit</Button>
        </PHForm>
        </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;