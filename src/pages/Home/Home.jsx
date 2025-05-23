import React from 'react';
import Banner from '../../components/Banner/Banner';
import TopRecipes from '../../components/TopRecipes/TopRecipes';
import { useLoaderData } from 'react-router';
import Reviews from '../../components/Reviews/Reviews';

const Home = () => {
    const recipesData = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <TopRecipes recipesData={recipesData}></TopRecipes>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;