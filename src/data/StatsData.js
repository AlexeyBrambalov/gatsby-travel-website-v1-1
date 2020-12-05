import React from "react"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer} from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

export const StatsData = [
    {
        icon: ( 
        <GiEarthAmerica 
        css={`
            color: #047bf1;
        `} 
        />
        ),
        title: "OVER 100 DESTINATIONS",
        desc: "Travel to over 100unique places",
    },
    {
        icon: (
             <MdAirplanemodeActive 
        css={`
            color: #f3a82e;
        `}
        />
        ),
        title: "1 million Trip",
        desc: "Tover 1 million trips comsplete last year",
    },

    {
        icon: ( 
        <MdTimer
         css={`
            color: #f34f2e;
        `}
        />
        ),
        title: "Fastest Support",
        desc: "Access our support team 24/7",
    },

    {
        icon: (
            <FaMoneyCheck css={`
            color: #3af576;
            `}
            />
        ),
        title: "Best deal",
        desc: "We offer the best prices",
    },
]
