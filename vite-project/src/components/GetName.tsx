import { useEffect, useState } from 'react';
import axios from 'axios';

function GetName() {
    const [Name, setName] = useState<string[]>([]); // State for user names
    const [loading, setLoading] = useState<boolean>(true); // Loading state
    const [error, setError] = useState<string | null>(null); // Error state
    const [selectedIndex, setSelectedIndex] = useState<number>(0); // Index for selected item
    const [Value, setValue] = useState<Value[]>([]); // State for values

    interface Value {
        id: number;
        bookName: string;
        // Define any other properties from the response as needed
    }

    const apiUrl = '/api';
    ; // Get the backend API URL from environment variable

    // Fetch user names from the backend API (example: /api/users)
    useEffect(() => {
        if (!apiUrl) {
            console.log(apiUrl)
            setError('API URL is not configured.');
            setLoading(false);
            return;
        }

        axios.get(`${apiUrl}/users`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
        .then((response) => {
            setName(response.data); // Set the user names data
            setLoading(false); // Mark loading as false
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            setError('Error fetching users data');
            setLoading(false); // Stop loading on error
        });
    }, [apiUrl]); // Only re-run if apiUrl changes

    //Fetch values from the backend API (example: /api/Values)
    useEffect(() => {
        if (!apiUrl) {
            setError('API URL is not configured.');
            return;
        }

        axios.get(`${apiUrl}/Values`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
        .then((response) => {
            setValue(response.data); // Set the values data
        })
        .catch((error) => {
            console.error('Error fetching values:', error);
            setError('Error fetching values data');
        });
    }, [apiUrl]); // Only re-run if apiUrl changes

    if (loading) return <div>Loading...</div>; // Loading message
    if (error) return <div>Error: {error}</div>; // Error message

    return (
        <>
            <h3>List</h3>
            <ul className="list-group">
                {Name.map((item, index) => (
                    <li
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>

            <br /><br />
            <h3>Values from .NET Core</h3>
            { <ul>
                {Value.map((item) => (
                    <li key={item.id}>{item.bookName}</li>
                ))}
            </ul> }
        </>
    );
}

export default GetName;
