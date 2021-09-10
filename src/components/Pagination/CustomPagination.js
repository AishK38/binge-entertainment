import Pagination from "@material-ui/lab/Pagination";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
    },
});
const CustomPagination = ({setPage, numofpages = 10}) => {

    const handleChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };

    return (
        <div
          style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: 10,
          }}
        >
            <ThemeProvider theme={darkTheme}>
              <Pagination count={numofpages} onChange={(e) => handleChange(e.target.textContent)} 
              color='primary'/>
            </ThemeProvider>
        </div>
    );
};

export default CustomPagination;
