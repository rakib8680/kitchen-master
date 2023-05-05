import React from 'react';
import { useNavigation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import Pdf from "react-to-pdf";


const Blog = () => {
    const navigation = useNavigation()
    if (navigation.state === 'loading') {
        return <div className='flex justify-center h-[80vh] items-center bg-primary'><HashLoader color="#e3ed4c" size={60} /></div>
    }

    const ref = React.createRef();

    return (
        <div>
            <div className='background !h-auto md:py-40' >
                <div className='blog-container' ref={ref} >
                    <h1 className='text-5xl font-bold'>Latest Blogs</h1>
                    <div>
                        <h1 className='text-2xl mb-2 font-medium'>1. Difference between control and Uncontrolled component in react</h1>
                        <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally</p>
                    </div>
                    <div>
                        <h1 className='text-2xl mb-2 font-medium'>2. How to validate React props using PropTypes?</h1>
                        <p>any : The prop can be of any data type. bool : The prop should be a Boolean. number : The prop should be a number. string : The prop should be a string. func : The prop should be a function. array : The prop should be an array. object : The prop should be an object.</p>
                    </div>
                    <div>
                        <h1 className='text-2xl mb-2 font-medium'>3. Difference between nodejs and express js?</h1>
                        <p>Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</p>
                    </div>
                    <div>
                        <h1 className='text-2xl mb-2 font-medium'>4. What is a custom hook, and why will you create a custom hook?</h1>
                        <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                    </div>
                    <Pdf targetRef={ref} filename="kitchen_master_blog.pdf">
                        {({ toPdf }) => <button className='btn btn-secondary' onClick={toPdf}>Download PDF</button>}
                    </Pdf>


                </div>
            </div>
        </div>
    );
};

export default Blog;