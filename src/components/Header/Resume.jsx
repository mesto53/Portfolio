import React from 'react';
import resume from '../../assets/images/resume.pdf';


export default function Resume() {
    return (
        <div className="flex items-center">
            <a
                href={resume}
                download="Resume"
                className="md:flex md:items-center mx-4 my-6 md:my-0 flex items-center space-x-2 text-white border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-200"
            >
                <i className="ri-mail-download-line"></i>Resume
            </a>
        </div>
    );
}
