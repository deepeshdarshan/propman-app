const ErrorHandler = (error: Error, info: { componentStack: string }) => {
    console.log('Message: ', error);
    console.log("ComponentStack: ", info.componentStack);
    return (
        <h1>Hello</h1>
    )
};

export default ErrorHandler;