import React, {FC} from 'react';
import DefaultLayout from "./layouts/DefaultLayout";
import MainSection from "../components/sections/MainSection";

const Home:FC = () => {
    return (
        <DefaultLayout>
            <MainSection/>
        </DefaultLayout>
    );
};

export default Home;