import { Mail, Notifications, Pets, Search } from "@mui/icons-material";
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    InputBase,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    styled,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Searchs = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    width: "40%",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
}));

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography
                    variant="h6"
                    sx={{ display: { xs: "none", sm: "block" } }}
                >
                    SOCIAL MEDIA
                </Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Searchs>
                    <InputBase
                        sx={{ width: "100%" }}
                        placeholder="Search..."
                        startAdornment={
                            <Search
                                sx={{
                                    marginRight: "5px",
                                    width: "20px",
                                    height: "20px",
                                    color: "#a8a7a7",
                                }}
                            />
                        }
                    />
                </Searchs>
                <Icons>
                    <Badge
                        badgeContent={4}
                        color="error"
                        sx={{ cursor: "pointer" }}
                    >
                        <Mail />
                    </Badge>
                    <Badge
                        badgeContent={4}
                        color="error"
                        sx={{ cursor: "pointer" }}
                    >
                        <Notifications />
                    </Badge>
                    <Avatar
                        sx={{
                            width: "30px",
                            height: "30px",
                            cursor: "pointer",
                        }}
                        src="https://mui.com/static/images/avatar/1.jpg"
                        onClick={(e) => setOpen(true)}
                    />
                </Icons>
                <UserBox onClick={(e) => setOpen(true)}>
                    <Avatar
                        sx={{
                            width: "30px",
                            height: "30px",
                            cursor: "pointer",
                        }}
                        src="https://mui.com/static/images/avatar/1.jpg"
                    />
                    <Typography variant="span">John</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                sx={{ marginTop: "30px" }}
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Navbar;
