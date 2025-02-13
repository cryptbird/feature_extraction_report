import React, { useContext, useEffect } from 'react';
import Page1 from "./ReportPages/page1"
import Page2 from "./ReportPages/page2"
import Page3 from "./ReportPages/page3"
import { useLocation } from 'react-router-dom';

// import { AppContext } from "../AppContext";

const  ReportComLast = () => {
     const location = useLocation();
        const getQueryParams = (search) => {
          const params = new URLSearchParams(search);
          return {
            dob: params.get("patientDOB"),
            name: params.get("name"),
          };
        };
      
        const {dob, name } = getQueryParams(location.search);
      
    // console.log(useContext(AppContext));
    // const { testData, fetchTestData } = useContext(AppContext);
    
    // useEffect(() => {
    //     console.log("YEs");
    //     fetchTestData('e0408f60-c3a5-42f9-b98e-c2ec5969df4b', '612325cb-1373-4f86-9064-b6ff4185facb');
    // }, []);
    // console.log(testData);
    return (
        
        <div className=''>
            
            <Page1 />
            {/* <Page2 /> */}
            <Page3 />
            <div className='w-full h-auto font-manrope flex p-[4vw] justify-center items-center bg-new-gradient'>
                <div className='w-[85%] h-[90%] rounded-3xl bg-[#FFF9F8] p-6 shadow-lg'>
                    <table className='w-full table-auto text-center'>
                        <thead className='text-center'>
                            <tr className='text-left font-raleway text-g h-[2vw]ray-600'>
                                <th className='py-[2.5vw] px-6 mt-[4vw]  border-b font-bold  text-2xl border-r text-center border-gray-300'>Subskill</th>
                                <th className='py-[2.5vw] px-6 mt-[4vw] border-b font-bold text-2xl border-r text-center border-gray-300'>Performance</th>
                                <th className='py-[2.5vw] text-center mt-[4vw]  font-bold  text-2xl border-b px-6'>Results</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='1 border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Facing Forward: <br />
                                    <span className='text-wrap font-normal'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='2 border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Social Attention:<br />
                                    <span className='text-wrap font-normal'>Percentage of time the child gazed at the social half of the screen and the concentration of gaze on specific elements like people or toys.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='3 border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Attention to speech:<br />
                                    <span className='text-wrap font-normal'>Correlation between the child’s gaze patterns and the alternating conversation in a movie featuring two actors.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='4 border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Visual speed detection:<br />
                                    <span className='text-wrap font-normal'>Measures the child's ability to perceive and respond to the speed of moving objects or stimuli, reflecting their visual processing speed and reaction time.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='5 border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Motherese Vs techno:<br />
                                    <span className='text-wrap font-normal'>This comparison evaluates the child's visual attention to the nurturing tones of Motherese versus the stimulating, rhythmic sounds of Techno, revealing preferences between social and non-social auditory stimuli.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='6 border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Motherese Vs traffic:<br />
                                    <span className='text-wrap font-normal'>This analysis assesses the child's ability to focus on Motherese amidst the distracting sounds of traffic, offering insights into their social attentional focus and response to environmental noise</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='7 border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Response to  name call:<br />
                                    <span className='text-wrap font-normal'>Evaluates the child’s ability to recognize and respond to their name being called, indicating auditory attention and social responsiveness.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='8 border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>No repetitive behavior:<br />
                                    <span className='text-wrap font-normal'>Assesses the presence and frequency of repetitive actions, which can be indicative of patterns associated with neurodevelopmental conditions.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-yellow-200'>
                                    <div className="flex w-[11.5vw] justify-end items-end h-full rounded-full bg-yellow-400">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>41%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='9 border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Quality of vocalization:<br />
                                    <span className='text-wrap font-normal'>Analyzes the clarity, consistency, and social relevance of the child’s vocal sounds, reflecting their communication skills and verbal development.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='10 border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Gaze estimation:<br />
                                    <span className='text-wrap font-normal'>Measures the accuracy and focus of the child’s gaze on specific objects or people, providing insights into their visual attention and engagement.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='11 border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Joint Attention:<br />
                                    <span className='text-wrap font-normal'>Observes the child’s ability to share focus with another person on an object or event, which is crucial for social interaction and learning</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='12 border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Attention span:<br />
                                    <span className='text-wrap font-normal'>Assesses the duration and consistency of the child’s focus on tasks or stimuli, indicating their ability to sustain attention.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='13 border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Eye contact:<br />
                                    <span className='text-wrap font-normal'>Evaluates the frequency and quality of the child’s eye contact with others, which is essential for social interaction and communication.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='14 border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Pointing: <br />
                                    <span className='text-wrap font-normal'>Observes the child’s use of pointing to direct attention or indicate interest, a key aspect of nonverbal communication and joint attention.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Facing Forward: <br />
                                    <span className='text-wrap font-normal'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Facing Forward: <br />
                                    <span className='text-wrap font-normal'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Facing Forward: <br />
                                    <span className='text-wrap font-normal'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Facing Forward: <br />
                                    <span className='text-wrap font-normal'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Facing Forward: <br />
                                    <span className='text-wrap font-normal'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Facing Forward: <br />
                                    <span className='text-wrap font-normal'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Facing Forward: <br />
                                    <span className='text-wrap font-normal'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Facing Forward: <br />
                                    <span className='text-wrap font-normal'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Facing Forward: <br />
                                    <span className='text-wrap font-normal'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Facing Forward: <br />
                                    <span className='text-wrap font-normal'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Facing Forward: <br />
                                    <span className='text-wrap font-normal'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Facing Forward: <br />
                                    <span className='text-wrap font-normal'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                            <tr className='border-b border-gray-200'>
                                <td className='py-4 px-[5vw] border-r border-gray-300 font-semibold'>Facing Forward: <br />
                                    <span className='text-wrap font-normal'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</span></td>
                                <td className='py-4 px-[3vw] border-r border-gray-300'><div className='w-[18vw] h-[2vw] rounded-full bg-red-300'>
                                    <div className="flex w-[11vw] justify-end items-end h-full rounded-full bg-[#F32A2A]">
                                        <div className='flex justify-center text-sm items-center w-[2vw] h-[2vw] rounded-full bg-white'>
                                            <h1>33%</h1>
                                        </div>
                                    </div>
                                </div></td>
                                <td className='py-4 px-[5vw]'>Percentage of time the child faced the screen with open eyes, steady gaze, and stable face; used as a proxy for attention to the movies.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-full h-[30vw] bg-[#43284c] flex-col flex justify-center items-center text-justify">
                <h1 className='text-white font-Cormorant text-7xl font-semibold'>Thank You !</h1>
                <div className="flex w-[60vw] mt-[3vw] gap-[4vw] justify-center items-center">
                    {/* <div className="w-[15vw] h-[15vw] bg-slate-300"></div> */}
                    <div className='w-[50%] text-base text-white font-montserrat '>
                        <h1>Thank you for conducting the developmental screening for <br /> <center> <span className='font-bold text-3xl'>{name}.</span> </center></h1>
                        <h1 className='mt-4'>Your thorough assessment and careful observation have provided valuable insights into his abilities across key areas. We greatly appreciate your time, effort, and expertise in ensuring a comprehensive evaluation. </h1>
                        <h1 className='mt-4'>Your dedication to this process is truly commendable, and we are grateful for your contribution to Divyansh's growth and development.</h1>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default ReportComLast;
