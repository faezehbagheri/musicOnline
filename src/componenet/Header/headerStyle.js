
const headerStyle = {
    list: {
      fontSize: "14px",
      margin: 0,
      paddingLeft: "0",
      listStyle: "none",
      paddingTop: "0",
      paddingBottom: "0",
      color: "inherit",
      top:'5%',
      left:'2%',
      position: 'fixed'
    },
    listItem: {
      float: "left",
      color: "inherit",
      position: "relative",
      display: "block",
      width: "auto",
      margin: "0",
      padding: "0",
    },
    navLink: {
      color: "#ffffff",
      position: "relative",
    //   padding: "0.9375rem",
      fontWeight: "400",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "3px",
      lineHeight: "20px",
      textDecoration: "none",
      margin: "0px",
      display: "inline-flex",
      "&:hover,&:focus": {
        color: "#CC3333",
        background: "rgba(200, 200, 200, 0.2)"
      },
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    isDesktopRoot: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background:' rgb(255, 255, 255)',
      width: '30%',
      height: '70%'
  },
  isTabletRoot: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgb(255, 255, 255)',
      width: '50%',
      height: '70%'
  },
  isMobileRoot :{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgb(255, 255, 255)',
      width: '85%',
      height: '70%'
  },
  signin:{
    width: '30%',
      height: '70%'
  }
};
  
  export default headerStyle;
  