import React from 'react'
import Popbox from './Popbox';
import data from '../data';

const Card = ({ card }) => {
    var date = card.date.split(" ");

    const Pop = data.map(item => {return( <Popbox key={item.SN} {...item}/>)})




    return (
        // <div
        //     key={card.id}
        //     className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
        // >
        //     <div
        //         style={{
        //             backgroundImage: `url(${card.url})`,
        //             backgroundSize: "cover",
        //             backgroundPosition: "center",
        //         }}
        //         className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        //     ></div>
        //     <div className="absolute inset-0 z-10 grid place-content-center">
        //         <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
        //             {card.title}
        //         </p>
        //     </div>
        // </div>
        <div className='w-[285px]  flex flex-col  text-base font-Sans-serif font-medium tracking-tighter	'>
            <div className='flex flex-col items-center border-b-[1px] border-border h-max  w-full pb-4	'>
                <div className='font-meduim'>
                    {date[0] + " " + date[1]}

                </div>
                <div className='text-xs text-datessecondary'>{date[2]}</div>

            </div>
            <div className='h-full border-r-[1px] border-border pl-1 pr-1 pt-2 '>{Pop}</div>
            
        </div>
    )
}

export default Card