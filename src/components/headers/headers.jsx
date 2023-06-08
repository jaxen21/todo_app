import { Box, Flex, createStyles, Header, Title } from "@mantine/core";

const useStyles = createStyles((theme) => ({}))

export default function Headers(props) {
    const { classes } = useStyles();
    return (
        <Box>
            <Header height={'80px'} className={classes.header}>
                <Flex
                    justify="center" align="center"
                >
                    <Title>To Do App</Title>
                </Flex>
            </Header>
        </Box>
    )
}