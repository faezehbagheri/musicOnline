const componentsStyle = {
    container:{
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        width: "100%",
        "@media (min-width: 576px)": {
            maxWidth: "540px"
          },
          "@media (min-width: 768px)": {
            maxWidth: "720px"
          },
          "@media (min-width: 992px)": {
            maxWidth: "960px"
          },
          "@media (min-width: 1200px)": {
            maxWidth: "1140px"
          }
    },
    main: {
      background: "#FFFFFF",
      position: "relative",
      zIndex: "3",
      height: "700px"
    },
    mainRaised: {
      margin: "-60px 30px 0px",
      borderRadius: "8px",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    link: {
      textDecoration: "none"
    },
    textCenter: {
      textAlign: "center"
    },
    signin:{
      color: "#ff0000",
      top: "-70%",
    },
    parallax:{
      marginTop: '-40rem'
    }
  };
  
  export default componentsStyle;