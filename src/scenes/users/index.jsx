import { Box } from "@mui/material";
import Header from "../../components/Header";

const Users = () => {
    return ( 
        <Box m="20px"> 
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="USERS" subtitle="Welcome to Users Page" />
            </Box>
        </Box>
    )
}

export default Users;