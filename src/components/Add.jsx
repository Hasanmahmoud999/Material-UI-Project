import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Fab,
    Modal,
    Stack,
    TextField,
    Tooltip,
    Typography,
    styled,
} from "@mui/material";
import React, { useState } from "react";
import {
    Add as AddIcon,
    DateRange,
    EmojiEmotions,
    Image,
    PersonAdd,
    VideoCameraBack,
} from "@mui/icons-material";

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
});

const Add = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip
                onClick={(e) => setOpen(true)}
                title="Delete"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(50% - 25px)", sm: 30 },
                }}
            >
                <Fab
                    color="primary"
                    aria-label="add"
                >
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    width={400}
                    height={280}
                    p={3}
                    borderRadius={5}
                    bgcolor={"background.default"}
                    color={"text.primary"}
                >
                    <Typography
                        variant="h6"
                        color="gray"
                        textAlign="center"
                    >
                        Ceate Post
                    </Typography>
                    <UserBox>
                        <Avatar
                            src="https://mui.com/static/images/avatar/1.jpg"
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography
                            variant="span"
                            fontWeight={500}
                        >
                            John Doe
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        palceholder="What's on your mind"
                        variant="standard"
                    />
                    <Stack
                        direction="row"
                        gap={1}
                        mt={2}
                        mb={3}
                    >
                        <EmojiEmotions
                            color="primary"
                            sx={{ cursor: "pointer" }}
                        />
                        <Image
                            color="secondary"
                            sx={{ cursor: "pointer" }}
                        />
                        <VideoCameraBack
                            color="success"
                            sx={{ cursor: "pointer" }}
                        />
                        <PersonAdd
                            color="error"
                            sx={{ cursor: "pointer" }}
                        />
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        variant="contained"
                        aria-label="Basic button group"
                    >
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    );
};

export default Add;
