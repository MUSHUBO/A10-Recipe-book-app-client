import React from 'react';
import Banner from '../../components/Banner/Banner';
import TopRecipes from '../../components/TopRecipes/TopRecipes';
import { useLoaderData } from 'react-router';
import Reviews from '../../components/Reviews/Reviews';
import BestRecipes from '../../components/BestRecipes/BestRecipes';

const Home = () => {
    const recipesData = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <TopRecipes recipesData={recipesData}></TopRecipes>
            <BestRecipes></BestRecipes>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;