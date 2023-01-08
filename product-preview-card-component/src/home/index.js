import React, { useState } from "react";
import ProductImage from "../assets/image-product-desktop.jpg"
import AddToCartButton from "../components/buttons/addToCartButton"

const Home = () => {
    return (
        <main className="bg-primary-beige h-screen flex flex-col justify-center">
            <div className="bg-primary-white w-2/5 bg-beige m-auto h-1/2 rounded-2xl flex max-tablet:flex-col max-tablet:w-3/4 max-tablet:h-4/5">
                <img src={ProductImage} className="w-3/4 h-full rounded-l-2xl flex-1 max-tablet:w-full max-tablet:rounded-t-2xl max-laptop:rounded-bl-none max-tablet:h-1/3"></img>
                <div className="p-8 flex-1 max-tablet:p-6">
                    <h6 className='font-montserrat tracking-heading-space text-primary-text max-tablet:text-mobile-xs'>PERFUME</h6>

                    <h1 className='font-fraunces font-extrabold mr-12 mt-4 max-tablet:mr-0 text-lg max-tablet:mt-2 max-laptop:text-mobile-heading'>Gabrielle Essence Eau De Parfum </h1>

                    <p className='font-montserrat text-primary-text mt-4 text-sm max-tablet:mt-2 max-laptop:text-mobile-xs'>
                        A floral, solar and voluptuous interpretation composed by Olivier Polge,
                        Perfumer-Creator for the House of CHANEL.
                    </p>

                    <div className="flex mt-4 mb-4">
                        <h1 className='font-fraunces text-primary-green max-laptop:text-mobile-heading'>$149.99</h1>
                        <h6 className='font-montserrat self-center line-through text-primary-text ml-6 max-laptop:text-mobile-xs'>$169.99</h6>
                    </div>
                    <AddToCartButton />
                </div>
            </div>
        </main >
    )
}


export default Home;