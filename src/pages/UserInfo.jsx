import { MenuListItem } from "../Component/MenuListItem";
import { useState, useRef, useEffect, useContext } from "react";
import { motion, useAnimate, stagger, AnimatePresence } from "framer-motion";
import { GeneralContext } from "../hooks/Context";
import { PleaseLog } from "../Component/User/PleaseLog";
import { Pricing } from "../Component/User/Pricing";
import { UserData } from "../Component/User/UserData";

const UserInfo = () => {

    const svgRef = useRef();
    const textRef = useRef();
    const [selectedTab, setSelectedTab] = useState("User Info");
    const [target, userAnimation] = useAnimate();
    const { isLoggedIn, user } = useContext(GeneralContext)

    useEffect(() => {
        userAnimation("li,a", {
            opacity: [0, 1],
            x: [-100, 0]
        }, {
            delay: stagger(0.1)
        });
    }, [userAnimation]);

    const variants = {
        selectedTab: {
            color: "#0ea5e9",
            borderRadius: "8px",
            target: textRef.current
        },
        notSelectedTab: {
            scale: 1,
            color: "#fafafa",
            borderRadius: "0"
        },
        selectedSvg: {
            scale: 14,
            opacity: 1,
            target: svgRef.current
        },
        notSelectedSvg: {
            scale: 0,
            opacity: 0,
            target: svgRef.current
        }
    };

    const selectTab = (tab) => {
        setSelectedTab(tab);
    };

    const showTab = (tab) => {
        switch (tab) {
            case "User Info":
                return <UserData user={user === undefined ? "" : user} />
            case "Pallettes":
                return <h1>Pallettes</h1>
            case "Privacy":
                return <h1>Privacy</h1>
            case "Settings":
                return <h1>Settings</h1>
        }
    }

    const tabs = ["User Info", "Pallettes", "Pricing", "Privacy", "Settings"];

    return (
        <AnimatePresence>
            <main
                key={"UserInfo"}
                className="flex flex-row bg-gradient-to-r from-blue-500 via-sky-500 via-30% to-[#3FF8CD] to-86& h-screen w-screen columns-2 justify-center items-start pr-40 py-40 text-neutral-50"
                style={{
                    gridTemplateColumns: "30% 1fr"
                }}
            >
                <button
                    onClick={() => window.history.back()}
                    className="absolute top-4 left-4"
                >
                    <svg
                        fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </button>
                <motion.aside
                    className="w-1/3 0 px-4 flex flex-col justify-center content-start items-end pr-12"
                >
                    <motion.menu
                        className="flex flex-col gap-2 items-end w-2/3 "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        ref={target}
                    >
                        {tabs.map((tab) => (
                            <MenuListItem key={tab} name={tab} state={selectedTab} selectIt={selectTab} variants={variants} svgRef={svgRef} textRef={textRef} />
                        ))}
                    </motion.menu>
                </motion.aside>
                <motion.section
                    className="w-2/3 h-full min-h-700px bg-gradient-to-b from-[#fafafa65] to-[#1c1c1c10] rounded-2xl p-4 ring-1 ring-neutral-50 shadow-soft"
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, transition: { duration: 0.7 } }}
                >

                    {
                        selectedTab === "Pricing" ?
                            <Pricing />
                            :
                            isLoggedIn ?
                                showTab(selectedTab)
                                :
                                <PleaseLog />
                    }

                </motion.section>
            </main>
        </AnimatePresence >
    );
};

export default UserInfo;