import { Button, Card, Container, Flex, Title, Textarea, Group, Grid, ScrollArea, Drawer, Text, Modal, Badge, } from "@mantine/core";
import React from "react";
import { IconPlus, IconEdit, IconTrash } from '@tabler/icons-react';
import { useState } from "react";
import Headers from "./components/headers/headers";
import { todo_data } from "./data";

const Dashboard = () => {
    const [todos, setTodos] = useState(todo_data);
    const [selectedTodoIndex, setSelectedTodoIndex] = useState('');
    const [editedTodo, setEditedTodo] = useState({});
    const [isDrawerOpen, setDrawerOpen] = useState(false)
    const [modalOpened, setModalOpened] = useState(false);
    const [newTodoTitle, setNewTodoTitle] = useState('')
    const [newTodoDescription, setNewTodoDescription] = useState('')
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [isAddingSubtask, setIsAddingSubtask] = useState(false);

    const addTask = () => {
        if (selectedTodo) {
            const updatedTodos = todos.map((todo) => {
                if (todo === selectedTodo) {
                    const newSubtask = {
                        status: 'todo',
                        title: newTodoTitle,
                        description: newTodoDescription,
                    };
                    const updatedTodo = {
                        ...todo,
                        subtasks: [...todo.subtasks, newSubtask],
                    };
                    setSelectedTodo(updatedTodo);
                    return updatedTodo;
                }
                return todo;
            });
            setTodos(updatedTodos);
            setModalOpened(false);
            setSelectedTodoIndex(null);
            setNewTodoTitle('');
            setNewTodoDescription('');
        } else {
            const newTodo = {
                status: 'todo',
                title: newTodoTitle,
                description: newTodoDescription,
                subtasks: [],
            };
            setTodos([...todos, newTodo]);
            setModalOpened(false);
            setNewTodoTitle('');
            setNewTodoDescription('');
        }
    };

    const addSubtask = (index) => {
        setIsAddingSubtask(true);
        setModalOpened(true);
        setSelectedTodoIndex(index);
    };

    const deleteSubtask = (index) => {
        const updatedSelectedTodo = { ...selectedTodo };
        updatedSelectedTodo.subtasks = updatedSelectedTodo.subtasks.filter((_, i) => i !== index);
        setSelectedTodo(updatedSelectedTodo);
    };

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    const updateTodo = (index, updatedTodo) => {
        setTodos((prevTodos) => {
            const updatedTodos = [...prevTodos];
            updatedTodos[index] = { ...updatedTodos[index], ...updatedTodo };
            return updatedTodos;
        });
    };

    const handleSave = () => {
        if (Object.keys(editedTodo).length > 0) {
            const updatedSelectedTodo = { ...selectedTodo, ...editedTodo };
            updateTodo(selectedTodoIndex, { ...updatedSelectedTodo, subtasks: selectedTodo.subtasks });
            setEditedTodo({});
            setDrawerOpen(false);
            setSelectedTodo(updatedSelectedTodo);
            setSelectedTodoIndex('');
            setIsAddingSubtask(false);
        }
    };

    const handleEdit = (index) => {
        setDrawerOpen(true);
        setSelectedTodo(todos[index]);
        setEditedTodo({
            ...editedTodo,
            status: todos[index].status
        });
    };

    const handleTitleChange = (e) => {
        setEditedTodo({ ...editedTodo, title: e.target.value });
    };

    const handleDescriptionChange = (e) => {
        setEditedTodo({ ...editedTodo, description: e.target.value });
    };

    return (
        <div>
            <Headers />
            <Container
                h={'100%'}
                ml={{ xs: '1%', sm: '5%', md: '10%' }}
                mr={{ xs: '1%', sm: '5%', md: '10%' }}
                mt={'2%'}
                position='center'
                size={'100%'}
            >
                <Flex sx={{ justifyContent: 'space-between' }} mb={'1%'}>
                    <Title order={1}>Welcome, Jayesh</Title>
                    <Button variant="light" radius="md" size="md" leftIcon={<IconPlus />} onClick={() => setModalOpened(true)}>
                        To Do
                    </Button>
                </Flex>
                <Card shadow="md" radius="md" h={'100%'}>
                    <Title order={4} color="gray" mb={'1%'}>Here is your to-do list.....</Title>
                    <Modal
                        centered withCloseButton={false} zIndex={999}
                        opened={modalOpened} onClose={() => setModalOpened(false)} h={'100%'}
                    >
                        <Flex direction="column" gap="md">
                            <Textarea
                                placeholder="title....."
                                label={isAddingSubtask ? "Subtask Title" : "Title"}
                                radius="md"
                                variant="filled"
                                size="md"
                                autosize
                                defaultValue={newTodoTitle}
                                onChange={(e) => setNewTodoTitle(e.target.value)}
                            />
                            <Textarea
                                placeholder="description....."
                                label={isAddingSubtask ? "Subtask Description" : "Description"}
                                variant="filled"
                                size="md"
                                autosize
                                minRows={5}
                                radius="md"
                                defaultValue={newTodoDescription}
                                onChange={(e) => setNewTodoDescription(e.target.value)}
                            />
                            <Button
                                variant="light"
                                onClick={() => addTask()}
                            >
                                {isAddingSubtask ? "Add Subtask" : "Add Task"}
                            </Button>
                        </Flex>
                    </Modal>
                    <Drawer
                        opened={isDrawerOpen}
                        size="xl" position="right"
                        zIndex={500}
                        onClose={() => setDrawerOpen(false)}
                    >
                        {selectedTodo &&
                            <Flex direction="column" gap="md">
                                <Title order={3} fw={500}>
                                    Edit To Do
                                </Title>
                                <Flex sx={{ justifyContent: 'space-between' }}>
                                    <Button
                                        variant="light"
                                        compact
                                        size="md"
                                        color={
                                            editedTodo.status === 'todo' ? 'gray' : editedTodo.status === 'inprogress' ? 'blue' : 'teal'
                                        }
                                        onClick={() => {
                                            setEditedTodo({
                                                status: editedTodo.status === 'todo' ? 'inprogress' : editedTodo.status === 'inprogress' ? 'done' : 'todo'
                                            })
                                        }
                                        }
                                    >
                                        {editedTodo.status === 'todo' ? 'Todo' : editedTodo.status === 'inprogress' ? 'In Progress' : 'Done'}
                                    </Button>
                                </Flex>
                                <Textarea
                                    label="Title"
                                    radius="md"
                                    variant="filled"
                                    size={'15px'}
                                    autosize
                                    minRows={1}
                                    defaultValue={selectedTodo.title}
                                    onChange={handleTitleChange}
                                />
                                <Textarea
                                    label="Description"
                                    radius="md"
                                    variant="filled"
                                    size="md"
                                    autosize
                                    minRows={5}
                                    defaultValue={selectedTodo.description}
                                    onChange={handleDescriptionChange}
                                />
                                <Flex sx={{ justifyContent: 'space-between' }}>
                                    <Text>Subtasks</Text>
                                    <Button
                                        variant="light" radius="md" size="sm" compact
                                        onClick={() => {
                                            setModalOpened(true)
                                            addSubtask()
                                        }}
                                        leftIcon={<IconPlus />}
                                    >
                                        subtask
                                    </Button>
                                </Flex>
                                <Card shadow="md" radius="md">
                                    <ScrollArea h={300}>
                                        <Flex direction="column" gap="xs" mt={'1%'} >
                                            {selectedTodo &&
                                                selectedTodo.subtasks.map((subtask, index) => (
                                                    <Card key={index} shadow="md" radius="md">
                                                        <Flex sx={{ justifyContent: 'space-between' }}>
                                                            <Flex gap={'5%'} w={'100%'}>
                                                                <Button
                                                                    radius="xl" variant="light"
                                                                    color={
                                                                        subtask.status === 'todo' ? 'gray' : subtask.status === 'inprogress' ? 'blue' : 'teal'
                                                                    }
                                                                    onClick={() => {
                                                                        const updatedSubtasks = [...selectedTodo.subtasks];
                                                                        updatedSubtasks[index].status =
                                                                            subtask.status === 'todo' ? 'inprogress' : subtask.status === 'inprogress' ? 'done' : 'todo';
                                                                        setSelectedTodo({ ...selectedTodo, subtasks: updatedSubtasks });
                                                                    }}
                                                                >
                                                                    {subtask.status === 'todo' ? 'Todo' : subtask.status === 'inprogress' ? 'In Progress' : 'Done'}
                                                                </Button>
                                                                <Title order={5}>{subtask.title}</Title>
                                                                <Text >{subtask.description}</Text>
                                                            </Flex>
                                                            <Button variant="subtle" color="red" compact onClick={() => deleteSubtask(index)}>
                                                                <IconTrash />
                                                            </Button>
                                                        </Flex>
                                                    </Card>
                                                ))}
                                        </Flex>
                                    </ScrollArea>
                                </Card>
                                <Button variant="light" onClick={handleSave}>
                                    Save
                                </Button>
                            </Flex>}
                    </Drawer>
                    <ScrollArea h={600}>
                        <Group mt={'2%'}>
                            <Grid w={'100%'}>
                                {todos.map((task, index) => (
                                    <Grid.Col xs={4} key={index}>
                                        <Card shadow="md" radius="md" h={'100%'}>
                                            <Flex direction="column" sx={{ justifyContent: 'flex-start' }}>
                                                <Flex sx={{ justifyContent: 'space-between' }} mb={'8%'}>
                                                    <Button
                                                        variant="light"
                                                        compact
                                                        size="md"
                                                        color={
                                                            task.status === 'todo' ? 'gray' : task.status === 'inprogress' ? 'blue' : 'teal'
                                                        }
                                                        onClick={() =>
                                                            updateTodo(index, {
                                                                status: task.status === 'todo' ? 'inprogress' : task.status === 'inprogress' ? 'done' : 'todo'
                                                            })}
                                                    >
                                                        {task.status === 'todo'
                                                            ? 'Todo' : task.status === 'inprogress' ? 'In Progress' : 'Done'}
                                                    </Button>
                                                    <Flex>
                                                        <Button variant="subtle" compact onClick={() => handleEdit(index)}>
                                                            <IconEdit />
                                                        </Button>
                                                        <Button variant="subtle" color="red" compact onClick={() => deleteTodo(index)}>
                                                            <IconTrash />
                                                        </Button>
                                                    </Flex>
                                                </Flex>
                                                <Title order={3}>{task["title"]}</Title>
                                                <Text>{task["description"]}</Text>
                                                {task["subtasks"] && task["subtasks"].length > 0 && (
                                                    <div>
                                                        <Badge size="sm" mt={'4%'}>{`${task["subtasks"].length} subtasks`}</Badge>
                                                    </div>
                                                )}
                                            </Flex>
                                        </Card>
                                    </Grid.Col>
                                ))}
                            </Grid>
                        </Group>
                    </ScrollArea>
                </Card>
            </Container>
        </div>
    );
};

export default Dashboard;
