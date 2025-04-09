type MessageProps = {
    name : string;
}

function Message({name}: MessageProps) 
{
    console.log(name); // Add this to check what the children actually are
    return <h1>Hello {name}</h1>
};

export default Message;