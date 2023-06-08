import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Card, Center, Flex, Title, TextInput, PasswordInput, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { setLoggedIn } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === "jayesh" && password === "Jayesh@21") {
            setLoggedIn(true);
            navigate("/dashboard");
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <Center mt={'10%'} w={'100%'}
        >
            <Flex w={'100%'} gap="md"
                justify="center"
                align="center"
                direction="column"
            >
                <Title>Welcome!</Title>
                <Card
                    shadow="md" radius="md"
                    w={{ xs: '90%', sm: '80%', md: '70%', lg: '60%', xl: '50%' }}
                >
                    <Flex
                        gap="xl"
                        justify="center"
                        align="center"
                        direction="column"
                    >
                        <Title order={2}>LOGIN to continue..</Title>
                        <TextInput
                            placeholder="Username"
                            label="Username" radius="md"
                            size="md" withAsterisk
                            value={username} w={'100%'}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <PasswordInput
                            placeholder="Password"
                            label="Password" radius="md"
                            size="md" withAsterisk
                            value={password} w={'100%'}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            variant="light" radius="md" size="md"
                            onClick={handleLogin} w={'100%'}
                        >
                            Login
                        </Button>
                    </Flex>
                </Card>
            </Flex>
        </Center>
    );
};

export default Login;
