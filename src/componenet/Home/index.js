import React, { useState, useEffect } from 'react'
import classNames from "classnames";
import Parallax from '../Parallax';
import styles from "./HomeStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import DesktopTabs from '../DesktopTabs';
import MobileTabs from '../MobileTabs';
import Header from '../Header'
import Footer from '../Footer'

const useStyles = makeStyles(styles);

function Home() {
    const classes = useStyles();
    const [width, setWidth] = useState(window.innerWidth)
    const isMobile = width <= 500;
    const isDesktop = width > 500;
    useEffect(() => {
        const handleWindowSizeChange = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, [])
    return (
        <div>
            <Parallax image={require("../../assets/b.png")}>
            <Header />
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                {isDesktop && <DesktopTabs />}
                {isMobile && <MobileTabs />}
            </div>
            <Parallax
             image={require("../../assets/footerBack.png")}
             className={classNames(classes.parallax)}
             >
                 <Footer />
            </Parallax>
        </div>
    )
}

export default Home
