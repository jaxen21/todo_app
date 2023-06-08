import { Card, Flex, Badge, Text, Button } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";

const Todo = () => {
    return (
        <Card>
            <Flex
                w={'100%'} mt={'2%'}
                direction="column"
            >
                <Card shadow="md" radius="md">
                    <Flex
                        sx={{ justifyContent: 'space-between' }}
                        align="center"
                    >
                        <Badge variant="dot"></Badge>
                        <Text>Task 1</Text>
                        <Text>aasm ,msajdb hadkh kasd sa anskjlaks jas,masl j vkjn v</Text>
                        <Button
                            variant="subtle"
                        // onClick={open}
                        >
                            <IconEdit />
                        </Button>
                    </Flex>
                </Card>
            </Flex>
        </Card>
    )
}

export default Todo;